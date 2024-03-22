import * as React from "react";
import { Avatar, SxProps } from "@mui/material";
import { useRecordContext } from "react-admin";

const AvatarField = ({ size = "25", sx }) => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Avatar
            src={`${record.avatar}?size=${size}x${size}`}
            style={{
                width: parseInt(size, 8),
                height: parseInt(size, 8),
                color: "#fff",
            }}
            sx={sx}
            alt={`${record.company}`}
        />
    );
};

export default AvatarField;
