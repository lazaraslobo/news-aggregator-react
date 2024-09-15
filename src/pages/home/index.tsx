import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ProgressComponent } from "../../components/progress";
import { InputBoxComponent } from "../../components/user-controlls/input-box";
import { ButtonComponent } from "../../components/user-controlls/button";
import { Link } from "react-router-dom";
import { LogoHeadingCardComponent } from "../../components/logo-heading-card";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import useHomePageActions from "../../hooks/useHomePageActions";
import { ArticleCardComponent } from "../../components/article-card";
import { EachArticleInformationType } from "../../redux/home-page/dataTypes";
import { LeftPanelSection } from "./sections/LeftPanel";

export const HomePage: React.FC = () => {
    const {homeState, authState} = useSelector((state: RootState) => ({homeState: state.homePage, authState: state.auth}));
    const [userSearchTerm, setSearchTerm] = useState<string>("");
    const [visibleArticlesCount, setVisibleArticlesCount] = useState<number>(30);
    const homeActions = useHomePageActions();

    useEffect(() => {
        homeActions.fetchAllArticles();
    }, []);

    // Flatten the articles into a single array
    const allArticles = Object.keys(homeState.articles).flatMap(topicName =>
        Object.keys(homeState.articles[topicName]).flatMap(authorName =>
            (homeState.articles[topicName][authorName] as EachArticleInformationType[])
        )
    );

    // Filter articles based on search term and user filters
    const filteredArticles = allArticles.filter(article => {
        const { userFilterSelections = {} } = homeState;

        const hasUserSearchTermMatch =
            article.source.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.title.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.description.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.url.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.imageSrc.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.publishedAt.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.topic.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
            article.author.toLowerCase().includes(userSearchTerm.toLowerCase());

        const isSelectedByFilters =
            (userFilterSelections["articles"] || []).includes(article.topic) ||
            (userFilterSelections["authors"] || []).includes(article.author) ||
            (userFilterSelections["sources"] || []).includes(article.source);

        const isFilterSelectionsEmpty = Object.keys(userFilterSelections).length === 0;
        const shouldRender =
            (userSearchTerm.length > 0 && hasUserSearchTermMatch) ||
            (isSelectedByFilters && !isFilterSelectionsEmpty) ||
            (isFilterSelectionsEmpty && !userSearchTerm);

        return shouldRender;
    });

    const handleViewMore = () => {
        setVisibleArticlesCount(prevCount => prevCount + 30);
    };

    return (
        <div className="home-page-container container-fluid d-flex flex-wrap p-0">
            <div className="col-12 col-lg-3 left-panel-section">
                <LeftPanelSection />
            </div>
            <div className="col-12 col-lg-9">
                <div className="d-flex flex-wrap justify-content-around gap-5">
                    <div className="d-flex col-12 search-bar p-3">
                        <InputBoxComponent
                            isRequired={false}
                            placeholder="Search..." type="text" className="search-bar"
                            value={userSearchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="d-flex flex-wrap justify-content-around gap-5">
                        {filteredArticles.slice(0, visibleArticlesCount).map((article, index) => (
                            <ArticleCardComponent
                                key={`${article.url}--${index}`}
                                {...article}
                            />
                        ))}
                    </div>
                    {filteredArticles.length > visibleArticlesCount && (
                        <div className="col-12 d-flex justify-content-center mt-3">
                            <button onClick={handleViewMore} className="view-more-cta">
                                VIEW MORE
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
