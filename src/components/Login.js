import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLoginSuccess = (response) => {
    console.log("Login successful:", response);
    onLoginSuccess(); // Update the authentication state in the parent component
    navigate("/"); // Redirect to StreamList after login
  };

  const handleLoginFailure = (error) => {
    console.error("Login failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="780424488788-lgf3isanin7lqhn1augl4eb4f7n8vrdq.apps.googleusercontent.com">
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Login</h1>
        <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;