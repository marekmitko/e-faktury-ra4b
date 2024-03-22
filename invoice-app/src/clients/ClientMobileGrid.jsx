import "../../src/style/styleClientList.css";
import * as React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import {
    DateField,
    EditButton,
    useTranslate,
    NumberField,
    RecordContextProvider,
    useListContext,
    TextField,
} from "react-admin";
import BusinessIcon from "@mui/icons-material/Business";

import AvatarField from "./visitors/Mobile/AvatarField";
import ColoredNumberField from "./visitors/Mobile/ColoredNumberField";
import SegmentsField from "./visitors/Mobile/SegmentsField";
import CircleIconChip from "../reusable-components/CircleIconChip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailIcon from "@mui/icons-material/Mail";
import LinkPhoneNumber from "./visitors/Mobile/LinkPhoneNumber";
import LinkEmailAddress from "./visitors/Mobile/LinkEmailAddress";

const ClientMobileGrid = () => {
    const translate = useTranslate();
    const { data, isLoading } = useListContext();

    if (isLoading || data.length === 0) {
        return null;
    }

    return (
        <Box margin="0.5em" className="mobile-client-grid">
            {data.map((record) => (
                <RecordContextProvider key={record.id} value={record}>
                    <Card sx={{ margin: "0.5rem 0" }}>
                        <CardHeader
                            className="card-header"
                            sx={{ color: "neutral.900", fontWeight: "800" }}
                            // title={`${record.company} ${record.last_name}`}
                            title={`${record.company}`}
                            subheader={
                                <>
                                    {translate(
                                        "resources.buyersEfaktury.list.mobile.no_org"
                                    )}
                                    &nbsp;
                                    <TextField
                                        source="org_nr"
                                        sx={{
                                            color: "primary.900",
                                            fontWeight: "100",
                                        }}
                                    />
                                </>
                            }
                            avatar={
                                <AvatarField
                                    size="45"
                                    sx={{ backgroundColor: "primary.100" }}
                                />
                            }
                            action={
                                <EditButton sx={{ color: "primary.900" }} />
                            }
                        />
                        <CardContent sx={{ pt: 0 }}>
                            <Typography variant="body2">
                                <LocationOnIcon
                                    sx={{
                                        color: "primary.900",
                                        width: "1rem",
                                        height: "1rem",
                                        pb: 0,
                                        mb: "-2px",
                                        // mb: -1,
                                    }}
                                />
                                &nbsp;
                                {/* {translate(
                                    "resources.buyersEfaktury.list.mobile.address",
                                    record.address || 1
                                )} */}
                                <NumberField source="address" />
                                ,&nbsp;
                                <NumberField source="place" />
                                <br />
                                <LinkEmailAddress source="email" />
                            </Typography>
                            <Typography variant="body2"></Typography>
                            <Typography align="right" sx={{ pt: 2, mb: -1 }}>
                                <LinkPhoneNumber source="phone" />
                            </Typography>
                        </CardContent>
                        {/* {record.groups && record.groups.length > 0 && (
                            <CardContent sx={{ pt: 0 }}>
                                <SegmentsField />
                            </CardContent>
                        )} */}
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};

export default ClientMobileGrid;
