import * as React from "react";
import   JoyChip from "@mui/joy/Chip";
  import AddCircleIcon from '@mui/icons-material/AddCircle';
import {IconButtonWithTooltip, useSimpleFormIterator, useTranslate} from 'react-admin';

export const AddItemRowButton = (props) => {
    const { add } = useSimpleFormIterator();
    const translate = useTranslate() ;
    const { label } = props;
    return (
        <IconButtonWithTooltip
        label={translate("myroot.custom_ra.action.tooltip.addSalesItem")}
        size="small"
        onClick={() => add()}
        color="primary"
        variant='outlined'
        sx={{  backgroundColor: 'transparent',
            ":hover, --focusVisible":  {   backgroundColor: 'transparent', border: 'none'     },
        }}
        {...props} 
        > 
            <JoyChip startDecorator={<AddCircleIcon fontSize="small" />}	>
                {label ? label : translate('myroot.custom_ra.action.button.addSalesItem')}
            </JoyChip>
        </IconButtonWithTooltip>
    );
};
