import React, {useEffect, useState} from 'react';
import './styles.scss';
import {ProgressComponent} from "../../components/progress";
import {InputBoxComponent} from "../../components/user-controlls/input-box";
import {ButtonComponent} from "../../components/user-controlls/button";
import pagePaths from "../../routes/page-paths";
import {Link} from "react-router-dom";
import {LogoHeadingCardComponent} from "../../components/logo-heading-card";
import type {LoginPayload} from '../../redux/auth/dataTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useAuthActions from '../../hooks/useAuthActions';
import {postApi_logUserOut} from '../../apis';
import {LeftPanelSection} from "./sections/LeftPanel";
import useHomePageActions from "../../hooks/useHomePageActions";
import {ArticleCardComponent} from "../../components/article-card";
import {EachArticleInformationType} from "../../redux/home-page/dataTypes";

export const HomePage: React.FC = () => {
    const homeState = useSelector((state: RootState) => state.homePage);
    console.log("here ", homeState);
    const homeActions = useHomePageActions();

    useEffect(() => {
        homeActions.fetchAllArticles();
    }, []);

    const componentFunctions = {
    }

    return (
        <div className="home-page-container container-fluid d-flex flex-wrap p-0">
            <div className="col-12 col-lg-3 left-panel-section">
                <LeftPanelSection />
            </div>
            <div className="col-12 col-lg-9">
                <div className="d-flex flex-wrap justify-content-around gap-5 m-5">
                    {
                        Object.keys(homeState.articles).map((eachTopicName, topicIndex) => (
                            Object.keys(homeState.articles[eachTopicName]).map((eachAuthor, authorIndex) => (
                                (homeState.articles[eachTopicName][eachAuthor] as EachArticleInformationType[]).map((article, articleIndex) => {
                                    const shouldRender =
                                        !Object.keys(homeState.userFilterSelections || {}).length ||
                                        (homeState.userFilterSelections["articles"] || []).includes(article.topic) ||
                                        (homeState.userFilterSelections["authors"] || []).includes(article.author) ||
                                        (homeState.userFilterSelections["sources"] || []).includes(article.source);

                                    const uniqueKey = `${article.url}--${topicIndex}--${authorIndex}--${articleIndex}`;

                                    return (
                                        <div key={uniqueKey} className={shouldRender ? 'd-block' : 'd-none'}>
                                            <ArticleCardComponent
                                                {...article}
                                            />
                                        </div>
                                    )
                                })
                            ))
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
