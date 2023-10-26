
//single function api with difference request

import axios from 'axios';

export const commonApi = async (httpMethod, url, reqBody) => {
    let requestConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await axios(requestConfig).then((result) => {
        return result
    }).catch((err) => err)
}