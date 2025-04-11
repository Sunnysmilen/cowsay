import cowsay from "cowsay";

require("dotenv").config();

const cowsay = require("cowsay");
const message = process.env.MESSAGE;
console.log(
  cowsay.say({
    text: message,
    e: "oO",
    T: "U ",
  })
);
