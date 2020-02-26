import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider;
export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses)
// });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses)
//     });

// database.ref('expenses').push({
//     descritpion: 'bill',
//     note: 'paid on time',
//     amount: 1575,
//     createdAt: null
// });

// database.ref('expenses').push({
//     descritpion: 'gas bill',
//     note: 'delayed',
//     amount: 75,
//     createdAt: null
// });

// database.ref('expenses').push({
//     descritpion: 'burger',
//     note: 'none',
//     amount: 10,
//     createdAt: null
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
// });


// setTimeout(() => {
//     database.ref('name').set('Michael')
// }, 2000);



// database.ref().set({
//     name: 'spukin',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Poznan',
//         country: 'Poland'
//     }
// }).then(() => {
// console.log('data saved');
// }).catch((e) => {
// console.log('error at saving: ', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => console.log('object removed'))
// //     .catch((e) => console.log('error in removing object :', e));
