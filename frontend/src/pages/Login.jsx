import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || password.length < 6) {
      setError("Username & password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const res = await login({ username, password });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");

    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to continue</p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-btn" type="submit">
            {loading ? "Please wait..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;