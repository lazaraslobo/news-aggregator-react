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
   author,
   whichApi
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
                <div className="d-flex flex-wrap gap-2 my-3 text-small">
                    <span>{source || "-"}</span> ●
                    <span>{topic || "-"}</span> ●
                    <span>{author || "-"}</span> ●
                    <span>{whichApi || "-"}</span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <a href={url} target="_blank" className="article-card-cta">
                        OPEN
                    </a>
                    <span className="text-small">{publishedAt}</span>
                </div>
            </div>
        </div>
    );
};
