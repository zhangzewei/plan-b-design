import React from "react";
import Card from "../src/components/card";

export default {
    title: "Card",
};

export const size = () => (
    <>
        <Card style={{width: "300px"}} title='Card Title' extra='More'>
            Card Content
        </Card>
        <br />
        <Card style={{width: "300px"}} title='Card Title' extra='More' size='small'>
            Card Content
        </Card>
    </>
);

export const noTitle = () => (
    <>
        <Card style={{width: "300px"}} extra='More'>
            Card Content
        </Card>
    </>
);

export const noContent = () => (
    <>
        <Card style={{width: "300px"}} title='Card Title' extra='More'>
        </Card>
    </>
);

export const bordered = () => (
    <div style={{
        background: "rgb(236, 236, 236)",
        padding: "30px",
        display: "inline-block"
    }}>
        <p>在灰色背景上使用无边框的卡片。</p>
        <Card style={{width: "300px"}} title='Card Title' extra='More' bordered={false}>
            Card Content
        </Card>
    </div>

);
