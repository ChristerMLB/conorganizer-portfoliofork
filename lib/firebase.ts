'use client';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
import { collection, doc, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_DB_API_KEY,
    authDomain: 'regncon2023.firebaseapp.com',
    projectId: 'regncon2023',
    storageBucket: 'regncon2023.appspot.com',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DB_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_DB_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_DB_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const eventsRef = collection(db, 'events');
export const eventRef = (id: string) => doc(db, `events/${id}`);
export const allUserSettingsRef = collection(db, 'usersettings');
export const userSettingsRef = (userId: string) => doc(db, `usersettings/${userId}`);
export const participantEnrollmentsRef = (eventId: string, userId: string, participantId: string) =>
    doc(db, `events/${eventId}`, `/enrollments/${userId}`, `/eventParticipants/${participantId}`);
export const participantsRef = (userId: string) => collection(db, `usersettings/${userId}/participants/`);
export const participantRef = (userId: string, participantId: string) =>
    doc(db, `usersettings/${userId}/participants/${participantId}`);
export const enrollmentChoicesRef = (eventId: string) => collection(db, `events/${eventId}/enrollmentChoices/`);
