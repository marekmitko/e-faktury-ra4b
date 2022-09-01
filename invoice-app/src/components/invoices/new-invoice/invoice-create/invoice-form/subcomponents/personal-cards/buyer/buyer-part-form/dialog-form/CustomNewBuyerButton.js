import { useState } from 'react';
import {
    Button,
    Confirm,
    useListContext,
    useUpdateMany,
    TextInput,
    SimpleForm,
} from 'react-admin';

const CustomNewBuyerButton = () => {
    const { selectedIds } = useListContext();
    const [open, setOpen] = useState(false);

    const [updateMany, { isLoading }] = useUpdateMany(
        'buyers',
        { ids: selectedIds, data: { views: 0 } }
    );

    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        updateMany();
        setOpen(false);
    };

    return (
        <>
            <Button label="Update Posts" onClick={handleClick} />
            <Confirm
                isOpen={open}
                loading={isLoading}
                title="Update View Count"
                content="Are you sure you want to update these posts?"
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            >
            </Confirm>
                <input/> 
                <SimpleForm >

                <TextInput label="MVA Number"  source="orgId.orgNumber" fullWidth />
                </SimpleForm>
        </>
    );
};

export default CustomNewBuyerButton;