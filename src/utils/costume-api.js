import axios from 'axios'
import { getAccessToken } from './auth'

export {getPrivateCostumes}

function getPrivateCostumes () {
    const url = `${process.env.API_URL}/api/private/costumes`
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`
        }
    }).then(response => response.data)
}
