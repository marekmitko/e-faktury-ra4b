import * as React from 'react';
import {
    AppBar,
    Logout,
    UserMenu,
    useTranslate,
    useUserMenu,
} from 'react-admin';
import { Link } from 'react-router-dom';
import {
    Box,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    Theme,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

// import Logo from './Logo';
import Logo from '../components/appbar/components/subcomponent/EfaLogo';
import { TitlePortal } from './TitlePortal';

const ConfigurationMenu = React.forwardRef((props, ref) => {
    const translate = useTranslate();
    const { onClose } = useUserMenu();

    return (
        <MenuItem
            component={Link}
            // @ts-ignore
            ref={ref}
            {...props}
            to="/configuration"
            onClick={onClose}
        >
            <ListItemIcon>
                <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{translate('pos.configuration')}</ListItemText>
        </MenuItem>
    );
});
const CustomUserMenu = () => (
    <UserMenu>
        <ConfigurationMenu />
        <Logout />
    </UserMenu>
);

const CustomAppBar = () => {
    const isLargeEnough = useMediaQuery<Theme>(theme =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar  elevation={1} userMenu={<CustomUserMenu />} className='dASDSADA'
        sx={{   backgroundColor: '#fff', color: "var(--mui-palette-grey-700)",
                "& >div>button.MuiButtonBase-root": { 
                    // border: '1px solid',
                    borderColor: "var(--mui-palette-grey-200)",
                    // borderRadius: "7px",
                    padding: '4px', mx: '4px',
                    // size: "sm",
                    // color: "var(--mui-palette-grey-50)",
                    color: "var(--mui-palette-grey-900)",
                    opacity: 1,
                    // backgroundColor: 'primary.900',
                    backgroundColor: '#fff',
                    boxShadow: 2

                }
            }}
        >
            <TitlePortal />
            {/* {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />} */}
            {isLargeEnough && <Logo  sx={{ mr: 1.25, mb: .75  }} />}
            {/* {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />} */}
        </AppBar>
    );
};

export default CustomAppBar;