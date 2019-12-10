import React from "react";
import Typography from "../src/components/typography/Typography";

export default {
    title: "Typography",
};

export const variant = () => (
    <>
        <Typography variant="head">
            Typography
        </Typography>
        <Typography variant="title">
            Typography
        </Typography>
        <Typography variant="subtitle">
            Typography
        </Typography>
        <Typography variant="body">
            Typography
        </Typography>
        <br />
        <Typography variant="caption">
            Typography
        </Typography>
    </>
);

export const color = () => (
    <>
        <Typography variant="subtitle" color="primary">
            Typography
        </Typography>
        <Typography variant="subtitle" color="secondary">
            Typography
        </Typography>
        <Typography variant="subtitle" color="third">
            Typography
        </Typography>
        <Typography variant="subtitle" color="disabled">
            Typography
        </Typography>
    </>
);

export const decorations = () => (
    <>
        <Typography variant="subtitle" underline>
            underline
        </Typography>
        <Typography variant="subtitle" strong>
            strong
        </Typography>
        <Typography variant="subtitle" delete>
            delete
        </Typography>
        <Typography variant="subtitle" code>
            code
        </Typography>
    </>
);

export const paragraph = () => (
    <>
        <Typography variant="head" paragraph>
            Typography
        </Typography>
        <Typography variant="body" paragraph>
            Typography
        </Typography>
    </>
);

export const component = () => (
    <Typography variant="head" component="div">
        Typography
    </Typography>
);
