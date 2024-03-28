import React, { memo } from "react";
import {
    CardOverflow,
    Typography,
    Divider,
    Avatar,
    Box,
    SvgIcon,
} from "@mui/joy";
import { CardContent, Stack, useMediaQuery } from "@mui/material";
import {
    NumberInput,
    TextInput,
    Title,
    regex,
    useResourceContext,
    useTranslate,
} from "react-admin";
import CompanyTextInput from "./subcomponents/CompanyTextInput";
import SemiovalTitleChip from "../../reusable-components/SemiovalTitleChip";

// icon import
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import HolidayVillageOutlined from "@mui/icons-material/HolidayVillageOutlined";
import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import MvaBooleanInput from "./subcomponents/MvaBooleanInput";
import MvaInputNumber from "./subcomponents/MvaInputNumber";
import CircleIconChip from "../../reusable-components/CircleIconChip";
import HeaderClientFormCreate from "./subcomponents/HeaderSimpleForm";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { MQ_Breakpoint } from "../../constant";

const Separator = (props) => <Box sx={{ pt: "1em" }} {...props} />;

// const zipValidators = [, 'Must be a zip code')];
// const zipValidators = [regex(/^\d{5}$/, 'Must be a zip code')];

export const ContentForm = () => {
    const translate = useTranslate();
    const isSmall = useMediaQuery(`${MQ_Breakpoint.isSmall}`);

    return (
        <>
            <Stack
                direction="row"
                gap={1}
                width="100%"
                sx={{ mb: isSmall ? -0.5 : "" }}
            >
                <CircleIconChip
                    icon={<DriveFileRenameOutlineIcon />}
                    iconSize="xl2"
                    circleSize="sm"
                    boxSx={{ mt: -1.5, pr: 1 }}
                />
                <TextInput
                    isRequired
                    source="company"
                    variant="standard"
                    fullWidth
                />
            </Stack>
            <Stack
                direction="row"
                spacing={2}
                width="100%"
                alignItems="center"
                sx={{ pl: isSmall ? 1 : "", mb: isSmall ? -0.5 : "" }}
            >
                <MvaBooleanInput
                    sx={{ mt: 1.5, color: "neutral.600" }}
                    source="mva"
                />
                {/* <MvaInputNumber  source="org_nr" variant="standard" fullWidth  /> */}
                <NumberInput source="org_nr" variant="standard" fullWidth />
            </Stack>
            <SemiovalTitleChip
                boxSx={{ display: isSmall ? "none" : "" }}
                startDecorator={
                    <EmailRoundedIcon
                        sx={{
                            maxHeight: "20px",
                            color: "primary.900",
                            mb: -0.1,
                            ml: 1.5,
                            mr: -0.25,
                            mt: -0.15,
                        }}
                    />
                }
            >
                {translate("myroot.myBuyersEfaktury.header.addres_section")}{" "}
            </SemiovalTitleChip>
            <Separator sx={{ pt: isSmall ? 0 : "1em" }} />
            <Stack
                direction="row"
                gap={1}
                width="100%"
                sx={{ mb: isSmall ? -0.5 : "" }}
            >
                <CircleIconChip
                    icon={<EditLocationOutlinedIcon />}
                    iconSize="xl2"
                    circleSize="sm"
                    boxSx={{ mt: -1.5, pr: 1 }}
                />
                <TextInput
                    isRequired
                    source="address"
                    variant="standard"
                    fullWidth
                />
            </Stack>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                width="100%"
                sx={{ mb: isSmall ? -0.5 : "" }}
            >
                <CircleIconChip
                    icon={<FmdGoodOutlinedIcon />}
                    iconSize="xl2"
                    circleSize="sm"
                    boxSx={{ mt: -1.5 }}
                />
                <TextInput
                    sx={{ maxWidth: "25%" }}
                    // validate={zipValidators}
                    isRequired
                    source="zip_code"
                    variant="standard"
                    //type="number" //Om? Omówićź czy type number może tu być
                />
                <TextInput
                    isRequired
                    source="place"
                    fullWidth
                    variant="standard"
                />
            </Stack>
            <SemiovalTitleChip
                boxSx={{ display: isSmall ? "none" : "" }}
                startDecorator={
                    <RecentActorsIcon
                        sx={{
                            color: "primary.900",
                            // mb: -0.001,
                            ml: 1.5,
                            mr: 0,
                        }}
                    />
                }
            >
                {translate("myroot.myBuyersEfaktury.header.contact_section")}{" "}
            </SemiovalTitleChip>
            <Separator sx={{ pt: isSmall ? 0 : "1em" }} />
            <Stack
                direction="row"
                spacing={2}
                width="100%"
                sx={{ mb: isSmall ? -0.5 : "" }}
            >
                <CircleIconChip
                    icon={<PersonPinCircleOutlinedIcon />}
                    iconSize="xl2"
                    circleSize="sm"
                    boxSx={{ mt: -1.5 }}
                />
                <TextInput
                    source="lastname"
                    fullWidth
                    variant="standard"
                    // helperText={false}
                />
                <TextInput
                    source="firstname"
                    fullWidth
                    variant="standard"
                    // helperText={false}
                />
            </Stack>
            <Stack
                direction={isSmall ? "column" : "row"}
                // direction="row"
                spacing={isSmall ? 0 : 2}
                alignItems="center"
                width="100%"
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    width="100%"
                    sx={{ mb: isSmall ? -0.5 : "" }}
                >
                    <CircleIconChip
                        icon={<MarkAsUnreadOutlinedIcon />}
                        iconSize="xl2"
                        circleSize="sm"
                        boxSx={{ mt: -1.5 }}
                    />
                    <TextInput
                        isRequired
                        source="email"
                        fullWidth
                        variant="standard"
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    width="100%"
                >
                    <CircleIconChip
                        icon={<CallRoundedIcon />}
                        iconSize="xl2"
                        circleSize="sm"
                        boxSx={{ mt: -1.5 }}
                    />
                    <TextInput source="phone" fullWidth variant="standard" />
                </Stack>
            </Stack>
        </>
    );
};

export default memo(ContentForm);
