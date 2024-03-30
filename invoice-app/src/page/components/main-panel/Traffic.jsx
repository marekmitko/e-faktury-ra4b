"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import DesktopIcon from "@mui/icons-material/LaptopOutlined";
import DeviceTabletIcon from "@mui/icons-material/TabletAndroidOutlined";
// import PhoneIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneIcon from "@mui/icons-material/AodOutlined";

const iconMapping = {
    Desktop: DesktopIcon,
    Tablet: DeviceTabletIcon,
    Phone: PhoneIcon,
};

// export interface TrafficProps {
//     chartSeries: number[];
//     labels: string[];
//     sx?: SxProps;
// }

export function Traffic({ chartSeries, labels, sx }) {
    const chartOptions = useChartOptions(labels);

    return (
        <Card sx={sx} className="info-card">
            <CardHeader title="Traffic source" />
            <CardContent>
                <Stack spacing={2}>
                    {/* <Chart
                        height={300}
                        options={chartOptions}
                        series={chartSeries}
                        type="donut"
                        width="100%"
                    /> */}
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                        {chartSeries.map((item, index) => {
                            const label = labels[index];
                            const Icon = iconMapping[label];

                            return (
                                <Stack
                                    key={label}
                                    spacing={1}
                                    sx={{ alignItems: "center" }}
                                >
                                    {Icon ? (
                                        <Icon fontSize="var(--icon-fontSize-lg)" />
                                    ) : null}
                                    <Typography variant="h6">
                                        {label}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        variant="subtitle2"
                                    >
                                        {item}%
                                    </Typography>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

function useChartOptions(labels) {
    const theme = useTheme();

    return {
        chart: { background: "transparent" },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main,
        ],
        dataLabels: { enabled: false },
        labels,
        legend: { show: false },
        plotOptions: { pie: { expandOnClick: false } },
        states: {
            active: { filter: { type: "none" } },
            hover: { filter: { type: "none" } },
        },
        stroke: { width: 0 },
        theme: { mode: theme.palette.mode },
        tooltip: { fillSeriesColor: false },
    };
}
