    import * as React from "react";
    import Box from "@mui/joy/Box";
    import IconButton from "@mui/joy/IconButton";
    import List from "@mui/joy/List";
    import ListSubheader from "@mui/joy/ListSubheader";
    import ListItem from "@mui/joy/ListItem";
    import ListItemButton from "@mui/joy/ListItemButton";
    import ListItemDecorator from "@mui/joy/ListItemDecorator";
    import ListItemContent from "@mui/joy/ListItemContent";

    // Icons import
    import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
    import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";
    import DraftsRoundedIcon from "@mui/icons-material/DraftsRounded";
    import AssistantPhotoRoundedIcon from "@mui/icons-material/AssistantPhotoRounded";
    import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
    import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { MenuItemLink, useResourceDefinitions } from "react-admin";
import IconToClientCreate from '@mui/icons-material/PersonAddAlt';
import IconToInvoiceCreate from '@mui/icons-material/PostAdd';
import { Badge, ListDivider } from "@mui/joy";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { CustomDashboard } from "../../../../admin/layout/dashboard/CustomDashboard";


    export default function Sidenav() {

        const resources = useResourceDefinitions();
    return (
        <List size="sm" sx={{ "--ListItem-radius": "8px" }}>
        <ListItem nested>
            <ListSubheader>
                Panel
            <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ "--IconButton-size": "24px", ml: "auto" }}
            >
                <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
            </ListSubheader>
            <List
            aria-labelledby="nav-list-browse"
            sx={{
                "& .JoyListItemButton-root": { p: "8px" }
            }}
            >
                <ListItem sx={{ p: 0 }}//key={name }
                > 
                    {/* <ListItemButton> */}
                        <MenuItemLink to="/custom-route"
                            primaryText={
                                <ListItemContent>
                                    <Badge  badgeContent={ <div>4</div>} color="primary">
                                        { `NotiInfo   ' `  }
                                    </Badge>
                                </ListItemContent>
                                }
                            leftIcon={
                                <ListItemDecorator sx={{ color: "neutral.500" }}>
                                    <NotificationsIcon /> 
                                </ListItemDecorator>
                            } 
                        >
                        </MenuItemLink>
                    {/* </ListItemButton> */}
                </ListItem>
            </List>
        </ListItem>
        <ListDivider />
        <ListItem nested>
            <ListSubheader>
                Utwórz
            <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{ "--IconButton-size": "24px", ml: "auto" }}
            >
                <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
            </ListSubheader>
            <List
            aria-labelledby="nav-list-browse"
            sx={{
                "& .JoyListItemButton-root": { p: "8px" }
            }}
            >
                <ListItem sx={{ p: 0 }}//key={name }
                > 
                    {/* <ListItemButton> */}
                        <MenuItemLink to="/issuedInvoices_list/create" 
                            primaryText={
                                <ListItemContent>
                                    Nowa Faktura
                                </ListItemContent>
                                }
                            leftIcon={
                                <ListItemDecorator sx={{ color: "neutral.500" }}>
                                    <IconToInvoiceCreate /> 
                                </ListItemDecorator>
                            } 
                        >
                        </MenuItemLink>
                    {/* </ListItemButton> */}
                </ListItem>
                <ListItem sx={{ p: 0 }}//key={name }
                > 
                    {/* <ListItemButton> */}
                        <MenuItemLink to="/dbclientlist/create"
                            primaryText={
                                <ListItemContent>
                                    Nowy Kontrahent
                                </ListItemContent>
                                }
                            leftIcon={
                                <ListItemDecorator sx={{ color: "neutral.500" }}>
                                    <IconToClientCreate />
                                </ListItemDecorator>
                            } 
                        >
                        </MenuItemLink>
                    {/* </ListItemButton> */}
                </ListItem>
                {/* {Object.keys(resources).map(name => 
                ( 
                    <ListItem key={name }>
                        <ListItemButton>
                        <ListItemDecorator sx={{ color: "neutral.500" }}>
                            <OutboxRoundedIcon fontSize="small" />
                        </ListItemDecorator>
                        <ListItemContent>{ name }</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                )
                )} */}
            </List>
        </ListItem>
        </List>
    );
    }
