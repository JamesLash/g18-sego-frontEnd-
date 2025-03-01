import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TheLoginPage.module.css";
import { motion } from "framer-motion";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // FOR TESTING PURPOSES: Auto-login without checking credentials
    // TODO: Replace this with real authentication logic once backend is ready
    console.log("User ID:", userId);
    console.log("Password:", password);
    navigate("/MainPage"); // Redirect to Main Page after login
  };

  return (
    
    <motion.div className={styles.container}
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 0.5 }}>
      <div className={styles.logo}>
        <img
          src="BrandEvolution-WhiteonNottinghamBlue-Cropped-450x173.png"
          alt="school logo"
          width={450}
          height={173}
        />
      </div>
      <div className={styles.text_container}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={styles.form_group}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className={styles.form_group}>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            LOG IN
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default LoginPage;
