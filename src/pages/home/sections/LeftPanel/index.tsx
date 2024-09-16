import React from 'react';
import {AccordionComponent} from "../../../../components/accordion";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import useHomePageActions from "../../../../hooks/useHomePageActions";
import {toast} from "react-toastify";

export const LeftPanelSection = () => {
    const homeActions = useHomePageActions();
    const {homeState, authState} = useSelector((state: RootState) => ({homeState: state.homePage, authState: state.auth}));

    const componentFunctions = {
        updateUserSelection: (key: string, value: string) => homeActions.updateUserFilterSelection({key, value}),
    }

    console.log("state ", {homeState, authState})

    const saveUserPreference = (isReset : boolean = false) => {
        homeActions.updateUserPreferences({
            key: "userSelections",
            value: isReset ? {} : (homeState.userFilterSelections || {})
        });
    }

    return (
        <div className="d-grid gap-2">
            <div className="col-12 d-flex justify-content-between my-3 px-3">
                {(Object.keys(homeState.userFilterSelections).length > 0 ||
                        Object.keys(authState?.user?.preferences?.userSelections || {}).length > 0) &&
                    <span className="preferences-cta" role="button"
                          onClick={() => saveUserPreference()}>SAVE TO PREFERENCES</span>}
                <span className="preferences-cta-reset" role="button" onClick={() => saveUserPreference(true)}>RESET PREFERENCES</span>
            </div>

            <AccordionComponent heading={"Category"} items={homeState.articles}
                selectionList={homeState.userFilterSelections['articles'] || []}
                onClick={value => componentFunctions.updateUserSelection("articles", value)}/>

            <AccordionComponent heading={"Sources"} items={homeState.sources}
                selectionList={homeState.userFilterSelections['sources'] || []}
                onClick={value => componentFunctions.updateUserSelection("sources", value)}/>

            <AccordionComponent heading={"Authors"} items={homeState.authors}
                selectionList={homeState.userFilterSelections['authors'] || []}
                onClick={value => componentFunctions.updateUserSelection("authors", value)}/>
        </div>
    )
}