const express = require("express");
const router = express.Router();

let responseMessage = [];

// Asyncronous function
function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    if (delay > 0) {
      setTimeout(() => {
        let waitingTimeMessage = "You waited " + delay + " milliseconds";
        responseMessage.push({ message: waitingTimeMessage });
        resolve(waitingTimeMessage);
      }, delay);
    } else {
      reject("Delay must be greater than 0");
    }
  });
}

// Asyncronous Route
router.get("/async", async (req, res) => {
  responseMessage = [];

  try {
    const msg1 = await setTimeoutPromise(500);
    console.log(msg1);

    const msg2 = await setTimeoutPromise(100);
    console.log(msg2);

    res.status(200).json(responseMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

// Syncronous function
function setTimeoutDelay(delay) {
  if (delay < 0) {
    return "Delay must be greater than 0";
  } else {
    setTimeout(() => {
      let waitingTimeMessage = "You waited " + delay + " milliseconds";
      responseMessage.push({ message: waitingTimeMessage });
      return waitingTimeMessage;
    }, delay);
  }
}

// Syncronous Route
router.get("/sync", (req, res) => {
  responseMessage = [];
  const msg1 = setTimeoutDelay(500);
  console.log(msg1);

  const msg2 = setTimeoutDelay(100);
  console.log(msg2);

  setTimeout(() => {
    res.status(200).json(responseMessage);
  }, 1000);
});

module.exports = router;
