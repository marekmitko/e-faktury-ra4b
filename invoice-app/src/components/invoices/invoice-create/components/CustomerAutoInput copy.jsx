import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import {
    AutocompleteInput,
    EditButton,
    NumberField,
    // ControlUnstyled,
    useTranslate,
} from "react-admin";
import AvatarField from "../../../../clients/visitors/Mobile/AvatarField";
import {
    Box,
    CardHeader,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ItemsRendererOption from "./subcomponents/ItemsRendererOption";
import { red } from "@mui/material/colors";
import { MyOutlinedBox } from "./subcomponents/MyLabelCustom";

const initStyle = {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
            "& fieldset legend.css-14lo706": {
                width: "calc(auto - 30px)",
                marginLeft: "-40px!important",
                backgroundColor: "red",
            },
        },
    },
};

const choices = [
    { id: 123, first_name: "Leo", last_name: "Tolstoi", avatar: "/penguin" },
    { id: 456, first_name: "Jane", last_name: "Austen", avatar: "/panda" },
];

const optionText = <ItemsRendererOption />;
const inputText = (choice) => `${choice.company} ${choice.org_nr}`;
const matchSuggestion = (filter, choice) => {
    return (
        choice.company.toLowerCase().includes(filter.toLowerCase()) ||
        choice.org_nr.toLowerCase().includes(filter.toLowerCase())
    );
};
export const CustomerAutoInput = (props) => {
    const Props = { ...props };
    console.log("CustomerAutoInputProps:", Props);
    return (
        <>
            <MyOutlinedBox label="sss">
                <AutocompleteInput fullWidth variant="outlined" />
            </MyOutlinedBox>
            <MyOutlinedBox>
                <TextField variant="outlined" label="dsa" source="dass" />
            </MyOutlinedBox>
            <AutocompleteInput
                sx={{
                    "& .MuiFormLabel-root": {
                        width: "auto",
                        pr: 0,
                        // ml: -10,
                    },
                }}
                className="autocomplete-input-customers"
                source="buyer_id"
                variant="outlined"
                // choices={choices}
                // sx={initStyle}
                // label={
                //     <span>
                //         {/* // <Box sx={{ display: "inline-block", zIndex: 10 }}> */}
                //         <PersonSearchIcon sx={{ mb: "-5px" }} />
                //         &nbsp;
                //         <Typography
                //             sx={{
                //                 display: "inline-block",
                //                 // mt: -4,=
                //                 px: 0,
                //                 py: 0,
                //                 backgroundColor: "transparent",
                //             }}
                //         >
                //             Szukaj Klienta
                //         </Typography>
                //     </span>
                // }
                optionText={optionText}
                inputText={inputText}
                matchSuggestion={matchSuggestion}
                // defaultValue="szuk"
                // AutocompleteInputProps={{
                //     startAdornment: (
                //         <InputAdornment position="start">
                //             <AccountCircle />
                //         </InputAdornment>
                //     ),
                // }}
            />
        </>
    );
};
