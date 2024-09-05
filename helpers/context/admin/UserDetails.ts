import {createContext} from "react";

const UserContext = createContext({
    _id: "",
    username: "",
    balance: 0,
    parent: ""
})


export default UserContext