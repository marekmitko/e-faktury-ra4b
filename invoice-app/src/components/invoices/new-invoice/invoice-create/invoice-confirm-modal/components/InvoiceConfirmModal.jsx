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
import { useRedirect } from 'react-admin';
import BuyerModalShow from '../components/bin/BuyerModalShow';
import MuiButton from '@mui/material/Button';
import PaymentModalShow from '../components/bin/PaymentModalShow';
import JoyModalDialog from '@mui/joy/ModalDialog';
import { ModalTitle } from './subcomponents/ModalTitle';
import Divider from '@mui/joy/Divider';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import BuyerInfoShow from './subcomponents/BuyerInfoShow';
import {SalesTableInfoShow} from './subcomponents/SalesTableInfoShow';
import TotalSalesInfoShow from './subcomponents/TotalSalesInfoShow';
import PaymentInfoShow from './subcomponents/PaymentInfoShow';
import { transformArrayProducts } from '../../../../../../db/fnInvoiceForm';
import { setTotalSumNetValue, setTotalSum} from '../../invoice-form/subcomponents/sales-table/spanning-sales-table/total-sum-table/CalcTotalSum';
import { ModalToolbar } from './subcomponents/ModalToolbar';
import ActionCheck from '@mui/icons-material/CheckCircle';


export default function InvoiceConfirmModal(props) {
    const { children, open, setOpen, create, navigate, methods, 
        ConfirmIcon = ActionCheck,
        // ...rest 
    } = props;

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


//  MY TEST MODAL RHF


    const dataForm = methods.getValues();
    const buyerCompany = dataForm.dbBuyers ? dataForm.dbBuyers.company : "" ;
    const buyerOrgNo = dataForm.dbBuyers ? dataForm.dbBuyers.org_nr : "";
    const productsArr = transformArrayProducts(dataForm.products);
    console.info('🆕🐱‍🏍getValues', dataForm);
    console.info('🆕🐱‍🏍transformArrayProducts', productsArr);

    const totalNetCost = setTotalSumNetValue(dataForm.products);
    const totalGrossCost = setTotalSum(dataForm.products);

    return(  
        <>
            <hr />
            <span>
                    <>
            {/* Will trigger a submit because default button type is "submit" */}

                <button className="button" onClick={showModal}   >
                    Open Nested Form (Error) (btnSubmit)
                </button>
                <button type="button" className="button" onClick={showModal}>
                    Open Nested Form (No Error) (btnBtn)
                </button>
                {/* {isModalVisible && ( */}
                    <ModalForm onSave={forwardChange} onClose={hideModal} />
            {/* )} */}
            </>
            </span>
            <hr />



            <JoyButton 
                variant="plain" 
                color="primary" 
                startDecorator={<NoteAddIcon />}
                onClick={ () => setOpen(true) }
            >
                Utwórz
            </JoyButton>
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
                    <hr/>
                    <hr/>
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
                        </form>
                    </div>
                    <hr/>
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
                    <hr/>
                    <ModalForm onSave={forwardChange} onClose={hideModal} />
                    <hr/>
                    </div>
                    <Divider   sx={{ p: 0.1 }}  />
                    {/* <ModalToolbar /> */}
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start', pt: 2, mb: -1}}>
                        <JoyButton variant="plain" color="primary" onClick={() => setOpen(false)}>
                            Wystaw
                        </JoyButton>
                        <MuiButton
                            // disabled={loading}
                            // onClick={handleConfirm}
                            type="submit" form="new-invoice-form"
                            // onClick={() => setOpen(false)}
                            autoFocus
                            startIcon={<ConfirmIcon />}
                >Wystaw
                    {/* {translate(confirm, { _: confirm })} */}
                    </MuiButton>

                        <button type="submit" form="new-invoice-form">Submit LALLA</button>
                        <Divider   orientation="vertical"  sx={{ mx: 5 }} />
                        {/* <JoyButton variant="plain" color="danger" onClick={() => setOpen(false)}> */}
                        <JoyButton variant="plain" color="danger" onClick={hideModal}>
                            Anuluj
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
  
    const forwardSave = (data) => {
      console.info("🅿💖💖💎🅿🛄Submit ModalForm", data);
      props.onSave(data);
    };
  
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
  
  const modalDiv = document.getElementById("modals");
  
  const ModalPortal = (props) => {
    // /**
    //  * Issue #2: Cannot nest forms directly in DOM
    //  * https://html.spec.whatwg.org/multipage/forms.html#the-form-element
    //  * This is a basic html spec, the fix is using portals to unest Modals
    //  * https://reactjs.org/docs/portals.html
    //  */
    return(createPortal(props.children, modalDiv));
  };
  