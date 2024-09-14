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

export const HomePage: React.FC = () => {
    const authState = useSelector((state: RootState) => state.auth);
    const homeActions = useHomePageActions();

    useEffect(() => {
        homeActions.fetchAllArticles();
    }, []);

    const componentFunctions = {
    }

    return (
        <div className="home-page-container container-fluid">
            <div className="col-2 left-panel-section">
                <LeftPanelSection />
            </div>
        </div>
    );
};
