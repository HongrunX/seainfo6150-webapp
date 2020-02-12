import React from 'react';
import SlugButton from './SlugButton.jsx'
import styles from './ArticleListItem.module.css'
const ArticleListItem = ({art}) =>{
    return(
        <div>
    <p>
    <time className={styles.time} dateTime={art.pubYear}>{art.pubDate}</time>
    <SlugButton art={art}/>
    </p>
        </div>
    );
}
export default ArticleListItem;