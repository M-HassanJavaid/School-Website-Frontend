import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Button.module.css"

const Button = ({ title, internalLink, externalLink, extraStyles, formId }) => {

    if (formId) {
        return (
            <button className={extraStyles ? `${styles.btn} ${extraStyles}` : styles.btn} form={formId}>{title}</button>
        )
    }

    if (externalLink) {
        return (
            <a href={externalLink} target='_blank'>
                <button className={extraStyles ? `${styles.btn} ${extraStyles}` : styles.btn} form={formId ? formId : undefined}>{title}</button>
            </a>
        )
    }

    return (
        <Link to={internalLink}>
            <button className={extraStyles ? `${styles.btn} ${extraStyles}` : styles.btn} form={formId ? formId : undefined}>{title}</button>
        </Link>
    )
}

export default Button
