import * as React from 'react';
import CloseIcon from '@mui/icons-material/RemoveCircleOutline';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/joy/IconButton';
import { useSimpleFormIteratorItem, IconButtonWithTooltip, } from 'react-admin';
import { Box } from '@mui/joy';




// import { IconButtonWithTooltip, ButtonProps } from '../../button';

export const EfaRemoveItemButton = (props) => {
    const { remove } = useSimpleFormIteratorItem();

    return (

        <IconButtonWithTooltip
            label="ra.action.remove"
            size="small"
            onClick={() => remove()}
            color="warning"
            sx={{
                ":hover, --focusVisible":  { transform: 'rotate(45deg)', 
                
                
                backgroundColor: 'transparent', border: 'none' 
            },
            "--IconButton-size": "12px", 
            mb: -3,
        }}
        {...props}
        >
        <IconButton
            color="danger"
            variant="plain"
            size="sm"
            sx={{  mr: 'auto', "--IconButton-size": "5px",  }}
            >
    <Delete />
    </IconButton>
        </IconButtonWithTooltip>
    );
};





export const EfaRemoveBtnIcon = () => {


    // export const AddItemRowButton = (props) => {
    //     const { add } = useSimpleFormIterator();
    //     const translate = useTranslate() ;
    //     const { label } = props;
    //     return (
    //         <IconButtonWithTooltip
    //         label={translate("myroot.custom_ra.action.tooltip.addSalesItem")}
    //         size="small"
    //         onClick={() => add()}
    //         color="primary"
    //         {...props} 
    //         > 
    //             <JoyChip startDecorator={<AddCircleIcon fontSize="small" />}	>
    //                 {label ? label : translate('myroot.custom_ra.action.button.addSalesItem')}
    //             </JoyChip>
    //         </IconButtonWithTooltip>
    //     );
    // };

    <IconButton
    color="danger"
    variant="plain"
    size="sm"
    sx={{ mr: 'auto' }}
>
<Delete />
</IconButton>
}