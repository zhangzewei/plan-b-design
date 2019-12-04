import React from "react";
import Card from "../src/components/card";
import CardHeader from "../src/components/card/cardHeader/CardHeader";

export default {
    title: "Card",
};

export const hasBorder = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="Card Content"
            action={<a href="#">More</a>}
        ></CardHeader>
    </Card>
);

export const noBorder = () => (
    <div style={{
        background: "rgb(236, 236, 236)",
        padding: "30px",
        display: "inline-block"
    }}>
        <p>在灰色背景上使用无边框的卡片。</p>
        <Card style={{width: "300px"}} bordered={false}>
            <CardHeader
                title="Card Content"
                action={<a href="#">More</a>}
            ></CardHeader>
        </Card>
    </div>
);


