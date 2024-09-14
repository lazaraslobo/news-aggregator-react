import React from 'react';
import './styles.scss';
import {EachArticleInformationType} from "../../redux/home-page/dataTypes";


export const ArticleCardComponent: React.FC<EachArticleInformationType> = ({
   source,
   title,
   description,
   url,
   imageSrc,
   publishedAt,
   content,
   topic,
   author
}) => {
    return (
        <div className="article-card">
            <div className="article-card-image">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="article-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url} target="_blank" className="article-card-cta">
                    OPEN
                </a>
            </div>
        </div>
    );
};
