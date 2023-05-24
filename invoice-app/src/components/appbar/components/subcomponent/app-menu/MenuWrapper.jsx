import * as React from 'react';




import { ListItem, ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy";
import { useResourceDefinitions } from 'react-admin';
import { ItemButton } from '../inner-left-sidebar/components/ItemButton';





export const AppMenu = (props) => {
    const {itemIcon, itemName, idx, id, setIndex, ...rest } = props;
    const resources = useResourceDefinitions();
    console.log("useResourceDefinitions",resources );
    return(
        <>
        {Object.keys(resources).map((name, index) => {
                return(
                    // <ListItem startAction={<FindInPageIcon sx={{ color: index === 2 ? 'primary.900' : 'neutral.700',  }} />} >
                    <ListItem  >
                        <ItemButton kay={name} itemName={name} idx={index} id={2} onClick={() => setIndex(2)}  />
                    </ListItem  >
                )
            }
        )}
        </>
    )
};