import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handleSubmit = async(e)=>{
e.preventDefault();
if(!username || password.length < 6){
setError("Invalid input");
return;
}
try{
setLoading(true);
const res = await
login({username, password});
localStorage.setItem("token", res.data.token);
navigate("/dashboard");
}catch(err){
setError("Invalid credentials");
}finally{
setLoading(false);
}
}
return(
    <div>
<h2>Login</h2>
{error && <p>{error}</p>}
<form onSubmit={handleSubmit}>
<input
placeholder="username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
<input
type="password"
placeholder="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<button type="submit">
{loading? "Loading...": "Login"}
</button>
</form>
</div>
);
}
export default Login;