import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
  apiKey: "AIzaSyDl9Ar4nXPp3QaQ2xrHUYx1VNqwrkmJ3U0",
  authDomain: "project-kasuga.firebaseapp.com",
  databaseURL: "https://project-kasuga.firebaseio.com",
  projectId: "project-kasuga",
  storageBucket: "project-kasuga.appspot.com",
  messagingSenderId: "783609252590",
  appId: "1:783609252590:web:c496bc7456d90220d481ff",
  measurementId: "G-DNZLBPH0GJ"
})

firestore().settings({ timestampsInSnapshots: true })

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err)
  })
