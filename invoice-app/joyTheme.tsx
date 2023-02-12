// import { deepmerge } from '@mui/utils';
// import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';
// import colors from '@mui/joy/colors';
// import {
//   extendTheme as extendJoyTheme,
//   CssVarsProvider, useColorScheme,
// } from '@mui/joy/styles';

import { deepmerge } from '@mui/utils';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
} from '@mui/material/styles';
import {
  extendTheme as extendJoyTheme,
  shouldSkipGeneratingVar as joyShouldSkipGeneratingVar,
} from '@mui/joy/styles';



const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendTheme({
    // This is required to point to `var(--mui-*)` because we are using
    // `CssVarsProvider` from Material UI.
    cssVarPrefix: 'mui',
    colorSchemes: {
      light: {
        palette: {
          primary: {
            ...blue,
            solidColor: 'var(--mui-palette-primary-contrastText)',
            solidBg: 'var(--mui-palette-primary-main)',
            solidHoverBg: 'var(--mui-palette-primary-dark)',
            plainColor: 'var(--mui-palette-primary-main)',
            plainHoverBg:
              'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
            plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
            outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
            outlinedColor: 'var(--mui-palette-primary-main)',
            outlinedHoverBg:
              'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
            outlinedHoverBorder: 'var(--mui-palette-primary-main)',
            outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          },
          neutral: {
            ...grey,
          },
          // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
          divider: 'var(--mui-palette-divider)',
          text: {
            tertiary: 'rgba(0 0 0 / 0.56)',
          },
        },
      },
      // Do the same for dark mode
      // dark: { ... }
    },
    fontFamily: {
      display: '"Roboto","Helvetica","Arial",sans-serif',
      body: '"Roboto","Helvetica","Arial",sans-serif',
    },
    shadow: {
      xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
      sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
      md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
      lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
      xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
    },
  });
  
  // Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)`
  // because some of the values in the Joy UI theme refers to CSS variables and
  // not raw colors.
  const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme();
  
  // You can use your own `deepmerge` function.
  // muiTheme will deeply merge to joyTheme.
  const mergedTheme = (deepmerge(joyTheme, muiTheme) as unknown) as ReturnType<
    typeof extendMuiTheme
  >;
  
  mergedTheme.unstable_sxConfig = {
    ...joySxConfig,
    ...muiSxConfig
  };
  
  export default function App() {
    return (
      <CssVarsProvider
        theme={mergedTheme}
        shouldSkipGeneratingVar={(keys) =>
          muiShouldSkipGeneratingVar(keys) || joyShouldSkipGeneratingVar(keys)
        }
      >
        ...Material UI and Joy UI components
      </CssVarsProvider>
    );
  }




















const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using
  // `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: colors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: colors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});

const joyTheme = extendJoyTheme();

// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
const theme = deepmerge(muiTheme, joyTheme);

export default function App() {
  return (
    <CssVarsProvider theme={theme}>
      ...Material UI and Joy UI components
    </CssVarsProvider>
  );
}
