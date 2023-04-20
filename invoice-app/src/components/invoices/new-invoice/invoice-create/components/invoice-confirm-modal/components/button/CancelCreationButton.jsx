import * as React from 'react';
import JoyButton from '@mui/joy/Button'
import { IconButtonWithTooltip, useTranslate } from 'react-admin';
import   JoyChip from "@mui/joy/Chip";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// import EditNoteIcon from '@mui/icons-material/EditNote'; //toDo zrobić akutalizację do mui-v5


export const CancelCreationButton = (props) => (
    <IconButtonWithTooltip
        // label="ra.action.clear_array_input"
        size="small"
        // color="warning"
        {...props}
    >
        <CancelOutlinedIcon fontSize="small" />
        <JoyButton 
                variant="plain" 
                color={props.color ? `${props.color}` : ''} 
                size="md"
                startDecorator={<CancelOutlinedIcon />}
                // onClick={ () => setOpen(true) }
            >
                ANULUJ 
            </JoyButton>
    </IconButtonWithTooltip>
);

// export default null;

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
//         variant='outlined'
//         sx={{  backgroundColor: 'transparent',
//             ":hover, --focusVisible":  {   backgroundColor: 'transparent', border: 'none'     },
//         }}
//         {...props} 
//         > 
//             <JoyChip startDecorator={<AddCircleIcon fontSize="small" />}	>
//                 {label ? label : translate('myroot.custom_ra.action.button.addSalesItem')}
//             </JoyChip>
//         </IconButtonWithTooltip>
//     );
// };
