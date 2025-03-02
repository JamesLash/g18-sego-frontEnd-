import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";

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
    <div className={styles.container}>
        <div className={styles.topRow}>
            <div className={styles.Label}>
                <div className={styles.logo}>
                <img
                    src="BrandEvolution-WhiteonNottinghamBlue-Cropped-450x173.jpeg"
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
                <a className="nav-link" href="/ActivityInsight">Activity Insight</a>
            </li>
        </ul>
        <div className={styles["navGroup"]}>
            <div className={styles["navi-group-1"]}>
                <nav className={styles["navbar-pictures"]}>
                    <div className={styles["navbar-pictures-container"]}>
                        <a className="navbar-brand text-center" href="#">
                            <img src="—Pngtree—vector plus icon_4232484.png" alt="picture 1"  className="d-block mx-auto"></img>
                        <span>Item 1</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="—Pngtree—writing black icon png_7966240.png" alt="picture 2"  className="d-block mx-auto"></img>
                            <span>Item 2</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="tick.png" alt="picture 3"  className="d-block mx-auto"></img>
                            <span>Item 3</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="vecteezy_pdf-file-format-icon_46449092.png" alt="picture 4"  className="d-block mx-auto"></img>
                            <span>Item 4</span>
                        </a>
                    </div>
                </nav>
            </div>
            <div className={styles["navi-group-2"]}>
                <nav className={styles["navbar-pictures"]}>
                    <div className={styles["navbar-pictures-container"]}>
                        <a className="navbar-brand text-center" href="#">
                            <img src="scale.png" alt="picture 1"  className="d-block mx-auto"></img>
                        <span>Item 1</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="history.png" alt="picture 2"  className="d-block mx-auto"></img>
                            <span>Item 2</span>
                        </a>
                        <a className="navbar-brand text-center" href="#">
                            <img src="bar-chart.png" alt="picture 3"  className="d-block mx-auto"></img>
                            <span>Item 3</span>
                        </a>    
                    </div>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default MainPage;
