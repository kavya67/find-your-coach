import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3004/'
})

export default axios