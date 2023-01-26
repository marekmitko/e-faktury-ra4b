import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Person from "@mui/icons-material/Person";
import People from "@mui/icons-material/People";
import Apartment from "@mui/icons-material/Apartment";
import Checkbox, { checkboxClasses } from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import PaymentIcon from "@mui/icons-material/Payment";
import { Card, Stack, Grid } from '@mui/material';
import { useTranslate } from "react-admin";
import Switch from '@mui/joy/Switch';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';

export default function PaymantSwitch({value, label, action}) {

    // const [members, setMembers] = React.useState([false, true, false]);
    // const toggleMember = (index) => (event) => {
    //         const newMembers = [...members];
    //     newMembers[index] = event.target.checked;
    //     setMembers(newMembers);
    // };

    // // console.log("members", ....members);
    // console.log("members", members[1]);
    // const translate = useTranslate();
    const [dark, setDark] = React.useState(false);
    return (
        <>
            <Radio
                overlay
                // value={value}
                // label={label}
                sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
                // slotProps={{
                //     action: ({ checked }) => ({
                //             sx: (theme) => ({
                //                 ...(checked && {
                //                     inset: -1,
                //                     border: "2px solid",
                //                     borderColor: theme.vars.palette.primary[500]
                //                 })
                //             })
                //     })
                // }}
            />
            <Switch
                color={dark ? 'primary' : 'danger'}
                slotProps={{ input: { 'aria-label': 'dark mode' } }}
                startDecorator={
                    <LocalFireDepartmentRoundedIcon
                    sx={{ color: dark ? 'text.tertiary' : 'danger.600' }}
                    />
                }
                endDecorator={
                    <WavesRoundedIcon sx={{ color: dark ? 'primary.500' : 'text.tertiary' }} />
                }
                checked={dark}
                onChange={(event) => setDark(event.target.checked)}
            />
        </>
    );
}
