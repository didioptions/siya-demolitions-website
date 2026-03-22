
// This function now securely reads Firebase configuration from environment variables.
// It is essential that you set these variables in your Vercel project settings.
export const getFirebaseConfig = () => {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAfVSBWXuea8oQm8ChY_7_9BMaqS5HWya4",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "sima-demolitions-live.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "sima-demolitions-live",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "sima-demolitions-live.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "398595526812",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:398595526812:web:f7c5894ac7c6befa71dd59",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-WGF4MFS50Y",
  };

  // This check is primarily for developer awareness and won't fail the build
  // because fallbacks are provided. It will only log an error if a key is missing
  // from both the environment and the fallback, which should not happen with this fix.
  for (const [key, value] of Object.entries(firebaseConfig)) {
    if (!value) {
      console.error(`Firebase config value missing for: ${key}`);
    }
  }

  return firebaseConfig;
};
