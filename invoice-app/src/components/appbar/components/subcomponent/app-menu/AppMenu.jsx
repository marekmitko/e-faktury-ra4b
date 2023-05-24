import * as React from 'react';
 
import { List, ListItem, ListItemButton, ListItemContent } from "@mui/joy";
import { MenuItemLink, useResourceDefinitions, Menu} from 'react-admin';
import { ItemButton } from '../inner-left-sidebar/components/ItemButton';
import ListItemDecorator, {  listItemDecoratorClasses,  } from '@mui/joy/ListItemDecorator';





export const AppMenu = (props) => {
    const {itemIcon, itemName, idx, id, setIndex, ...rest } = props;
    const resources = useResourceDefinitions();
    console.log("useResourceDefinitions",resources );
    return(
        <>
        <List  size={true ? 'sm' : undefined}
            // sx={{
            //     '--ListItem-radius': '8px',
            //     '--List-gap': '4px',
            //     '--List-nestedInsetStart': '40px',
            // }}
            sx={{ position: 'relative', left: 20, transform: 'translateX(-30px)',
                    // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
                    '--ListItem-paddingLeft': '0px',
                    '--ListItemDecorator-size': '64px',
                    '--ListItemDecorator-color': (theme) => theme.vars.palette.text.secondary,
                    '--ListItem-minHeight': '32px',
                    '--List-nestedInsetStart': '13px',
                    [`& .${listItemDecoratorClasses.root}`]: {
                        justifyContent: 'flex-end',   pr: '18px',
                    },
                    '& [role="button"]': {    borderRadius: '0 20px 20px 0',   },
                }}
            >

        {Object.keys(resources).map((name, index) => {
            console.log( 'name',name);
            return(
                // <ListItem startAction={<FindInPageIcon sx={{ color: index === 2 ? 'primary.900' : 'neutral.700',  }} />} >
                <ListItem  >
                <MenuItemLink to="/reference/create" 
                    primaryText={ () => (
                        <ItemButton kay={name} itemName={name} idx={index} id={2} onClick={() => setIndex(2)}  />
                    )
                }
                //onClick={onMenuClick} 
                />
                </ListItem  >
                )
            })
        }
            </List>
        </>
    )
};