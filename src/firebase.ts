import { initializeApp } from 'firebase/app';
import type { DocumentData } from 'firebase/firestore';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getData = async (collectionName: string, category?: string): Promise<DocumentData[]> => {
  let q;

  if (category) {
    // If a category filter is provided, create a query with a where filter
    q = query(collection(db, collectionName), where('project_category', '==', category));
  } else {
    // If no category is provided, fetch all documents from the specified collection
    q = collection(db, collectionName);
  }

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(doc => doc.data());
  console.log(data);

  return data;
};