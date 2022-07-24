import firebase from "firebase/app";
import "firebase/database";

const app = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

function initialize() {
  if (!firebase.apps.length) firebase.initializeApp(app);
  else firebase.app();
}

export default initialize;
