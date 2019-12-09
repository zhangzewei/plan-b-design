import React from "react";
import ButtonBase from "../src/components/button";
import Typography from "../src/components/typography/Typography";

export default {
    title: "ButtonBase",
};

export const Buttons = () => (
    <>
        <div style={{width: '340px'}}>
            <Typography variant='title'>Contained Buttons（实心按钮）</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'>PRIMARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='secondary'>SECONDARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='danger'>DANGER</ButtonBase>
            <br />
            <Typography variant='subtitle'>disabled</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        disabled>PRIMARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='secondary'
                        disabled>SECONDARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='danger'
                        disabled>DANGER</ButtonBase>
            <Typography variant='title'>Outlined Buttons（描边按钮）</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='primary'>PRIMARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='secondary'>SECONDARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='danger'>DANGER</ButtonBase>
            <Typography variant='subtitle'>disabled</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='primary'
                        disabled>PRIMARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='secondary'
                        disabled>SECONDARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='danger' disabled>DANGER</ButtonBase>
            <Typography variant='title'>Text Buttons（文本按钮）</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='primary'>PRIMARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='secondary'>SECONDARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='danger'>DANGER</ButtonBase>
            <Typography variant='subtitle'>disabled</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='primary' disabled>PRIMARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='secondary' disabled>SECONDARY</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='danger' disabled>DANGER</ButtonBase>
            <Typography variant='title'>Size(按钮尺寸)</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        size="small">SMALL</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'>MEDIUM</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        size="large">LARGE</ButtonBase>
            <Typography variant='title'>fullWidth</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        fullWidth>fullWidth</ButtonBase>
            <Typography variant='title'>Link</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary' href="#">LINK</ButtonBase>
        </div>
    </>
);


