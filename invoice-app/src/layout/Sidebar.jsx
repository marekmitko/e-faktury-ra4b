import { Sidebar, useSidebarState } from 'react-admin';

const MySidebar = (props) => {
    
    const [open] = useSidebarState();

    return(
    <Sidebar
    {...props}
        sx={{
            // // minHeight: '100dvh',
            // alignSelf: 'stretch',
            width: open ? 200 : 55,
            backgroundColor: "rgb(255, 255, 255)",
            "& .RaSidebar-drawerPaper": {
                backgroundColor: "rgb(255, 255, 255)",
                },

                transition: theme =>
                theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            }}
    />
    )
};

export default MySidebar;