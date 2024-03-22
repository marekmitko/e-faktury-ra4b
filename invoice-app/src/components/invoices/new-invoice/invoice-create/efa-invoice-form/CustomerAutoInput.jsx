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
    useRecordContext,
    useTranslate,
} from "react-admin";
import AvatarField from "../../../../../clients/visitors/Mobile/AvatarField";
import {
    CardHeader,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const choices = [
    { id: 123, first_name: "Leo", last_name: "Tolstoi", avatar: "/penguin" },
    { id: 456, first_name: "Jane", last_name: "Austen", avatar: "/panda" },
];
const OptionRenderer = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    return (
        <>
            <Card sx={{ background: "transparent", width: "100%", padding: 0 }}>
                <CardHeader
                    className="card-header"
                    sx={{
                        color: "neutral.900",
                        fontWeight: "800",
                        pt: 1,
                        pb: 0,
                    }}
                    // title={`${record.company} ${record.last_name}`}
                    title={`${record.company}`}
                    subheader={
                        <>
                            <span>
                                {translate(
                                    "resources.buyersEfaktury.list.mobile.no_org"
                                )}
                                &nbsp;{`${record.org_nr}`}
                            </span>
                        </>
                    }
                    avatar={
                        <AvatarField
                            // size="45"
                            sx={{ backgroundColor: "primary.100" }}
                        />
                    }
                    // action={<EditButton sx={{ color: "primary.900" }} />}
                />
                <CardContent sx={{ pt: 0, my: 0, pb: 0 }}>
                    <Typography variant="body2" sx={{ p: 0, mb: -1.5 }}>
                        <EmojiTransportationIcon
                            sx={{
                                color: "primary.900",
                                width: "1.25rem",
                                height: "1.25rem",
                                pb: 0,
                                mb: "-2px",
                                // mb: -1,
                            }}
                        />
                        &nbsp;
                        <NumberField source="address" />
                        ,&nbsp;
                        <NumberField source="place" />
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

const optionText = <OptionRenderer />;
const inputText = (choice) => `${choice.company} ${choice.org_nr}`;
const matchSuggestion = (filter, choice) => {
    return (
        choice.company.toLowerCase().includes(filter.toLowerCase()) ||
        choice.org_nr.toLowerCase().includes(filter.toLowerCase())
    );
};
export const CustomerAutoInput = () => {
    return (
        <AutocompleteInput
            source="buyer_id"
            variant="outlined"
            // choices={choices}
            label={
                <span>
                    <PersonSearchIcon sx={{ mb: "-5px" }} />
                    &nbsp;
                    <Typography
                        sx={{ display: "inline-block", mt: -4, px: 0, py: 0 }}
                    >
                        Szukaj Klienta
                    </Typography>
                </span>
            }
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
    );
};
