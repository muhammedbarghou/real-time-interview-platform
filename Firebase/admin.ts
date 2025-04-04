import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    try {
      // Using non-prefixed environment variables for server-side only
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
      });
      console.log("Firebase Admin initialized successfully");
    } catch (error) {
      console.error("Firebase Admin initialization error:", error);
      throw error;
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

// Safely export the Firebase Admin services
let auth, db;
try {
  const services = initFirebaseAdmin();
  auth = services.auth;
  db = services.db;
} catch (error) {
  console.error("Failed to initialize Firebase Admin:", error);
  throw new Error(
    "Firebase Admin SDK initialization failed. Check your environment variables.",
  );
}

export { auth, db };
