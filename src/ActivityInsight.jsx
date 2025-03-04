import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Activityinsight.module.css";
import { motion } from "framer-motion";

function MainPage() {
    const [isOpne , setIsOpen] = useState(false);
    const navigate = useNavigate();

    const profilePage = () =>{
        setIsOpen(prev => !prev);
    }

    const handleLogout = () =>{
        navigate("/LoginPage");
    }
  return (
    <motion.div className={styles.container}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 0.5 }}>
        <div className={styles.topRow}>
            <div className={styles.Label}>
                <div className={styles.logo}>
                <img
                    src="./image/BrandEvolution-WhiteonNottinghamBlue-Cropped-450x173.jpeg"
                    alt="school logo"
                />
                </div>
                <div className={styles.SoftwareName}>
                <h1>PO ATTAINMENT</h1>
                </div>
            </div>
            <div className={styles.profileDropdown}>
                <button onClick={profilePage} className={styles.profileButton}>
                Profile
                </button>
                {isOpne && (
                    <div className={styles.dropdownMenu}>
                        <div className={styles.userInfo}>
                            <div className={styles.userRow}>Name: John Doe</div>
                            <div className={styles.userRow}>
                            Email: john.doe@example.com
                            </div>
                            <div className={styles.userRow}>Role: Admin</div>
                        </div>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
        <ul className={styles["nav-home"]}>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/MainPage">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/ReportPage">Report</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Activity Insight</a>
            </li>
        </ul>
        <div className={styles["navGroup"]}>
            <div className={styles["navi-group-2"]}>
                <nav className={styles["navbar-pictures"]}>
                    <div className={styles["navbar-pictures-container"]}>
                        <a className="navbar-brand text-center" href="#">
                            <img src="./image/scale.png" alt="picture 1"  className="d-block mx-auto"></img>
                        <span> Weight</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="./image/history.png" alt="picture 2"  className="d-block mx-auto"></img>
                            <span> History</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="./image/bar-chart.png" alt="picture 3"  className="d-block mx-auto"></img>
                            <span> Analysis </span>
                        </a>    
                    </div>
                </nav>
            </div>
        </div>
    </motion.div>
  );
}

export default MainPage;
