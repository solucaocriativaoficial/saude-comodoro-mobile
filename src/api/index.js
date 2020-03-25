import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://saude-comodoro-backend.herokuapp.com/'
})

export default api