import React from "react";
import Card from "../src/components/card";
import CardHeader from "../src/components/cardHeader/CardHeader";
import CardContent from "../src/components/cardContent";

export default {
    title: "CardHeader",
};

export const hasAvatar = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            avatar={<div style={{width: "40px", height: "40px", borderRadius: "100%", background: "pink"}}/>}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016" action={<a href="#">More</a>}
        />
        <CardContent>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</CardContent>
    </Card>
);

export const noAvatar = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="Shrimp and Chorizo Paella"
            subheader="Shrimp and Chorizo Paella" action={<a href="#">More</a>}
        />
        <CardContent>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</CardContent>
    </Card>
);

export const title = () => (
    <Card style={{width: "300px"}}>
        <CardHeader
            title="CardHeader"
            action={<a href="#">More</a>}
        />
    </Card>
);




