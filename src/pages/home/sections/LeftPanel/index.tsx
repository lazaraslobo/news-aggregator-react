import React, {FC, useEffect} from 'react';
import {AccordionComponent} from "../../../../components/accordion";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import useHomePageActions from "../../../../hooks/useHomePageActions";
import {postApi_updateInsertUserPreferences} from "../../../../apis";

export const LeftPanelSection = () => {
    const homeActions = useHomePageActions();
    const homeState = useSelector((state: RootState) => state.homePage);

    const componentFunctions = {
        updateUserSelection: (key: string, value: string) => homeActions.updateUserFilterSelection({key, value})
    }
    console.log("state ", homeState)

    const saveUserPreference = () => {
        // postApi_updateInsertUserPreferences("userSelections", {"lobo": "it worked"});
        homeActions.updateUserPreferences({
            key: "userSelections",
            value: homeState.userFilterSelections
        });
    }

    return (
        <div className="d-grid gap-2">
            <div className="col-12 d-flex my-3">
                {Object.keys(homeState.userFilterSelections).length > 0 && <span className="preferences-cta" role="button" onClick={saveUserPreference}>SAVE TO PREFERENCES</span>}
            </div>
            <AccordionComponent heading={"Category"} items={homeState.articles}
                selectionList={homeState.userFilterSelections['articles'] || []} onClick={value => componentFunctions.updateUserSelection("articles", value)}/>
            <AccordionComponent heading={"Sources"} items={homeState.sources}
                selectionList={homeState.userFilterSelections['sources'] || []} onClick={value => componentFunctions.updateUserSelection("sources", value)}/>
            <AccordionComponent heading={"Authors"} items={homeState.authors}
                selectionList={homeState.userFilterSelections['authors'] || []}  onClick={value => componentFunctions.updateUserSelection("authors", value)}/>
        </div>
    )
}