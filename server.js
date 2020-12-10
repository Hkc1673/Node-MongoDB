const express = require("express");

const app = express();
const port = 5001;

const router = require("./routes/router");

app.use("*", router )

app.listen(port, () => {
    console.log("I am listening")
});