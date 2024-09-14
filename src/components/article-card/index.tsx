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

    const truncateText = (text: string, maxLength = 120) => {
        return text.length > maxLength
            ? `${text.slice(0, maxLength)}...`
            : text;
    }

    return (
        <div className="article-card">
            <div className="article-card-image">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="article-card-content">
                <h2>{truncateText(title, 40)}</h2>
                <p>
                    {truncateText(description, 80)}
                </p>
                <a href={url} target="_blank" className="article-card-cta">
                    OPEN
                </a>
            </div>
        </div>
    );
};
