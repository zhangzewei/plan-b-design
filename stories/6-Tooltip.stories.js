import React from "react";
import "./prism.css";
import "./styles/tooltip.css";
import Tooltip from "../src/components/Tooltip";
import ButtonBase from "../src/components/button";
import Typography from "../src/components/typography/Typography";

export default {
    title: "Tooltip",
};

export const show = () => (
    <>
        <Tooltip overlay={<div>tooltip</div>} trigger={["click"]}>
            <ButtonBase>SHOW TOOLTIP</ButtonBase>
        </Tooltip>
        <Tooltip overlay={<div>tooltip</div>} trigger={["hover"]}>
            <ButtonBase>SHOW TOOLTIP</ButtonBase>
        </Tooltip>
        <Tooltip
            overlay={<div>SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                TOOLTIP </div>} trigger={["hover"]}>
            <ButtonBase>SHOW TOOLTIP</ButtonBase>
        </Tooltip>
        <Typography variant='title'>WIDTH</Typography>
        <Tooltip popupClassName='tooltip-custom-width'
                 overlay={<div>SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP
                     SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                     TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP
                     SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                     TOOLTIP SHOW TOOLTIP </div>} trigger={["click"]}>
            <ButtonBase>CUSTOM WIDTH(CLASSNAME)</ButtonBase>
        </Tooltip>
        <Tooltip popupStyle={{maxWidth: "500px"}}
                 overlay={<div>SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP
                     SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                     TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP
                     SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                     TOOLTIP SHOW TOOLTIP </div>} trigger={["click"]}>
            <ButtonBase>CUSTOM WIDTH(STYLE)</ButtonBase>
        </Tooltip>
        <br />
        <Tooltip popupStyle={{maxWidth: "none"}}
                 overlay={<div>SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP
                     SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                     TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP
                     SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW TOOLTIP SHOW
                     TOOLTIP SHOW TOOLTIP </div>} trigger={["click"]}>
            <ButtonBase>CUSTOM STYLE</ButtonBase>
        </Tooltip>
    </>
);
