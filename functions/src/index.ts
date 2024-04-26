import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';
import { info } from 'firebase-functions/logger';
import { defineString } from 'firebase-functions/params';
import axios from 'axios';

const OWNER = defineString('OWNER');
const REPO = defineString('REPO');
const BUILD_URL = defineString('BUILD_URL');

initializeApp();

export const buildOnWritten = onDocumentWritten('**/*', async (event) => {
  axios
    .post(BUILD_URL.value(), { owner: OWNER.value(), repo: REPO.value() })
    .then((response) => {
      info('Response:', response.data);
    })
    .catch((error) => {
      info('Error Caught:', error.message);
    });
});
