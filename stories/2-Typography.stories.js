import React from "react";
import Typography from "../src/components/typography/Typography";
import CardContent from "../src/components/cardContent";
import Card from "../src/components/card";

export default {
    title: "Typography",
};

const variantArr = ['head', 'title', 'subtitle', 'body', 'caption'];
const colorArr = ['textPrimary', 'textSecondary', 'textThird', 'disabled', 'link', 'success', 'error', 'warning'];

export const variant = () => (
    <>
        <Typography variant='title'>variant</Typography>
        <Card style={{width: "300px"}}>
            <CardContent>
                {
                    variantArr.map((item) =>
                        (
                            <Typography variant={item} display="block" key={item}>
                                PLAN B
                            </Typography>
                        ))
                }
            </CardContent>
        </Card>
        <Typography variant='title'>color</Typography>
        <Card style={{width: "300px"}}>
            <CardContent>
                {
                    colorArr.map((item) =>
                        (
                            <Typography variant="subtitle" color={item} key={item}>
                                PLAN B
                            </Typography>
                        ))
                }
            </CardContent>
        </Card>
        <Typography variant='title'>decorations</Typography>
        <Card style={{width: "300px"}}>
            <CardContent>
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
            </CardContent>
        </Card>
    </>
);
