import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

//URL that doesn't require a TOKEN
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

//URL that requires a TOKEN
//for that let's create a token first:
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken


export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}` }
})