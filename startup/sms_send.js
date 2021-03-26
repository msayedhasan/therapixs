const https = require("https");
const axios = require("axios");

const username = "msayedhasan.a@gmail.com";
const password = "Mo$@yed54";
// const senderName = "SmartSMS";
const senderName = "MotoBar";

exports.send = async (number, message) => {
  let res = await axios.get(
    `https://smssmartegypt.com/sms/api/?username=${username}&password=${password}&sendername=${senderName}&message=${message}&mobiles=+20${number}`
  );
  return res.data;
};
