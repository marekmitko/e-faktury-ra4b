import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/PersonAddAlt1'; 
import { ModalCreateNewClient } from '../new-simple-modal-new-client/ModalCreateNewClient';

export const ClientCreateButton = ({ version, onChange, onClick}) => {
    const [open, setOpen] = React.useState(false); // Controls modal
    // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };
    return (
        <> 
        {/* <div> */}

            <Button size="small" variant="outlined" color="secondary" aria-label="create"
                sx={{border: 'none', p: 0.7, transform: 'scale(1.3)' }} 
                onClick={handleClickOpen}
                >
                <AddIcon  />
                </Button> 
                <ModalCreateNewClient 
                // selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                />
                {/* </div> */}
                </>
                ) 
}