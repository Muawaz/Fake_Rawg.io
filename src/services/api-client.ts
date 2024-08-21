import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '601b721536214a1c8267de1c2403db7c'
    }
})