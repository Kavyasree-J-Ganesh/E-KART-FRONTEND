import React from "react";
import classes from "./Intro.module.css"
import { useNavigate } from "react-router-dom";

const Intro = (props) => {
    const navigate = useNavigate()
    return (
        <header className={classes.header}>
            {/* <div className={classes["logo-box"]}>
                <img className={classes.logo} alt="logo" />
            </div> */}
            <div className={classes["text-box"]}>
                <h1 className={classes["heading-primary"]}>
                    <span className={classes["heading-primary-main"]}>E-KART</span>
                    <span className={classes["heading-primary-sub"]}>For All Your Needs</span>
                </h1>
                <a onClick={()=> navigate("home-new")} id="btn-white" className={`${classes.btn} ${classes["btn-white"]}`}>Let's Start</a>
            </div>
        </header>
    )
}

export default Intro