import axios from 'axios';

export default {
    signUp: (email, password, username) => {
        console.log(email, password, username)
        return axios.post('/api/signup', {
            email: email,
            password: password,
            username: username
        })
    },
    LogIn: (username, password) => {
        return axios.post('/api/login', {
            username: username,
            password: password
        })
    },
    getUser: () => {
        return axios.get('/api/user')
    },
    saveGame: (username, game) => {
        return axios.put('/api/user_data', {
            username: username,
            games: game
        })
    },
    isAuthenticated: () => {
        return axios.get('/api/user_data')
    },
    Logout: () => axios.get('/api/logout')}