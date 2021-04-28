import axios from 'axios';

export default axios.create({
    baseURL: 'https://quiz-app-8a72a-default-rtdb.europe-west1.firebasedatabase.app'
})