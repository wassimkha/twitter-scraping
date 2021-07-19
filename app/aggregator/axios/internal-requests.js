const axios = require('axios');

const send_internal_request =  () => {
    // return axios.create({
    //     headers: {
    //         'Content-Type': 'application/json'
    //         },
    //     })
    return axios.create({
        baseURL: 'http://174.138.115.186',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

const axios_instance = send_internal_request();

module.exports = { axios_instance };
