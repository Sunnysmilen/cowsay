import cowsay from "cowsay";

const cowsay = require("cowsay");
const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
  cowsay.say({
    text: `Hello I'm ${name} from ${campus}`,
    e: "oO",
    T: "U ",
  })
);
