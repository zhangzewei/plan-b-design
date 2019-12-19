import React from "react";
import Card, {CardHeader, CardContent, CardActions} from "../src/components/card";
import ButtonBase from "../src/components/button";
import Typography from "../src/components/typography/Typography";

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
        <CardActions>
            <ButtonBase variant="outlined">card Action</ButtonBase>
            <ButtonBase variant="contained">card Action</ButtonBase>
        </CardActions>
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
                <ButtonBase variant="outlined">card Action</ButtonBase>
                <ButtonBase variant="contained">card Action</ButtonBase>
            </CardActions>
        </Card>
    </div>
);

export const cardHeader = () => (
    <>
        <Typography variant='title'>has Avatar</Typography>
        <Card style={{width: "300px"}}>
            <CardHeader
                avatar={<div style={{width: "40px", height: "40px", borderRadius: "100%", background: "pink"}} />}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                action={<a href="#">More</a>}
            />
            <CardContent>This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                Add 1 cup of frozen peas along with the mussels, if you like.</CardContent>
        </Card>
        <Typography variant='title'>no Avatar</Typography>
        <Card style={{width: "300px"}}>
            <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="Shrimp and Chorizo Paella"
                action={<a href="#">More</a>}
            />
            <CardContent>This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                Add 1 cup of frozen peas along with the mussels, if you like.</CardContent>
        </Card>
        <Typography variant='title'>title</Typography>
        <Card style={{width: "300px"}}>
            <CardHeader
                title="CardHeader"
                action={<a href="#">More</a>}
            />
            <CardContent>This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                Add 1 cup of frozen peas along with the mussels, if you like.</CardContent>
        </Card>
    </>
);




