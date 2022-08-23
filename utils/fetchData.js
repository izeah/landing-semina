import axios from "../config";

export function getData(url, params, token) {
    return axios.get(`${url}`, {
        params,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export function postData(url, payload, token) {
    return axios.post(`${url}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
