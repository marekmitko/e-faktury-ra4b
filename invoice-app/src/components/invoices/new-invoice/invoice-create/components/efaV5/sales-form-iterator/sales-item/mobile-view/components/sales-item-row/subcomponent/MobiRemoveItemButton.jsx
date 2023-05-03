import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import Box from '@mui/joy/Box';
import { Sheet } from '@mui/joy';
import { useTranslate } from 'react-admin';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import BackspaceIcon from '@mui/icons-material/Backspace';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

export default function MobiRemoveItemButton() {
    const translate = useTranslate();
    return (
        <Box sx={{ display: 'flex',  width: '100%', justifyContent: 'center' }}>
        <Tooltip
            title={translate('myroot.custom_ra.action.tooltip.removeSalesItem')}
            arrow
            color="danger"
            placement="left"
            size="sm"
            variant="outlined"
        >
            <IconButton size="sm"
                variant="plain"
                color="danger"
                sx={{ 
                    border: 'none',
                    color: 'danger.400',
                    opacity: .5,
                    backgroundColor: 'transparent',
                    "--IconButton-size": "15px",
                    ":hover, --focusVisible":  { 
                        color: 'danger.500',
                        opacity: 1,
                        backgroundColor: 'transparent', border: 'none' 
                        },
                }}
            >
                <BackspaceOutlinedIcon />
            </IconButton>
        </Tooltip> 
        </Box>
    );
}
