import { ListItemButton, ListItemContent, ListItemDecorator } from "@mui/joy";





export const ItemButton = (props) => {
    const {itemIcon, itemName, idx, id, ...rest } = props;
    return(
        <ListItemButton {...rest} 
            selected={idx === id}
            variant={idx === id ? 'soft' : 'plain'}
            sx={{   backgroundColor: idx === id ? 'primary.50' : undefined,
                    color: idx === id ? 'primary.900' : undefined,
                }}
        >
            {/* <ListItemDecorator>
                {itemIcon ? itemIcon : ""}
            </ListItemDecorator> */}
            <ListItemContent>{itemName ? itemName : "" }</ListItemContent>
        </ListItemButton>
    )
};