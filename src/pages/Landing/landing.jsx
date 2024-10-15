import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";

function Landing() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="landing">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="landing-svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#007AFF", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#00BFFF", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,96L30,85.3C60,75,120,53,180,69.3C240,85,300,139,360,149.3C420,160,480,128,540,117.3C600,107,660,117,720,128C780,139,840,149,900,154.7C960,160,1020,160,1080,144C1140,128,1200,96,1260,90.7C1320,85,1380,107,1410,117.3L1440,128V320H0Z"
        ></path>
      </svg>

      <div className="landing-content">
        <h1>Welcome to WebChat</h1>
        <p>Connect with your friends and family easily!</p>
        <div className="button-group">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
