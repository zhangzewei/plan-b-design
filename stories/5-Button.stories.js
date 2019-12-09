import React from "react";
import ButtonBase from "../src/components/button";
import Typography from "../src/components/typography/Typography";

export default {
    title: "ButtonBase",
};

export const Buttons = () => (
    <>
        <div style={{width: '300px'}}>
            <Typography variant='title'>Contained Buttons（实心按钮）</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'>primary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='secondary'>secondary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='danger'>danger</ButtonBase>
            <br />
            <Typography variant='subtitle'>disabled</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        disabled>primary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='secondary'
                        disabled>secondary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='danger'
                        disabled>danger</ButtonBase>
            <Typography variant='title'>Outlined Buttons（描边按钮）</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='primary'>primary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='secondary'>secondary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='danger'>danger</ButtonBase>
            <Typography variant='subtitle'>disabled</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='primary'
                        disabled>primary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='secondary'
                        disabled>secondary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="outlined" color='danger' disabled>danger</ButtonBase>
            <Typography variant='title'>Text Buttons（文本按钮）</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='primary'>primary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='secondary'>secondary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='danger'>danger</ButtonBase>
            <Typography variant='subtitle'>disabled</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='primary' disabled>primary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='secondary' disabled>secondary</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} color='danger' disabled>danger</ButtonBase>
            <Typography variant='title'>Size(按钮尺寸)</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        size="small">SMALL</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'>MEDIUM</ButtonBase>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        size="large">LARGE</ButtonBase>
            <Typography variant='title'>fullWidth</Typography>
            <ButtonBase style={{margin: '8px 8px 8px 0'}} variant="contained" color='primary'
                        fullWidth>fullWidth</ButtonBase>
        </div>
    </>
);

