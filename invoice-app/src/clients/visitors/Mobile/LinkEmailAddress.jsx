import * as React from "react";
import { Link } from "react-router-dom";
import { useRecordContext, TextField } from "react-admin";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MuiLink from "@mui/material/Link";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailIcon from "@mui/icons-material/Mail";

const LinkEmailAddress = (props) => {
    const record = useRecordContext(props);
    if (!record || !props.source) {
        return null;
    }
    let mail = "mailto:" + record[`${props.source}`];

    return (
        <MuiLink
            sx={{ p: 0 }}
            className="email-link"
            rel="noopener noreferrer"
            href={mail}
            target="_blank"
            // underline="none"
        >
            {/* <a target="_blank" rel="noopener noreferrer" href="${number}"> */}
            <MailIcon
                sx={{
                    color: "primary.900",
                    width: "1rem",
                    height: "1rem",
                    pb: 0,
                    mb: "-3px",
                    // ml: 1,
                    // mb: -1,
                }}
            />
            &nbsp;
            <TextField
                {...props}
                sx={{
                    textDecoration: "none",
                    // color: "primary.600",
                    fontWeight: "400",
                    textTransform: "lowercase",
                }}
            />
            {/* </a> */}
        </MuiLink>
    );
};

export default LinkEmailAddress;
