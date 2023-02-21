import axios from "axios";

const base_URL="http://localhost:5000/api";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmMwNTVkNTIxNTlmNzgwMmRiZDZmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDEyNTg1MCwiZXhwIjoxNjc2NzE3ODUwfQ.mDEbFnaXyGUiyE99SFFAXuhx8u3e7_hhGiDRVyf41iY"
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accesstoken;
export const publicRequest= axios.create({
    baseURL:base_URL
});

export const userRequest=axios.create({
    baseURL:base_URL,
    headers:{token:`Bearer ${TOKEN}`}
});