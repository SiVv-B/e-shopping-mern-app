import axios from "axios"

const BASE_URL = "http://localhost:5000/api"

//URL that doesn't require a TOKEN
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

//URL that requires a TOKEN
//for that let's create a token first:
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjRiZjFiODZhOGY4OTBmNzVmYTg0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjY1NDUwMywiZXhwIjoxNjQ2OTEzNzAzfQ.i8dWayeYym4DR8mnsLpoj9ceeMOMJn_OK3GZtcdIHFc"

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}` }
})