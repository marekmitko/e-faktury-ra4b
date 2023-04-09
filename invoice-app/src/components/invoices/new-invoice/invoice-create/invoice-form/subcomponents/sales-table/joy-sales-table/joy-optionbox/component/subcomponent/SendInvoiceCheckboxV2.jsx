import * as React from 'react';
import Box from '@mui/joy/Box';
import JoyList from '@mui/joy/List';
import JoyListItem from '@mui/joy/ListItem';
import JoyListDivider from '@mui/joy/ListDivider';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
// import Switch, { switchClasses } from '@mui/joy/Switch';
import { useTranslate } from 'react-admin';
import Apartment from "@mui/icons-material/Apartment";
// import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
// import PaymentIcon from "@mui/icons-material/Payments";
// import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
// import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
// import Flight from '@mui/icons-material/Flight';
import JoyListItemContent from '@mui/joy/ListItemContent';
import JoyListItemDecorator from '@mui/joy/ListItemDecorator'
import CustomJoySheet, { sheetClasses } from '@mui/joy/Sheet'
import JoyCheckbox from '@mui/joy/Checkbox';
import Close from '@mui/icons-material/Close';
import { useFormContext } from 'react-hook-form';

function IconsCheckbox({label, nameCheck}) {
    const { register } = useFormContext();
    // const { onChange, onBlur, name, ref } = register(`${nameCheck}`);
    const registerInput = register(`${nameCheck}`);
    return (
        <JoyCheckbox 
            sx={{ flexDirection: "row-reverse", gap: 1.5 }}
            label={label} 
            uncheckedIcon={<Close />}
            onChange={registerInput.onChange}
            ref={registerInput.ref}
            name={registerInput.name}

        />
    );
};


export default function SendInvoiceCheckboxV2( ) {
    const translate = useTranslate();

    return (
        <Box sx={{ minWidth: 240 }}>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >
        </Box>
        <JoyList 
            component="div"
            variant="solid"
            // row={row}
            sx={{
            borderRadius: 'sm',
            boxShadow: 'sm',
            bgcolor: 'background.body',
            
            }}
            

            // sx={{
            //     [`& .${sheetClasses.root}`]: {
            //       p: 0.5,
            //       lineHeight: 0,
            //       borderRadius: 'sm',
            //     },
            //   }}
        >
                <JoyListItem>
                    <JoyListItemDecorator>
                        <CustomJoySheet color="primary">
                            <Apartment />
                        </CustomJoySheet>
                    </JoyListItemDecorator>
                    <JoyListItemContent htmlFor="postmail" component="label">
                        <IconsCheckbox 
                            nameCheck="postmail"
                            label={translate('myroot.form.label.checkbox.postmail')}
                            // onChange={postmail.register.onChange = (event) => handleChangePostmail(event) }
                            // checked={checkedPostmail}
                        />
                    </JoyListItemContent>
                </JoyListItem>
                {/* <JoyListDivider inset="startContent" /> */}
                <JoyListItem>
                    <JoyListItemDecorator>
                        <CustomJoySheet color="primary"  >
                            <ForwardToInboxIcon />
                        </CustomJoySheet>
                    </JoyListItemDecorator>
                    <JoyListItemContent htmlFor="inv_email" component="label">
                        <IconsCheckbox 
                            nameCheck="inv_email"
                            // { ...register('inv_email')  }
                            label={translate('myroot.form.label.checkbox.inv_email')}
                            // onChange={handleChangeSendEmail}    
                            // checked={checkedSendEmail} 
                        />
                    </JoyListItemContent>
                </JoyListItem>
            </JoyList>
        </Box>
    );
}










{/* 

            <Switch
                id="airplane-mode"
                size="lg"
                color="success"
                sx={(theme) => ({
                '--Switch-thumb-shadow': '0 3px 7px 0 rgba(0 0 0 / 0.12)',
                '--Switch-thumb-size': '27px',
                '--Switch-track-width': '51px',
                '--Switch-track-height': '31px',
                '--Switch-track-background': theme.vars.palette.background.level3,
                [`& .${switchClasses.thumb}`]: {
                    transition: 'width 0.2s, left 0.2s',
                },
                '&:hover': {
                    '--Switch-track-background':
                    theme.vars.palette.background.level3,
                },
                '&:active': {
                    '--Switch-thumb-width': '32px',
                },
                [`&.${switchClasses.checked}`]: {
                    '--Switch-track-background': 'rgb(48 209 88)',
                    '&:hover': {
                    '--Switch-track-background': 'rgb(48 209 88)',
                    },
                },
                })}
            /> */}