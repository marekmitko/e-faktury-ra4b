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
import EhfCheckbox from "./component/EhfCheckbox";
import { Card, Stack, Grid } from '@mui/material';
import { useTranslate } from "react-admin";
import InvoiceAdditionalCheckbox from "./component/InvoiceAdditionalCheckbox";

export default function JoyOptionbox() {

    const [members, setMembers] = React.useState([false, true, false]);
    // const toggleMember = (index) => (event) => {
    //         const newMembers = [...members];
    //     newMembers[index] = event.target.checked;
    //     setMembers(newMembers);
    // };

    // // console.log("members", ....members);
    // console.log("members", members[1]);
    const translate = useTranslate();

    return (
        <Grid item xs={12} sm={9}>
            <Sheet
                variant="neutral"
                sx={{
                    pl:1,
                    bgcolor: "background.body",
                    borderRadius: "sm",
                    // width: 360,
                    maxWidth: "100%",
                    display: "flex"
                }}
            >
                <InvoiceAdditionalCheckbox />
                <EhfCheckbox />
            </Sheet>
        </Grid>
    );
}
