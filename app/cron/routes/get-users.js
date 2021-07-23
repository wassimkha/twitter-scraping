const express = require('express');
const Twitter_User = require('../model/twitter-user')


const router = express.Router();


/**
 * Route serving to fetch all the users in our database.
 * @name get/getters
 * @function
 * @inner
 * @param {mongo_params} the filter params ran directly again the mongoDB database
 * @param {page} the current page (the # of users to skip)
 */
router.get('/getters', async (req, res) => {
    console.log(`getting users`)
    let params = {}
    let skip = 0;


    if (req.body.mongo_params) {
        params = req.body.mongo_params;
    }
    if (req.body.page) {
        skip = (req.body.page) * 20;
    }
    console.log(`params ${params} and skip ${skip}`)
    let users = []
    try {
        users = await Twitter_User.find(params).skip(skip)
    } catch (e) {
        console.log(e)
    }
    console.log(`users length as ${users.length}`)
    res.json({data: users})
    }
);

module.exports = router;