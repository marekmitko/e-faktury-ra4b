import * as React from 'react';
import JoyButton from '@mui/joy/Button';
import JoyModal from '@mui/joy/Modal';
import JoyModalClose from '@mui/joy/ModalClose';
import JoyTypography from '@mui/joy/Typography';
import JoySheet from '@mui/joy/Sheet';
import JoyCard from '@mui/joy/Card';
import { useFormContext } from 'react-hook-form';

export default function InvoiceShowModal({ children }) {
const [open, setOpen] = React.useState(false);
const myMethods = useFormContext();
const dataForm = myMethods.getValues();
console.log(dataForm);
return (
        <React.Fragment>
        <JoyButton variant="outlined" color="neutral" onClick={() => setOpen(true) && console.log(...dataForm)}>
            Utwórz
        </JoyButton>
        <JoyModal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <JoySheet
            variant="solid"
            sx={{
                maxWidth: 500,
                borderRadius: 'md',
                p: 3,
                boxShadow: 'lg',

            }}
            >
            <JoyModalClose
                variant="outlined"
                sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                bgcolor: 'background.body',
                }}
            />
            <JoyCard variant="standard" sx={{ bgcolor: '#0ff', marginBottom: '5px', p: 1 }} >
            <JoyTypography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}
            >
                Faktura nr: ....         Odbiorca: .... 
            </JoyTypography>
            </JoyCard>

            <JoyCard variant="outlined" sx={{ bgcolor: '#fff'}} >
            <JoyTypography id="modal-desc" textColor="text.tertiary">
                Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                optional <code>aria-describedby</code> attribute.
            </JoyTypography>
            </JoyCard>
                {children ? children : null }
            </JoySheet>
        </JoyModal>
        </React.Fragment>
    );
}