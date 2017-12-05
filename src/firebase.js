import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBB0gWARmOszDhKQ3oRq29OTHAXQgrIc2Q",
  authDomain: "goalcoach-91c8c.firebaseapp.com",
  databaseURL: "https://goalcoach-91c8c.firebaseio.com",
  projectId: "goalcoach-91c8c",
  storageBucket: "goalcoach-91c8c.appspot.com",
  messagingSenderId: "703502632282"
}

export const firebaseApp  = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
