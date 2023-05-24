    /* eslint-disable jsx-a11y/anchor-is-valid */
    import * as React from 'react';
    import { styled } from '@mui/joy/styles';
    import GlobalStyles from '@mui/joy/GlobalStyles';
    import Avatar from '@mui/joy/Avatar';
    import Box from '@mui/joy/Box';
    import Card from '@mui/joy/Card';
    import Divider from '@mui/joy/Divider';
    import IconButton from '@mui/joy/IconButton';
    import Input from '@mui/joy/Input';
    import Link from '@mui/joy/Link';
    import LinearProgress from '@mui/joy/LinearProgress';
    import List from '@mui/joy/List';
    import ListItem from '@mui/joy/ListItem';
    import ListItemButton from '@mui/joy/ListItemButton';
    import ListItemContent from '@mui/joy/ListItemContent';
    import ListItemDecorator from '@mui/joy/ListItemDecorator';
    import Typography from '@mui/joy/Typography';
    import Sheet from '@mui/joy/Sheet';
    // import MuiLogo from './MuiLogo';
    // import ColorSchemeToggle from './others/ColorSchemeToggle';
    // import { closeSidebar } from './others/utilis';
    import EfaLogo from './subcomponent/EfaLogo';
    import { useLocale, useSidebarState } from 'react-admin';
    import {  MainInnerList } from './subcomponent/inner-left-sidebar/MainInnerList';
    import { AdditionalInnerList } from './subcomponent/inner-left-sidebar/AdditionalInnerList';

    const Dropdown = styled('i')(({ theme }) => ({
    color: theme.vars.palette.text.tertiary,
    }));


    export default function LeftSidebar({open, setOpen, children}) {



        // const [open, setOpen] = useSidebarState();
        useLocale(); // force redraw on locale change
        // const toggleSidebar = () => setOpen(!open);
        // const closeSidebar = () => setOpen(true);
        const toggleSidebar = () => setOpen(!open);






        return (
        <>
        <Sheet
        className="Sidebar"
        sx={{
            position: {
            xs: 'fixed',
            md: 'sticky',
            },
            transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
            md: 'none',
            },
            transition: 'transform 0.4s, width 0.4s',
            zIndex: 100000000000000000000000000000000000000,
            height: '100dvh',
            width: 'var(--Sidebar-width)',
            top: 0,
            p: 1.5,
            py: 3,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRight: '1px solid',
            borderColor: 'divider',
        }}
        >
        <GlobalStyles
            styles={(theme) => ({
            ':root': {
                '--Sidebar-width': '224px',
                [theme.breakpoints.up('lg')]: {
                '--Sidebar-width': '256px',
                },
            },
            })}
        />
        <Box
            className="Sidebar-overlay"
            sx={{
            position: 'fixed',
            zIndex: 9998,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'background.body',
            opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
            transition: 'opacity 0.4s',
            transform: {
                xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                lg: 'translateX(-100%)',
            },
            }}
            onClick={() => toggleSidebar()}
        />
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <EfaLogo />
            <Typography fontWeight="xl">MUI</Typography>
            {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
        </Box>
        <Input startDecorator={<i data-feather="search" />} placeholder="Search" />
        { children ? children : '' }
        <Box
            sx={{
                minHeight: 0,
                overflow: 'hidden auto',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
        </Box>
        <Divider />
        <AdditionalInnerList />
        <Divider />
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Avatar variant="outlined" src="/static/images/avatar/3.jpg" />
            <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography fontSize="sm" fontWeight="lg">
                Siriwat K.
            </Typography>
            <Typography level="body3">siriwatk@test.com</Typography>
            </Box>
            <IconButton variant="plain" color="neutral">
            <i data-feather="log-out" />
            </IconButton>
        </Box>
        </Sheet>
        </>
    );
    }
