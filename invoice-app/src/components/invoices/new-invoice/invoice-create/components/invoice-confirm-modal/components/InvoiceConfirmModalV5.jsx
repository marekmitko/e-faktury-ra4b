import * as React from 'react';
import Box from '@mui/joy/Box';
import JoyButton from '@mui/joy/Button';
import JoyModal from '@mui/joy/Modal';
import JoyModalClose from '@mui/joy/ModalClose';
import JoyTypography from '@mui/joy/Typography';
import JoySheet from '@mui/joy/Sheet';
import JoyCard from '@mui/joy/Card';
import { useFormContext, useForm } from 'react-hook-form';
// import { transformArrayProducts, createPrefixObjectKeys } from '../../../../../../db/fnInvoiceForm';
// import MyButton from '@mui/material/Button';
import { useCreate, useNotify, useNotifyIsFormInvalid, useRedirect, useTranslate } from 'react-admin';
import BuyerModalShow from './bin/BuyerModalShow';
import MuiButton from '@mui/material/Button';
import PaymentModalShow from './bin/PaymentModalShow';
import JoyModalDialog from '@mui/joy/ModalDialog';
import { ModalTitle } from './subcomponents/ModalTitle';
import Divider from '@mui/joy/Divider';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import BuyerInfoShow from './subcomponents/BuyerInfoShow';
import {SalesTableInfoShow} from './subcomponents/SalesTableInfoShow';
import TotalSalesInfoShow from './subcomponents/TotalSalesInfoShow';
import PaymentInfoShow from './subcomponents/PaymentInfoShow';
import { ModalToolbar } from './subcomponents/ModalToolbar';
import ActionCheck from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router';
import { setTotalSumNetValue, setTotalSum } from '../../../invoice-form/subcomponents/sales-table/spanning-sales-table/total-sum-table/CalcTotalSumV5';
// Om - for optimization control
// import { setTotalSumNetValue, setTotalSum } from '../../../invoice-form/subcomponents/sales-table/spanning-sales-table/total-sum-table/CalcTotalSum';
import { createPrefixObjectKeys, transformArrayProducts } from '../../../../../../../db/fnInvoiceForm';
import { CreateInvoiceButton } from './button/CreateInvoiceButton';
import { CreateInvoiceButtonV4 } from './button/CreateInvoiceButtonV4';
import { SvgIcon } from '@mui/joy';
const prefixObjectUser = createPrefixObjectKeys('buyer_');

