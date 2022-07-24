import firebase from "firebase/app";
import "firebase/database";

const app = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  appId: process.env.REACT_APP_APP_ID,
};

function initialize() {
  if (!firebase.apps.length) firebase.initializeApp(app);
  else firebase.app();
}

export default initialize;
