import * as React from 'react';
import { createPortal } from 'react-dom';
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
import { setTotalSumNetValue, setTotalSum } from '../../../invoice-form/subcomponents/sales-table/spanning-sales-table/total-sum-table/CalcTotalSum';
import { createPrefixObjectKeys, transformArrayProducts } from '../../../../../../../db/fnInvoiceForm';
import { CreateInvoiceButton } from './button/CreateInvoiceButton';
import { CreateInvoiceButtonV4 } from './button/CreateInvoiceButtonV4';
import { SvgIcon } from '@mui/joy';
const prefixObjectUser = createPrefixObjectKeys('buyer_');

export default function InvoiceConfirmModalV4(props) {
    const { children, open, setOpen, // create, navigate,
        methods,
        ConfirmIcon = ActionCheck,
        // ...rest 
    } = props; 


    const translate = useTranslate();

//  MY TEST MODAL RHF
    
    const [isModalVisible, setModalVisible] = React.useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
  
        const forwardChange = (data) => {
            hideModal();
            props.onChange(data);
        };

        const { register, handleSubmit } = useForm();
    
        const forwardSave = (data) => {
            console.info("🅿💖💖💎🅿🛄Submit ModalForm", data);
            props.onSave(data);
        };
        
        const handleSubmitWithoutPropagation = (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit(forwardSave)(e);
            hideModal();
        };

        //  END MY TEST MODAL RHF

        
        
    const dataForm = methods.getValues();
    const buyerCompany = dataForm.dbBuyers ? dataForm.dbBuyers.company : "" ;
    const buyerOrgNo = dataForm.dbBuyers ? dataForm.dbBuyers.org_nr : "";
    const productsArr = transformArrayProducts(dataForm.products);
    // console.info('🆕🐱‍🏍getValues', dataForm);
    // console.info('🆕🐱‍🏍dbBuyers', dataForm.dbBuyers);
    // console.info('🆕🐱‍🏍transformArrayProducts', productsArr);
    
    
    // const dataBuerTransform = dataForm?.dataBuyer ? prefixObjectUser(dataForm.dataBuyer) : { } ;

    // console.log("🆕🐱‍🏍dbBuyers'", typeof(dataBuerTransform), dataBuerTransform );
    
    // CREATE My test ButtonCreate handleIssueConfirmedInvoice
    

    const notify = useNotify();

    // const notify = useNotifyIsFormInvalid();
    
    const redirect = useRedirect();
    const navigate = useNavigate();
    const [create, { isLoading, error }] = useCreate();
    
    const myData = {...dataForm, };
    
    const handleIssueConfirmedInvoice  = () => {
        const dataBuerTransform = dataForm?.dataBuyer ? prefixObjectUser(dataForm.dataBuyer) : { } ;
        const output = {
            ...myData,
            ...dataBuerTransform
        };
        delete output["dataBuyer"];
        delete output["preInvoiceId"];

        console.log('💠 💠✅🐱‍🏍Finally output', output );
        create(
            'issuedInvoices_list', 
            { data: output },
            { onSuccess: () => {
                // const invoice_id = 
                // https://codesandbox.io/s/react-admin-v3-advanced-recipes-quick-createpreview-voyci?file=/src/posts/AddCommentButton.js:36-40
                // const record = useRecordContext
                navigate('/issuedInvoices_list');
                notify('Twoja faktura została utworzona pomyślnie');
            } }
        ); // Om? tu ma byc ten srednik? 
    }
    if (error) { return <p>ERROR</p>; }
    
    
    const dataLog = () => {
        // console.log('💠💠💠✅🐱‍🏍Finally myData',   myData  );
        // console.log('💠💠💠✅🐱‍🏍Products',  myProducts  );

    } 

    // return <button disabled={isLoading} onClick={handleClick}>Like</button>;
    
    //  END My test ButtonCreate handleIssueConfirmedInvoice

    const totalNetCost = setTotalSumNetValue(dataForm.products);
    const totalGrossCost = setTotalSum(dataForm.products);
    return(  
        <>
            <JoyButton 
                variant="plain" 
                color="primary" 
                startDecorator={<NoteAddIcon />}
                // onClick={ () => setOpen(true) }
                onClick={showModal}
            >
                Utwórz
            </JoyButton>
            <CreateInvoiceButtonV4  onClick={() => ( showModal() )  } />
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
                    <div className="modal_content">
                        <form onSubmit={handleSubmitWithoutPropagation}>
                        <input
                            {...register("modalInputValue")}
                            placeholder="Modal Input Value"
                        />
                        <input type="submit" />
                        {/* <button type="button" className="button" onClick={props.onClose}> */}
                        <button type="button" className="button" onClick={hideModal}>
                            Close modal
                        </button>
                        <button type='button'
                            onClick={dataLog}
                        >
                            Issue
                        </button>
                        </form>
                    </div>
                    <ModalTitle title={"Nowa Faktura"} />
                    <Divider   sx={{ p: 0.1 }} />
                    <BuyerInfoShow buyerName={buyerCompany} taxpayerId={buyerOrgNo}/>
                    <SalesTableInfoShow rows={productsArr}  />
                    <Divider   sx={{ p: 0.08, mb: 1, ml: '45%', mr: 0.05 }} />


                    <div style={{ width: "100%" }}>
                        <Box
                            sx={{
                                display: "grid",
                                gridAutoColumns: "2fr",
                                gap: 1
                            }}
                        >
                            <Box sx={{ gridRow: "1", gridColumn: "3 / 5" }}>
                                <PaymentInfoShow totalGross={totalGrossCost}  totalNet={totalNetCost} />
                            </Box>
                            <Box sx={{ gridRow: "1", gridColumn: "auto" }}>
                                {/* <TotalSalesInfoShow  /> */}
                            </Box>
                        </Box>
                        <br/>
                    </div>
                    <Divider   sx={{ p: 0.1 }}  />
                    {/* <ModalToolbar /> */}
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start', pt: 2, mb: -1}}>
                        <JoyButton 
                            variant="solid" 
                            startDecorator={<SvgIcon fontSize="md" ><ConfirmIcon />  </SvgIcon> }
                            color="primary" 
                            // type="submit" form="new-invoice-form" // Om? toDo nie wiem czy mi to potrzebne 
                            onClick={handleIssueConfirmedInvoice}
                            sx={{ textTransform: 'uppercase' }}
                        >
                            {translate('myroot.form.label.button.invoiceConfirmModal.issueConfirmedInvoice')} 
                        </JoyButton>
                        <JoyButton 
                            variant="plain" color="primary" 
                            // startDecorator={<NoteAddIcon />}
                            // onClick={hideModal}
                            type="button" // Om? toDo tu był problem
                            form="new-invoice-form"
                            // onClick={handleIssueConfirmedInvoice}
                            startDecorator={<SvgIcon fontSize="md" ><ConfirmIcon />  </SvgIcon> }
                            sx={{ textTransform: 'uppercase' }}
                        >
                            {translate('myroot.form.label.button.invoiceConfirmModal.issueConfirmedInvoiceAndAddNew')} 
                        </JoyButton>
                        <Divider   orientation="vertical"  sx={{ mx: 5 }} />
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



















const ModalForm = (props) => {
    const { register, handleSubmit } = useForm();
  
    /**
     * Issue #3: Submit event still propagates to parent when using portal
     * https://reactjs.org/docs/portals.html#event-bubbling-through-portals
     * Event bubbling goes through React DOM instead of HTML DOM
     * Portals don't have an effect on this one, we need to stop event propagation
     * This should be our default form handling method
     */
  
    /**
     * Problem nr 3: Zdarzenie przesyłania nadal jest propagowane do elementu nadrzędnego podczas korzystania z portalu
     * https://reactjs.org/docs/portals.html#event-bubbling-through-portals
     * Bąbelkowanie zdarzeń przechodzi przez React DOM zamiast HTML DOM
     * Portale nie mają na to wpływu, musimy zatrzymać propagację zdarzeń
     * To powinna być nasza domyślna metoda obsługi formularzy
     */
  
    const forwardSave = () => { };
    // const forwardSave = (data) => {
    // //   console.info("🅿💖💖💎🅿🛄Submit ModalForm", data);
    // //   props.onSave(data);
    // };
  
    const handleSubmitWithoutPropagation = (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(forwardSave)(e);
    };
  
    return (
      <ModalPortal>
        <div className="modal">
          <div className="modal_content">
            <form onSubmit={handleSubmitWithoutPropagation}>
              <input
                {...register("modalInputValue")}
                placeholder="Modal Input Value"
              />
              <input type="submit" />
              {/* <button type="button" className="button" onClick={props.onClose}> */}
              <button type="button" className="button" onClick={props.onClose}>
                Close modal
              </button>
            </form>
          </div>
        </div>
      </ModalPortal>
    );
  };
  
  /**
   * Issue #2: Cannot nest forms directly in DOM
   * https://html.spec.whatwg.org/multipage/forms.html#the-form-element
   * This is a basic html spec, the fix is using portals to unest Modals
   * https://reactjs.org/docs/portals.html
   */
  const modalDiv = document.getElementById("modals");
  
  const ModalPortal = (props) => {
    /**
     * Issue #2: Cannot nest forms directly in DOM
     * https://html.spec.whatwg.org/multipage/forms.html#the-form-element
     * This is a basic html spec, the fix is using portals to unest Modals
     * https://reactjs.org/docs/portals.html
     */
    return createPortal(props.children, modalDiv);
  };
  