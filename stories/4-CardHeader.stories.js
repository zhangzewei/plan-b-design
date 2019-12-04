import React from "react";
import Card from "../src/components/card";
import CardHeader from "../src/components/card/cardHeader/CardHeader";

export default {
    title: "CardHeader",
};

export const hasAvatar = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            avatar={<div style={{width: "40px", height: "40px", borderRadius: "100%", background: "pink"}}></div>}
            title="CardHeader"
            subheader="subheader" action={<a href="#">More</a>}
        ></CardHeader>
    </Card>
);

export const noAvatar = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="CardHeader"
            subheader="subheader" action={<a href="#">More</a>}
        ></CardHeader>
    </Card>
);

export const title = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="CardHeader"
            action={<a href="#">More</a>}
        ></CardHeader>
    </Card>
);


