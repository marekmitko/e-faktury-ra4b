import { useState } from 'react';
import {
    Button,
    Confirm,
    useListContext,
    useUpdateMany,
} from 'react-admin';
import { useFormContext } from 'react-hook-form';
import { createPrefixObjectKeys, transformArrayProducts } from '../../../../../db/fnInvoiceForm';

export const ConfirmCreateButton = (props) => {
    // const { selectedIds } = useListContext();
    const methods = useFormContext();
    const [open, setOpen] = useState(false);

    const { preSubmitOn } = {...props};
    // console.log("preSubmit", preSubmitOn);

    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        // updateMany();
        setOpen(false);
    };








    return (
        <>
            <Button label="UTWÓRZ" onClick={handleClick} />
            <Confirm
                confirm="Wystaw"
                isOpen={open}
                // loading={isLoading}
                title={<h4>Co tam </h4>}
                content={<p>Tresc </p>}
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </>
    );
};






//  PROPS
// className,
// isOpen = false,
// loading,
// title,
// content,
// cancel = 'ra.action.cancel',
// confirm = 'ra.action.confirm',
// confirmColor = 'primary',
// ConfirmIcon = ActionCheck,
// CancelIcon = AlertError,
// onClose,
// onConfirm,
// translateOptions = {},
// ...rest

