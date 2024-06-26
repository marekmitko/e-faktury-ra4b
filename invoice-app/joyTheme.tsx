// import * as React from "react";
// import { deepmerge } from "@mui/utils";
// import type {} from "@mui/material/themeCssVarsAugmentation";
// import {
//     // useColorScheme,
//     Experimental_CssVarsProvider as CssVarsProvider,
//     experimental_extendTheme as extendMuiTheme,
//     shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
//     PaletteColor,
//     TypeText,
//     TypeAction,
//     TypeBackground,
//     CommonColors,
//     Overlays,
//     PaletteColorChannel,
//     PaletteAlert,
//     PaletteAppBar,
//     PaletteAvatar,
//     PaletteChip,
//     PaletteFilledInput,
//     PaletteLinearProgress,
//     PaletteSlider,
//     PaletteSkeleton,
//     PaletteSnackbarContent,
//     PaletteSpeedDialAction,
//     PaletteStepConnector,
//     PaletteStepContent,
//     PaletteSwitch,
//     PaletteTableCell,
//     PaletteTooltip,
//     Shadows,
//     ZIndex,
// } from "@mui/material/styles";
// import { blue, grey } from "@mui/material/colors";
// import {
//     extendTheme as extendJoyTheme,
//     shouldSkipGeneratingVar as joyShouldSkipGeneratingVar,
// } from "@mui/joy/styles";

// // Joy UI components

// import type {} from "@mui/material/themeCssVarsAugmentation";
// import {
//     FontSize,
//     Theme as JoyTheme,
//     ThemeCssVar as JoyThemeCssVar,
// } from "@mui/joy/styles";

// // extends Joy theme to include tokens from Material UI
// declare module "@mui/joy/styles" {
//     interface Palette {
//         secondary: PaletteColorChannel;
//         error: PaletteColorChannel;
//         dividerChannel: string;
//         action: TypeAction;
//         Alert: PaletteAlert;
//         AppBar: PaletteAppBar;
//         Avatar: PaletteAvatar;
//         Chip: PaletteChip;
//         FilledInput: PaletteFilledInput;
//         LinearProgress: PaletteLinearProgress;
//         Skeleton: PaletteSkeleton;
//         Slider: PaletteSlider;
//         SnackbarContent: PaletteSnackbarContent;
//         SpeedDialAction: PaletteSpeedDialAction;
//         StepConnector: PaletteStepConnector;
//         StepContent: PaletteStepContent;
//         Switch: PaletteSwitch;
//         TableCell: PaletteTableCell;
//         Tooltip: PaletteTooltip;
//     }
//     interface PalettePrimary extends PaletteColor {}
//     interface PaletteInfo extends PaletteColor {}
//     interface PaletteSuccess extends PaletteColor {}
//     interface PaletteWarning extends PaletteColor {}
//     interface PaletteCommon extends CommonColors {}
//     interface PaletteText extends TypeText {}
//     interface PaletteBackground extends TypeBackground {}

//     interface ThemeVars {
//         // attach to Joy UI `theme.vars`
//         shadows: Shadows;
//         overlays: Overlays;
//         zIndex: ZIndex;
//     }
// }

// type MergedThemeCssVar = { [k in JoyThemeCssVar]: true };

// declare module "@mui/material/styles" {
//     interface Theme {
//         // put everything back to Material UI `theme.vars`
//         vars: JoyTheme["vars"];
//     }

//     // makes Material UI theme.getCssVar() sees Joy theme tokens
//     interface ThemeCssVarOverrides extends MergedThemeCssVar {}
// }

// declare module "@mui/material/SvgIcon" {
//     interface SvgIconPropsSizeOverrides extends Record<keyof FontSize, true> {}

//     interface SvgIconPropsColorOverrides {
//         danger: true;
//         neutral: true;
//     }
// }

// const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme();

// const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendJoyTheme({
//     cssVarPrefix: "mui",
//     colorSchemes: {
//         light: {
//             palette: {
//                 primary: {
//                     ...blue,
//                     solidColor: "var(--mui-palette-primary-contrastText)",
//                     solidBg: "var(--mui-palette-primary-main)",
//                     solidHoverBg: "var(--mui-palette-primary-dark)",
//                     plainColor: "var(--mui-palette-primary-main)",
//                     plainHoverBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
//                     plainActiveBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
//                     outlinedBorder:
//                         "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
//                     outlinedColor: "var(--mui-palette-primary-main)",
//                     outlinedHoverBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
//                     outlinedHoverBorder: "var(--mui-palette-primary-main)",
//                     outlinedActiveBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
//                 },
//                 neutral: {
//                     ...grey,
//                 },
//                 divider: "var(--mui-palette-divider)",
//                 text: {
//                     tertiary: "rgba(0 0 0 / 0.56)",
//                 },
//             },
//         },
//         dark: {
//             palette: {
//                 primary: {
//                     ...blue,
//                     solidColor: "var(--mui-palette-primary-contrastText)",
//                     solidBg: "var(--mui-palette-primary-main)",
//                     solidHoverBg: "var(--mui-palette-primary-dark)",
//                     plainColor: "var(--mui-palette-primary-main)",
//                     plainHoverBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
//                     plainActiveBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
//                     outlinedBorder:
//                         "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
//                     outlinedColor: "var(--mui-palette-primary-main)",
//                     outlinedHoverBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
//                     outlinedHoverBorder: "var(--mui-palette-primary-main)",
//                     outlinedActiveBg:
//                         "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
//                 },
//                 neutral: {
//                     ...grey,
//                 },
//                 divider: "var(--mui-palette-divider)",
//                 text: {
//                     tertiary: "rgba(255 255 255 / 0.5)",
//                 },
//             },
//         },
//     },
//     fontFamily: {
//         display: '"Roboto","Helvetica","Arial",sans-serif',
//         body: '"Roboto","Helvetica","Arial",sans-serif',
//     },
//     shadow: {
//         xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
//         sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
//         md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
//         lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
//         xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
//     },
// });

// const mergedTheme = deepmerge(joyTheme, muiTheme) as unknown as ReturnType<
//     typeof extendMuiTheme
// >;

// mergedTheme.unstable_sxConfig = {
//     ...muiSxConfig,
//     ...joySxConfig,
// };

// type Props = {
//     children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
// };

// export default function CssVarJoyProvider({ children }: any) {
//     return (
//         <CssVarsProvider
//             theme={mergedTheme}
//             shouldSkipGeneratingVar={(keys) =>
//                 muiShouldSkipGeneratingVar(keys) ||
//                 joyShouldSkipGeneratingVar(keys)
//             }
//         >
//             {children}
//         </CssVarsProvider>
//     );
// }
