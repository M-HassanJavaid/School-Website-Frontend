import React from 'react'
import styles from "./InfiniteScrollingText.module.css"

const InfiniteScrollingText = () => {
  return (
    <div className={styles.container}>
        <p className={styles.movingText}>Learning Today · Leading Tomorrow · Building the Future</p>
    </div>
  )
}

export default InfiniteScrollingText