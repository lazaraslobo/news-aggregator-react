import React, { FC } from 'react';
import {AccordionComponent} from "../../../../components/accordion";

export const LeftPanelSection = () => {
    return (
        <AccordionComponent heading={"Authors"} items={["A", "B", "C"]}/>
    )
}