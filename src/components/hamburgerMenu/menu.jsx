import React, { useState } from "react";
import styles from './menu.module.css'

export default function MenuButton({IsNavOpen , setIsNavOpen}) {

    return (
        <button
            className={`${styles.menuBtn} ${IsNavOpen ? styles.open : ""}`}
            onClick={() => setIsNavOpen(!IsNavOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}