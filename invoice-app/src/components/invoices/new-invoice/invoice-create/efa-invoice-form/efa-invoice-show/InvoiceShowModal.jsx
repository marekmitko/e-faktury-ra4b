import * as React from 'react';
import JoyButton from '@mui/joy/Button';
import JoyModal from '@mui/joy/Modal';
import JoyModalClose from '@mui/joy/ModalClose';
import JoyTypography from '@mui/joy/Typography';
import JoySheet from '@mui/joy/Sheet';
import JoyCard from '@mui/joy/Card';
import { useFormContext } from 'react-hook-form';
import { transformArrayProducts, createPrefixObjectKeys } from '../../../../../../db/fnInvoiceForm';
import MyButton from '@mui/material/Button';
import { useRedirect } from 'react-admin';
import BuyerModalShow from '../../invoice-confirm-modal/components/BuyerModalShow';
import { Grid } from '@mui/material';
import PaymentModalShow from '../../invoice-confirm-modal/components/PaymentModalShow';



export default function InvoiceShowModal({ children, open, setOpen, create, navigate}) {

const methods = useFormContext();
const dataForm = methods.getValues();
console.info("DATA_Form:", dataForm);



const redirect = useRedirect();

const onSubmit = (data) => { 
    const currentDataForm = methods.getValues();
    const currentBuyerId= methods.getValues('buyer_id');
    console.log('getValues: ', currentDataForm );
    console.log('getBuyerId: ', currentBuyerId );
    const productsArr = transformArrayProducts(data.products);
    data.products = productsArr;

    const prefix_buyer = createPrefixObjectKeys("buyer_");
    const db_buyer = prefix_buyer(data.dbBuyers);
    data.dbBuyers = ""
    data = {...data, ...db_buyer};


    // PRZEKSZTAŁĆ NA TO => https://marmelab.com/react-admin/useGetOne.html //*edu
    // to jest to co teraz robie   =>  https://marmelab.com/react-admin/useDataProvider.html
    // https://marmelab.com/react-admin/useGetOne.html //*edu sprawdić to!!!


    // const { data: db_buyerId } = myDataProvider.getOne('buyersEfaktury', { id: `${currentBuyerId}` }).then(({ data }) => {
    //     console.log("test_dbClient", data);
    //     // setUser(data);
    //     // setLoading(false);
    // });



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
// if (error) { return <p>ERROR</p>; }
// return <button disabled={isLoading} onClick={() =>{} }>Like</button>;

// if (isLoading) return null;








return (
   
<React.Fragment>


        <JoyButton variant="outlined" color="neutral" onClick={() => {setOpen(true); console.log( dataForm ); } }>
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
                // minWidth: '80%',
                borderRadius: 'md',
                p: 3,
                // boxShadow: 'lg',

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
            <JoyCard variant="standard" sx={{ bgcolor: '#0ff', marginBottom: '5px', p: 1, mr: 5}} >
            <JoyTypography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                fontWeight="lg"
                mb={1}
            >
                Faktura dla:  {dataForm.buyer_order_no} Jan Kowaliski
                <br/>
                <small>MVA: 451381816153 | adres: ul. Coś tam </small>
            </JoyTypography>
            </JoyCard>
            <JoyCard variant="outlined" sx={{ bgcolor: '#fff'}} >
                    {/* <PaymentModalShow /> */}
                    <BuyerModalShow />
                    <PaymentModalShow />
          
            <JoyTypography id="modal-desc" textColor="text.tertiary">
                {dataForm.user_company}{" "}  {dataForm.buyer_company}<br/>
                {dataForm.user_ref}{" "}  {dataForm.buyer_ref}<br/>
                
                <hr/>
                {dataForm.products? dataForm.products.map( (item, index, arr) => {
                    console.log("lenght", dataForm.products.length );
                    if(dataForm.products.length  === (index+1 )) return (<p>koniec</p>);
                    return( 
                    <div> <span> {item[`_${index}_product_name`]} {" | "} {item[`_${index}_product_count`]} </span></div>
                    )
                }

                ) : null
                }

            </JoyTypography>
            <div>
        <MyButton type="submit">
                    Wystaw
        </MyButton>  
        </div>
            </JoyCard>
                {children ? children : null }
            </JoySheet>
        </JoyModal>
        </React.Fragment>
    );
}