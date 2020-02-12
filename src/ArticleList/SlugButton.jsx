import React from 'react'
import styles from './SlugButton.module.css'

const SlugButton = ({art}) => {
    return(
        <button className ={styles.button} onClick = {() =>{alert(`${art.slug}`)}}>{art.author}</button>
    )
}

export default SlugButton