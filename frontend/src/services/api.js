import axios from "axios";
const API= axios.create({
baseURL: "http://localhost:5000/api"
});
export const login =(data) => API.post("/login", data);
export const getProfile = (token) =>
API.get("/profile", {
headers: {
Authorization: `Bearer ${token}`
}
});
export const logout =(token) =>
API.post("/logout",
{},
{
headers: {
Authorization: `Bearer ${token}`
}
}
);