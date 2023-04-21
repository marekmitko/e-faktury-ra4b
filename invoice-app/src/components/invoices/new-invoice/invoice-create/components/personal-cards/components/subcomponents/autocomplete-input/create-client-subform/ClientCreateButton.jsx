import React from 'react';
import { Button } from '@mui/joy';
import AddIcon from '@mui/icons-material/PersonAddAlt1'; 
import { ModalCreateNewClient } from '../../../subcomponents/new-simple-modal-new-client/ModalCreateNewClient';

// export const ClientCreateButton = (props: any) => {
export const ClientCreateButton = (props) => {
    const { version, onChange, onClick } = props;
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

            <Button size="small" aria-label="create"
                variant="plain"   
                sx={{ 
                    border: 'none',  transform: 'scale(1.3)',
                    color: 'primary.800'
                }} 
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