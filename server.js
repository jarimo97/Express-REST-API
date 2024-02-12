const express = require("express");
const masterRouter = require("./routes/masterRouter");
const slowRouter = require("./routes/slowRouter");

const app = express();
const port = 3000;

//express.json allows to use the request as a json and access to the items passed.
app.use(express.json());

// Declare the main router
app.use('/master-router', masterRouter);
// Declare the slow router
app.use('/slow-router', slowRouter);


// Sample route to serve index.html from /public folder 
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
