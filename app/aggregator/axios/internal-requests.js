const axios = require('axios');

/**
 * returns the axios object used to send request to the other services
 * @returns {AxiosInstance}
 */
const send_internal_request =  () => {
    return axios.create({
        baseURL: 'http://<url>',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

const axios_instance = send_internal_request();

module.exports = { axios_instance };
