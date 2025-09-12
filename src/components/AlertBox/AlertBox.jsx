import React from 'react'
import Button from '../Button/Button.jsx'
import styles from './AlertBox.module.css'

const AlertBox = ({AlertMessage , setAlertMessage}) => {
  return (
    <div className={styles.alertBox}>
      <p className={styles.message}>{AlertMessage}</p>
      <Button title='OK' clickEventFunc={()=>{setAlertMessage('')}} extraStyles={styles.btn}/>
    </div>
  )
}

export default AlertBox
