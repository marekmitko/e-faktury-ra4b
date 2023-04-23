
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../../db/fnInvoiceForm';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


export const onSubmitModal = ({create, methods, navigate, notify}) => {
    // const {create, methods, navigate, notify} = props;

    // () => methods.setOpen(true);
    // const currentDataForm = methods.getValues();
    // const currentBuyerId= methods.getValues('buyer_id');
    // // https://react-hook-form.com/api/useform
    
    
    
    // getData buyer_id
        const currentBuyerId= methods.getValues('buyer_id');
        // hmmm... czy i jak? 
    
    return (async data => {

        await sleep(500);
        if (data.buyer_id) {


        // TRANSFORM db_buyer
            const prefix_buyer = createPrefixObjectKeys("buyer_");
            const db_buyer = prefix_buyer(data.dbBuyers);
            data.dbBuyers = "";


        // TRANSFORM products_arr
            const products_arr = transformArrayProducts(data.products);
            data.products = products_arr;

        // finnal data_form
            const output = {
                        ...data,
                        ...db_buyer,
                        // others: "others"
                    };

            console.log("🔰🔰🔰!!!!db_outputForm:", output);




            // alert(JSON.stringify(data));



            create(
                "issuedInvoices_list",
                // { output } <= pójdzie samo id
                {  data: output },
                { onSuccess: () => {
                    // const invoice_id = 
                    // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                    // const record = useRecordContext
                        navigate('/issuedInvoices_list');
                        notify('Twoja faktura została utworzona pomyślnie');
                    } }
            );















        } else {
            alert("Wprowadź Nabywcę");
        }
    });
}; 