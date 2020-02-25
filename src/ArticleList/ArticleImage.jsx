import React from "react";
import styles from './ArticleImage.module.css'

const ArticleImage =({article}) => {
    return(
        <div>
            <article><img className={styles.img} src={article.image._url} alt={article.title}/></article>
        </div>
    )
}
export default ArticleImage;