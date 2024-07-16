import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

export default function firebase() {
    const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMNET_ID,
    };

    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    // console.log(app);

    const db = getFirestore(app);

    // Function to list all collections
    async function listAllCollections() {
      const collections = await getDocs(collection(db, '/'));
      collections.forEach(doc => {
        console.log(doc.id);
      });
    }
    
    // Call the function to list collections
    listAllCollections().catch(console.error);
}
