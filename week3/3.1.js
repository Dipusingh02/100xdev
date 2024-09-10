// . User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
// 2. User should send a username and password in headers
const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if (username != "dipu" && password != "nandu") {
        res.status(400).json({
            msg: "somethings up with your inputs",
        });
        return;
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "somethings up with your inputs",
        });
        return;
    }
    res.json({
        msg: "Your kidney is fine",
    });

app.listen(3000);
