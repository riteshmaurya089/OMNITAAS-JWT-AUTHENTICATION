import { useEffect, useState } from "react";
import { getProfile, logout } from"../services/api";
import { useNavigate } from "react-router-dom";
function Dashboard() {
const [profile, setProfile] = useState(null);
const navigate= useNavigate();
const token = localStorage.getItem("token");
useEffect(() => {
const fetchProfile= async()=>{
try{
const res = await getProfile(token);

setProfile(res.data);

}catch(err){

localStorage.removeItem("token");

navigate("/login");

}

}

fetchProfile();

}, []);

const handleLogout= async()=>{

await logout(token);

localStorage.removeItem("token");

navigate("/login");

}

if(!profile) return <p>Loading...</p>

return(

<div>

<h2>Dashboard</h2>

<p>{profile.message}</p>

<p>Username: {profile.username}</p>

<p>Login Time: {profile.loginTime}</p>

<button onClick={handleLogout}>Logout</button>

</div>

);

}

export default Dashboard;