export default function InvoiceConfirmModalV5(props) {
    const {  ConfirmIcon = ActionCheck } = props; 
    const { getValues } = useFormContext();
    const translate = useTranslate();

    const [isModalVisible, setModalVisible] = React.useState(false);
    
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
    
    const dataForm = getValues();
    const myData = {...dataForm, };
    console.log("myData💎", {...myData});

    const buyerCompany = myData.dataBuyer ? myData.dataBuyer.company : "" ;
    const buyerOrgNo = myData.dataBuyer ? myData.dataBuyer.org_nr : "";
    const productsArr = transformArrayProducts(dataForm.products);

    const notify = useNotify();
    // const notify = useNotifyIsFormInvalid();
    const redirect = useRedirect();
    const navigate = useNavigate();
    const [create, { isLoading, error }] = useCreate();
    
    const handleIssueConfirmedInvoice  = () => {
        //Om  /Om? w sumie to powinno być zrobione wcześniej
        // toDo -> przerzucić to do tego inputa na przykład //Om? ten btn jest w linii 121 CreateInvoiceButtonV4
        const dataBuerTransform = dataForm?.dataBuyer ? prefixObjectUser(dataForm.dataBuyer) : { } ;
        const output = {
            ...myData,
            ...dataBuerTransform
        };
        delete output["dataBuyer"];     //Om? Czy to jest dobre - pierwszy raz się spotkałem 
        delete output["preInvoiceId"];

        create(
            'issuedInvoices_list', 
            { data: output },
            { onSuccess: () => {
                // const invoice_id = 
                // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                // const record = useRecordContext
                navigate('/issuedInvoices_list');
                notify('Twoja faktura została utworzona pomyślnie'); // Om? tu ma byc ten srednik? 
            } }
        ); // Om? tu ma byc ten srednik? 
    }
    if (error) { return <p>ERROR</p>; }

    // Om? useCallback - opakowanie zmiennych 
    //*edu //toDo po cholere jest ten Callback i czy nie powinienem tutaj wszystkich zmiennych do tego opakować 
    const totalNetCost = setTotalSumNetValue(myData.products);
    const totalGrossCost = setTotalSum(dataForm.products);

    return(  
        <>
            <JoyButton 
                variant="plain" 
                color="primary" 
                startDecorator={<NoteAddIcon />}
                onClick={showModal}
            >
                {translate('myroot.form.label.button.invoiceConfirmModal.createInvoice')} 
            </JoyButton>
            <CreateInvoiceButtonV4  onClick={() => ( showModal() )  } />   {/* //Om? toDo server connection & data transform  */}
            <JoyModal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                // open={open}
                open={isModalVisible}
                // onClose={() => setOpen(false)}
                onClose={hideModal}
                sx={{ display: 'flex', justifyContent: 'center',     alignItems: 'center', }}
            >
                <JoySheet
                    // variant="solid"
                    sx={{
                        maxWidth: 500,
                        minWidth: '80%',
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        backgroundColor: 'transparent'
        
                    }}
                >
                <JoyModalDialog
                        variant="outlined"
                        role="alertdialog"
                        aria-labelledby="alert-dialog-modal-title"
                        aria-describedby="alert-dialog-modal-description"
                        >

                    <JoyModalClose
                        variant="plain" color="danger"
                        sx={{
                            // top: 'calc(-1/4 * var(--IconButton-size))',
                            // right: 'calc(-1/4 * var(--IconButton-size))',
                            // boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.1)',
                            borderRadius: '50%',
                            bgcolor: 'background.body',
                            // color: 'red'
                        }}
                    />
                    <ModalTitle title={translate('myroot.form.label.header.newInvoice')} 
                                prefixInovoiceNo={translate('myroot.form.label.header.prefixInovoiceNo')} 
                                invoiceNo={myData.preInvoiceId}
                    
                    />
                    <Divider   sx={{ p: 0.1 }} />
                    <BuyerInfoShow buyerName={buyerCompany} taxpayerId={buyerOrgNo} 
                        labelTaxpayerId={translate('myroot.form.invoiceConfirmModal.buyerInfoShow.labelTaxpayerId')} 
                    
                    />
                    <SalesTableInfoShow rows={productsArr}  />
                    <Divider   sx={{ p: 0.08, mb: 1, ml: '45%', mr: 0.05 }} />
                    <div style={{ width: "100%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Box sx={{  minWidth: '250px' }}>
                                <PaymentInfoShow totalGross={totalGrossCost}  totalNet={totalNetCost} />
                            </Box>
                        </Box>
                        <br/>
                    </div>
                    {/* <Divider   sx={{ p: 0.1 }}  />  //<...> zajebiście tu se dołoże ten formularz dodatkowy 
                    <ModalToolbar /> */}
                    <Divider   sx={{ p: 0.1 }}  />
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', pt: 2, mb: -1}}>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start', p: 0, m: 0 }}>
                        <JoyButton 
                            variant="solid" 
                            startDecorator={<SvgIcon fontSize="md" ><ConfirmIcon />  </SvgIcon> }
                            // type="submit" form="new-invoice-form" // Om? toDo nie wiem czy mi to potrzebne 
                            onClick={handleIssueConfirmedInvoice}
                            sx={{ textTransform: 'uppercase', backgroundColor: "primary.900" }}
                        >
                            {translate('myroot.form.label.button.invoiceConfirmModal.issueConfirmedInvoice')} 
                        </JoyButton>
                        <Divider   orientation="vertical"  sx={{ mx: 1, px: .05 }} />
                        <JoyButton 
                            // onClick={handleIssueConfirmedInvoice}
                            variant="plain" //color="primary.800" 
                            // startDecorator={<NoteAddIcon />}
                            // onClick={hideModal}
                            type="button" // Om? toDo tu był problem
                            form="new-invoice-form"
                            startDecorator={<SvgIcon fontSize="md" ><ConfirmIcon />  </SvgIcon> }
                            sx={{ textTransform: 'uppercase', color: "primary.900"  }}
                            >
                            {translate('myroot.form.label.button.invoiceConfirmModal.issueConfirmedInvoiceAndAddNew')} 
                        </JoyButton>
                            </Box>
                        <JoyButton variant="plain" color="danger"   sx={{ textTransform: 'uppercase' }}
                                onClick={hideModal}  
                        >
                            {translate('myroot.form.label.button.invoiceConfirmModal.cancelIssueInvoice')} 
                        </JoyButton>
                    </Box>
                    </JoyModalDialog>
                </JoySheet> 
            </JoyModal>
        </>
    );
}
