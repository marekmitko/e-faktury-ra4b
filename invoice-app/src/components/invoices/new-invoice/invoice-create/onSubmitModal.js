
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../db/fnInvoiceForm';

const methods = ()=>{};
const myDataProvider = ()=>{};
const create = ()=>{};
const navigate = ()=>{};

const onSubmit =  (data) => { 
    // https://react-hook-form.com/api/useform
    // const output = {
    //     ...data,
    //     others: "others"
    //   }
    const currentDataForm = methods.getValues();
    const currentBuyerId= methods.getValues('buyer_id');
    
    const productsArr = transformArrayProducts(data.products);
    data.products = productsArr;

    const prefix_buyer = createPrefixObjectKeys("buyer_");
    const db_buyer = prefix_buyer(data.dbBuyers);
    data.dbBuyers = ""
    data = {...data, ...db_buyer};
    console.log("fullDATA:", data);
    

    // PRZEKSZTAŁĆ NA TO => https://marmelab.com/react-admin/useGetOne.html //*edu
    // to jest to co teraz robie   =>  https://marmelab.com/react-admin/useDataProvider.html
    // https://marmelab.com/react-admin/useGetOne.html //*edu sprawdić to!!!


    const { data: db_buyerId } = myDataProvider.getOne('buyersEfaktury', { id: `${currentBuyerId}` }).then(({ data }) => {
        console.log("test_dbClient", data);
        // setUser(data);
        // setLoading(false);
    });

    create(
        "issuedInvoices_list",
        {  data },
        { onSuccess: () => {
                // const invoice_id = 
                // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                // const refcord = useRecordContext
                navigate('/issuedInvoices_list');
            } }
    );
};











const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const onSubmitModal = (methodsForm, record) => {
    const currentDataForm = methodsForm.getValues();
    console.log("methodsGetValues", currentDataForm);
    console.log("record", record);

    return (async data => {
        console.log('dataForm',data);
        await sleep(500);
        if (data.buyer_id) {
            console.log('DATA RECORD:', data);
            alert(JSON.stringify(data));

        } else {
            alert("Wprowadź Nabywcę");
        }
    });
}; 