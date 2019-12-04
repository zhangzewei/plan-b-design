import React from "react";
import Card from "../src/components/card";
import CardContent from "../src/components/cardContent";
import CardHeader from "../src/components/cardHeader/CardHeader";

export default {
    title: "Card",
};

export const hasBorder = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="Card Header"
            action={<a href="#">More</a>}
        />
        <CardContent>card content</CardContent>
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
                title="Card Header"
                action={<a href="#">More</a>}
            />
            <CardContent>card content</CardContent>
        </Card>
    </div>
);

export const dankeEp = () => (
    <div style={{
        background: "rgb(236, 236, 236)",
        padding: "30px",
        display: "inline-block"
    }}>
        <p>在灰色背景上使用无边框的卡片。</p>
        <Card style={{width: "308px"}}>
            <CardHeader
                avatar={<div style={{width: "40px", height: "40px", borderRadius: "100%", background: "pink"}}/>}
                title="蛋壳萌萌哒"
                subheader="我是一个空的点点滴滴酒店在马…"
            />
            <CardContent>我是一个空的点点滴滴酒店在马…</CardContent>
        </Card>
    </div>
);




