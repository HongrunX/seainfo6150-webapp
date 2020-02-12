import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem.jsx';
import styles from './ArticleList.module.css'
const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li className={styles.li} key={article.slug}>
          <h1 className={styles.h3}>{article.title}</h1>
          <p className={styles.p}>{article.shortText}</p>
          <ArticleListItem art={article}/>
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
