import React from "react";
import Card from "../src/components/card";
import CardContent from "../src/components/cardContent";
import CardHeader from "../src/components/cardHeader/CardHeader";
import CardActions from "../src/components/cardActions";
import ButtonBase from "../src/components/button";

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
            <CardActions>
                <button>button</button>
                <button>button</button>
                <button>button</button>
            </CardActions>
        </Card>
    </div>
);

export const cardActions = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="Card Header"
            action={<a href="#">More</a>}
        />
        <CardContent>card content</CardContent>
        <CardActions>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='primary'>cancel</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'>confirm</ButtonBase>
        </CardActions>
    </Card>
);



