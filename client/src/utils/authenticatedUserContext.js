import { createContext } from 'react';

const authenticatedUserContext = createContext({
    _id: "",
    username: "",
    email: "",
    games: []
})

export default authenticatedUserContext