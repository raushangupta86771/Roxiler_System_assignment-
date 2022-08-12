const { Router } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const { body, validationResult } = require('express-validator');
const request = require("request");




router.get("/", async (req, res) => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
        const data = request(url, { json: true }, (err, ress, body) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                const rcvData = ress.body;
                let resArr = [];
                rcvData.map((curEle, idx) => {
                    curEle.userId = undefined;
                    resArr.push(curEle)
                })
                console.log(resArr);
                res.status(200).json({ message: "This api is created by Raushan Kumar for the Assignment of Roxiler Systems" , resArr });
            }
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Some error occured");
    }
})




module.exports = router;