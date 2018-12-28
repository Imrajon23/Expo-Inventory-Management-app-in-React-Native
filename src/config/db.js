import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyCJZHk8pdgRR7p6Dei7iN6PCQ0kYvnajyk",
    authDomain: "fir-example-a56f4.firebaseapp.com",
    databaseURL: "https://fir-example-a56f4.firebaseio.com",
    projectId: "fir-example-a56f4",
    storageBucket: "fir-example-a56f4.appspot.com",
    messagingSenderId: "63759433848"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
