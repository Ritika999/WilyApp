import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();