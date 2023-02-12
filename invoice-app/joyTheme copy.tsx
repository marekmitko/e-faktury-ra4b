import * as React from "react";
import { deepmerge } from "@mui/utils";
import type {} from "@mui/material/themeCssVarsAugmentation";
import {
    experimental_extendTheme as extendMuiTheme,
    PaletteColor,
    TypeText,
    TypeAction,
    Overlays,
    PaletteColorChannel,
    PaletteAlert,
    PaletteAppBar,
    PaletteAvatar,
    PaletteChip,
    PaletteFilledInput,
    PaletteLinearProgress,
    PaletteSlider,
    PaletteSkeleton,
    PaletteSnackbarContent,
    PaletteSpeedDialAction,
    PaletteStepConnector,
    PaletteStepContent,
    PaletteSwitch,
    PaletteTableCell,
    PaletteTooltip,
    Shadows,
    ZIndex
} from "@mui/material/styles";
import colors from "@mui/joy/colors";
import {
    extendTheme as extendJoyTheme,
    CssVarsProvider,
    useColorScheme,
    Theme as JoyTheme,
    ThemeCssVar as JoyThemeCssVar
} from "@mui/joy/styles";

// Material UI components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Icons
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

// Joy UI components
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import JoyButton from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CommonColors } from "@mui/material/styles/createPalette";
import { TypeBackground } from "@mui/material";

// extends Joy theme to include tokens from Material UI
declare module "@mui/joy/styles" {
    interface Palette {
        secondary: PaletteColorChannel;
        error: PaletteColorChannel;
        dividerChannel: string;
        action: TypeAction;
        Alert: PaletteAlert;
        AppBar: PaletteAppBar;
        Avatar: PaletteAvatar;
        Chip: PaletteChip;
        FilledInput: PaletteFilledInput;
        LinearProgress: PaletteLinearProgress;
        Skeleton: PaletteSkeleton;
        Slider: PaletteSlider;
        SnackbarContent: PaletteSnackbarContent;
        SpeedDialAction: PaletteSpeedDialAction;
        StepConnector: PaletteStepConnector;
        StepContent: PaletteStepContent;
        Switch: PaletteSwitch;
        TableCell: PaletteTableCell;
        Tooltip: PaletteTooltip;
    }
    interface PalettePrimary extends PaletteColor {}
    interface PaletteInfo extends PaletteColor {}
    interface PaletteSuccess extends PaletteColor {}
    interface PaletteWarning extends PaletteColor {}
    interface PaletteCommon extends CommonColors {}
    interface PaletteText extends TypeText {}
    interface PaletteBackground extends TypeBackground {}

    interface ThemeVars {
        // attach to Joy UI `theme.vars`
        shadows: Shadows;
        overlays: Overlays;
        zIndex: ZIndex;
    }
}

type MergedThemeCssVar = { [k in JoyThemeCssVar]: true };

declare module "@mui/material/styles" {
    interface Theme {
        // put everything back to Material UI `theme.vars`
        vars: JoyTheme["vars"];
    }

    // makes Material UI theme.getCssVar() sees Joy theme tokens
    interface ThemeCssVarOverrides extends MergedThemeCssVar {}
}

const ModeToggle = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (
        <IconButton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
            {mode === "dark" ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};

const muiTheme = extendMuiTheme({
    cssVarPrefix: "joy",
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: colors.blue[500]
                },
                grey: colors.grey,
                error: {
                    main: colors.red[500]
                },
                info: {
                    main: colors.purple[500]
                },
                success: {
                    main: colors.green[500]
                },
                warning: {
                    main: colors.yellow[200]
                },
                common: {
                    white: "#FFF",
                    black: "#09090D"
                },
                divider: colors.grey[200],
                text: {
                    primary: colors.grey[800],
                    secondary: colors.grey[600]
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: colors.blue[600]
                },
                grey: colors.grey,
                error: {
                    main: colors.red[600]
                },
                info: {
                    main: colors.purple[600]
                },
                success: {
                    main: colors.green[600]
                },
                warning: {
                    main: colors.yellow[300]
                },
                common: {
                    white: "#FFF",
                    black: "#09090D"
                },
                divider: colors.grey[800],
                text: {
                    primary: colors.grey[100],
                    secondary: colors.grey[300]
                }
            }
        }
    }
});

const joyTheme = extendJoyTheme();

export default function BasicButtons() {
    return (
        <CssVarsProvider theme={deepmerge(muiTheme, joyTheme)}>
            <ModeToggle />
            <br />
            <br />
            <Stack spacing={2} direction="row">
                <Button variant="text" color="warning">
                    Text
                </Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <br />
            <Stack spacing={2} direction="row">
                <JoyButton variant="plain" color="warning">
                    Text
                </JoyButton>
                <JoyButton variant="solid">Contained</JoyButton>
                <JoyButton variant="outlined">Outlined</JoyButton>
            </Stack>
            <br />
            <Card variant="outlined" sx={(theme) => ({ minWidth: "320px" })}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography level="h2" 
                    fontSize="md"
                     sx={{ alignSelf: "flex-start" }}>
                        Yosemite National Park
                    </Typography>
                    <Typography level="body2">April 24 to May 02, 2021</Typography>
                </Box>

                <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                    <img
                        src="https://images.unsplash.com/photo-1527549993586-dff825b37782?crop=entropy&auto=format&fit=crop&w=3270"
                        alt=""
                    />
                </AspectRatio>
                <Box sx={{ display: "flex" }}>
                    <div>
                        <Typography level="body3">Total price:</Typography>
                        <Typography fontSize="lg" fontWeight="lg">
                            $2900
                        </Typography>
                    </div>
                    <JoyButton
                        variant="solid"
                        size="sm"
                        color="primary"
                        aria-label="Explore Bahamas Islands"
                        sx={{ ml: "auto", fontWeight: 600 }}
                    >
                        Explore
                    </JoyButton>
                </Box>
            </Card>
        </CssVarsProvider>
    );
}
