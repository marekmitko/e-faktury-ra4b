import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListBulletsIcon from "@mui/icons-material/FormatListBulleted";
import { useTranslate } from "react-admin";

export function TasksProgress({ value, sx, label }) {
    const translate = useTranslate();
    return (
        <Card sx={sx} className="info-card accent-icon">
            <CardContent>
                <Stack spacing={2}>
                    <Stack
                        direction="row"
                        sx={{
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                        }}
                        spacing={3}
                    >
                        <Stack spacing={1}>
                            <Typography
                                className="title"
                                color="text.secondary"
                                gutterBottom
                                variant="overline"
                            >
                                {label ? translate(`${label}`) : ""}
                            </Typography>
                            <Typography variant="h4">{value}%</Typography>
                        </Stack>
                        <Avatar
                            className="main-accent-icon  progress-circle"
                            sx={{
                                backgroundColor:
                                    "var(--mui-palette-warning-main)",
                                height: "56px",
                                width: "56px",
                            }}
                        >
                            <ListBulletsIcon className="progress-icon" />
                        </Avatar>
                    </Stack>
                    <div>
                        <LinearProgress value={value} variant="determinate" />
                    </div>
                </Stack>
            </CardContent>
        </Card>
    );
}
