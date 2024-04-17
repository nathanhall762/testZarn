import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';
import { onRequest } from 'firebase-functions/v2/https';
import { info } from 'firebase-functions/logger';
import { defineString } from 'firebase-functions/params';
import axios from 'axios';

const GITHUB_REPO = defineString('GITHUB_REPO');
const GITHUB_TOKEN = defineString('GITHUB_TOKEN');
const WORKFLOW_ID = defineString('WORKFLOW_ID');
const PROJECT_ID = defineString('PROJECT_ID');
const QUEUE_NAME = defineString('QUEUE_NAME');
const BUILD_URL = defineString('BUILD_URL');
const location = 'us-central1';

initializeApp();

export const buildMe = onRequest(async (req, res) => {
  const currentDate = new Date();
  const thisTimestamp = Math.floor(currentDate.getTime() / 1000);

  // run in 5 minutes
  const toRunTimestamp = thisTimestamp + 5 * 60;

  await createBuildTask(toRunTimestamp)
    .then(() => {
      res.send('success');
    })
    .catch((error: any) => {
      res.send(error);
    });
});

export const buildOnWritten = onDocumentWritten(
  'projects/**',
  async (event) => {
    axios
      .get(BUILD_URL.value())
      .then((response) => {
        info('Response:', response.data);
      })
      .catch((error) => {
        info('Error Caught:', error.message);
      });
  }
);

const createBuildTask = async (toRunTimestamp: number) => {
  const { v2beta3 } = await import('@google-cloud/tasks');
  const tasksClient = new v2beta3.CloudTasksClient();
  const parent = tasksClient.queuePath(
    PROJECT_ID.value(),
    location,
    QUEUE_NAME.value()
  );

  const [tasklist] = await tasksClient.listTasks({ parent });

  if (tasklist.length > 0) {
    info('task debounced');

    // clear to debounce the task
    for (const task of tasklist) {
      // shitty code to catch error when task gets deleted more than once
      tasksClient.deleteTask(task).catch((err) => info('error deleting', err));
    }
  }

  const body = {
    ref: 'main',
    inputs: {},
  };

  const task = {
    scheduleTime: {
      seconds: toRunTimestamp,
    },
    httpRequest: {
      httpMethod: 'POST' as const,
      url: `https://api.github.com/repos/${GITHUB_REPO.value()}/actions/workflows/${WORKFLOW_ID.value()}/dispatches`,
      body: Buffer.from(JSON.stringify(body)).toString('base64'),
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GITHUB_TOKEN.value()}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
      },
    },
  };

  const [response] = await tasksClient.createTask({ parent, task });

  info('task added');
  return response;
};
