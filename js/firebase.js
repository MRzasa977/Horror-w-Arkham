var firebaseConfig = {
   apiKey: "AIzaSyDxY0FB6m9kTfVEJw-H5K9_BIqheOgsMn8",
   authDomain: "arkhamhorror-b8700.firebaseapp.com",
   databaseURL: "https://arkhamhorror-b8700-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "arkhamhorror-b8700",
   storageBucket: "arkhamhorror-b8700.appspot.com",
   messagingSenderId: "621707380321",
   appId: "1:621707380321:web:c3d13c123ff04f65e48c20",
   measurementId: "G-ESK4KVY2VR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const getFirebaseData = (variable) => {
   return firebase
      .database()
      .ref()
      .child(variable)
      .get()
      .then((snapshot) => {
         if (snapshot.exists()) {
            return snapshot.val();
         } else {
            console.log('No data available');
         }
      })
      .catch((error) => {
         console.error(error);
      });
};

const sendFirebaseData = (variable, value) => {
   firebase.database().ref(variable).set(value);
};
