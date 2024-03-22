import * as React from "react";
import { Link } from "react-router-dom";
import { useRecordContext, TextField } from "react-admin";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MuiLink from "@mui/material/Link";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";

const LinkPhoneNumber = (props) => {
    const record = useRecordContext(props);
    if (!record || !props.source) {
        return null;
    }
    let number = "tel:" + record[`${props.source}`];

    console.log("phone record:", number);
    return (
        <MuiLink
            className="phone-link"
            rel="noopener noreferrer"
            href={number}
            target="_blank"
            // underline="none"
        >
            {/* <a target="_blank" rel="noopener noreferrer" href="${number}"> */}
            <PhoneForwardedIcon
                sx={{
                    color: "#0b57d0",
                    width: "1.25rem",
                    height: "1.25rem",
                    pb: 0,
                    mb: "-3.5px",
                    // mb: -1,
                }}
            />
            &nbsp;
            <TextField
                {...props}
                sx={{
                    textDecoration: "none",
                    // color: "primary.600",
                    fontWeight: "500",
                    color: "#0b57d0",
                }}
            />
            {/* </a> */}
        </MuiLink>
    );
};

export default LinkPhoneNumber;
