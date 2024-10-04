// var admin = require("firebase-admin");

// var serviceAccount = require("../motobar-firebase-adminsdk-43lq8-e55f95e7c4.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://motobar.firebaseio.com",
// });

// var options = {
//   priority: "high",
//   timeToLive: 60 * 60 * 24,
// };

// exports.send = async (message) => {
//   // return admin
//   //   .messaging()
//   //   .send(message)
//   //   .then((response) => {
//   //     console.log("Successfully sent message:", response);
//   //   })
//   //   .catch((error) => {
//   //     console.log("Error sending message:", error);
//   //   });
//   return await admin.messaging().send(message);
//   // return await admin.messaging().sendToDevice(fcmToken, message, options);
// };

// exports.sendToDevice = async (fcmToken, message) => {
//   return await admin.messaging().sendToDevice(fcmToken, message, options);
// };

// exports.sendMultiCast = async (message) => {
//   return await admin.messaging().sendMulticast(message);
// };

// // admin.messaging().sendToDevice(fcmToken, payload, options).then(res => console.log(res);).catch(err => console.log("error sending message: " , err);)
