const { Router } = require("express");
const express = require("express");
const app = express();
const router = express.Router();
const { body, validationResult } = require('express-validator');
const request = require("request");




router.get("/:id", async (req, res) => {
    const url = `https://jsonplaceholder.typicode.com/users/${req.params.id}`;
    const url2 = "https://jsonplaceholder.typicode.com/todos"
    console.log(url)
    try {
        const data = request(url, { json: true }, (err, ress, body) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                const rcvData = ress.body;
                let resArr = [];
                const data2 = request(url2, { json: true }, (err, res2, body) => {
                    res2.body.map((curEle) => {
                        if (curEle.userId == 1) {
                            curEle.userId = undefined;
                            resArr.push(curEle);
                        }
                    })
                    console.log(resArr)
                    rcvData.todos = resArr;
                    res.status(200).json({ message: "This api is created by Raushan Kumar for the Assignment of Roxiler Systems" , rcvData });
                })
            }
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Some error occured");
    }
})









module.exports = router;