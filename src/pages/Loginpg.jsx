import React, { useState } from "react";
import "./Login.css"; // Import the external CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ✅ Moved inside component
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mobile number: ${countryCode} ${mobile}`);
  };

  const goHome = () => {
    navigate("/"); // ✅ Correct event handler
  };

  return (
    <>
      <button onClick={goHome} className="rethome">
        X
      </button>

      <div className="login-container">
        <div className="login-content">
          <h1 className="main-title ttl">Log in or Sign up</h1>
          <p className="subtitle">Enter your mobile number to get started.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <select
                className="country-code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                aria-label="Country Code"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>

              <input
                type="tel"
                id="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            <button className="btn primary-btn" type="submit" disabled={!mobile}>
              Continue
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="btn social-btn google-btn">
            <img
              src="src/assets/icons/google-icon.svg"
              alt="Google Icon"
              className="icon"
            />
            Continue with Google
          </button>
        </div>

        <footer className="login-footer">
          <p>
            By continuing, you agree to our{" "}
            <a href="#">Terms & Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Login;
