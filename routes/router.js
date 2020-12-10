const express =  require("express");

const router = express.Router();

router.get("/", (reg, res) => {
    console.log("Home Page")
    res.send("Home")
});

router.get("/api", (reg, res) => {
    console.log("Api")
    res.send("Api")
});














module.exports = router;