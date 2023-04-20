import { useState } from 'react';
import {
    Button,
    Confirm,
    useListContext,
    useUpdateMany,
} from 'react-admin';
import { useFormContext } from 'react-hook-form';
import { createPrefixObjectKeys, transformArrayProducts } from '../../../../../../db/fnInvoiceForm';

export const ConfirmButton = (props) => {
    // const { selectedIds } = useListContext();
    const methods = useFormContext();
    const [open, setOpen] = useState(false);

    // const [updateMany, { isLoading }] = useUpdateMany(
    //     'posts',
    //     { ids: selectedIds, data: { views: 0 } }
    // );


    // const onSubmit = (data) => { 
    //     const currentDataForm = methods.getValues();
    //     const currentBuyerId= methods.getValues('buyer_id');
    //     console.log('getValues: ', currentDataForm );
    //     console.log('getBuyerId: ', currentBuyerId );
    //     const productsArr = transformArrayProducts(data.products);
    //     data.products = productsArr;

    //     const prefix_buyer = createPrefixObjectKeys("buyer_");
    //     const db_buyer = prefix_buyer(data.dbBuyers);
    //     data.dbBuyers = ""
    //     data = {...data, ...db_buyer};


    //     // PRZEKSZTAŁĆ NA TO => https://marmelab.com/react-admin/useGetOne.html //*edu
    //     // to jest to co teraz robie   =>  https://marmelab.com/react-admin/useDataProvider.html
    //     // https://marmelab.com/react-admin/useGetOne.html //*edu sprawdić to!!!


    //     // const { data: db_buyerId } = myDataProvider.getOne('buyersEfaktury', { id: `${currentBuyerId}` }).then(({ data }) => {
    //     //     console.log("test_dbClient", data);
    //     //     // setUser(data);
    //     //     // setLoading(false);
    //     // });



    //     create(
    //         "issuedInvoices_list",
    //         {  data },
    //         { onSuccess: () => {
    //                 // const invoice_id = 
    //                 // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
    //                 // const refcord = useRecordContext
    //                 navigate('/issuedInvoices_list');
    //             } }
    //     );
    // };
    // // if (error) { return <p>ERROR</p>; }
    // // return <button disabled={isLoading} onClick={() =>{} }>Like</button>;

    // // if (isLoading) return null;


    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);
    const handleConfirm = () => {
        // updateMany();
        setOpen(false);
    };

    return (
        <>
            <Button label="Update Posts" onClick={handleClick} />
            <Confirm
                isOpen={open}
                // loading={isLoading}
                title="Update View Count"
                content="Are you sure you want to update these posts?"
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        </>
    );
};