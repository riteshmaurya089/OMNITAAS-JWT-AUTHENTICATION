import { useEffect, useState } from "react";
import { getProfile, logout } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile(token);
        setProfile(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await logout(token);
    } catch (err) {
      // ignore error
    }
    localStorage.removeItem("token");
    navigate("/login");
  };
  if (!profile) {
    return (
      <div className="dashboard-container">
        <div className="loading-box">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h2>Dashboard</h2>

        <p className="welcome-text">{profile.message}</p>

        <div className="profile-info">
          <p><span>Username:</span> {profile.username}</p>
          <p>
            <span>Login Time:</span>{" "}
            {new Date(profile.loginTime).toLocaleString()}
          </p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Dashboard;