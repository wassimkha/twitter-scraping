const express = require('express');
const {axios_instance} = require("../axios/internal-requests");
const router = express.Router();


/**
 * Route serving to fetch all the users in our database.
 * @name get/aggregate-users
 * @function
 * @inner
 * @param {mongo_params} the filter params ran directly again the mongoDB database
 * @param {page} the current page (the # of users to skip)
 */
router.post('/aggregate-users', async (req, res) => {
    console.log("agggregate users")
    let params = {}
    let page = 0;

    if (req.body.mongo_params) {
        params = req.body.mongo_params;
    }
    if (req.body.page) {
        page = req.body.page;
    }


    console.log(`params ${params} and page ${page}`)
    const data = await axios_instance.get('/cron/getters', {
        data: {
            "mongo_params": params,
            "page": page
        }
    }).catch(e => console.log(e))
    console.log(`data as ${data}`)
    if (data && data.data) {
        res.json(data.data)
    } else {
        res.json({data: []})
    }


});

module.exports = router;