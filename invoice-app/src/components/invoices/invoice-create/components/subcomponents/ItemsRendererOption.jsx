import * as React from "react";
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
import {
    CardHeader,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AvatarField from "../../../../../clients/visitors/Mobile/AvatarField";

const ItemsRendererOption = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    return (
        <Card
            sx={{
                width: "100%",
                padding: 0,
                boxShadow:
                    "0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)",
            }}
        >
            <CardHeader
                className="card-header"
                sx={{
                    color: "neutral.900",
                    fontWeight: "800",
                    pt: 1,
                    pb: 0,
                }}
                // title={`${record.company} ${record.last_name}`}
                title={
                    <Typography
                        sx={{
                            color: "neutral.900",
                            fontWeight: "400",
                            // display: "inline-flex",
                        }}
                    >
                        {`${record.company}`}
                    </Typography>
                }
                subheader={
                    <>
                        <span>
                            {translate(
                                "resources.buyersEfaktury.list.mobile.no_org"
                            )}
                            &nbsp;
                            <Typography
                                sx={{
                                    color: "primary.900",
                                    display: "inline-flex",
                                }}
                            >
                                {`${record.org_nr}`}
                            </Typography>
                        </span>
                    </>
                }
                avatar={
                    <AvatarField
                        // size="45"
                        sx={{ backgroundColor: "primary.100", padding: "10px" }}
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
    );
};

export default ItemsRendererOption;
