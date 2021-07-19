const express = require('express');
const {axios_instance} = require("../axios/internal-requests");
const router = express.Router();

router.get('/aggregate-users', async (req, res) => {
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