var admin = require("firebase-admin");

var serviceAccount = require("../motobar-firebase-adminsdk-43lq8-e55f95e7c4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://motobar.firebaseio.com",
});

var options = {
  priority: "high",
  timeToLive: 60 * 60 * 24,
};

exports.send = async (fcmToken, message) => {
  await admin.messaging().sendToDevice(fcmToken, message, options);
};

exports.sendMultiCast = async (message) => {
  await admin.messaging().sendMulticast(message);
};

// admin.messaging().sendToDevice(fcmToken, payload, options).then(res => console.log(res);).catch(err => console.log("error sending message: " , err);)
