import * as React from 'react';
import Box from '@mui/joy/Box';
import JoyButton from '@mui/joy/Button';
import JoyModal from '@mui/joy/Modal';
import JoyModalClose from '@mui/joy/ModalClose';
import JoyTypography from '@mui/joy/Typography';
import JoySheet from '@mui/joy/Sheet';
import JoyCard from '@mui/joy/Card';
import { useFormContext } from 'react-hook-form';
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

    const dataForm = methods.getValues();
    const buyerCompany = dataForm.dbBuyers ? dataForm.dbBuyers.company : "" ;
    const buyerOrgNo = dataForm.dbBuyers ? dataForm.dbBuyers.org_nr : "";
    const productsArr = transformArrayProducts(dataForm.products);
    console.log('dataForm', dataForm);

    const totalNetCost = setTotalSumNetValue(dataForm.products);
    const totalGrossCost = setTotalSum(dataForm.products);

    return(  
        <>
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
                open={open}
                onClose={() => setOpen(false)}
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
                        {/* <JoyButton variant="plain" color="primary" onClick={() => setOpen(false)}>
                            Wystaw
                        </JoyButton> */}
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

                        {/* <button type="submit" form="new-invoice-form">Submit</button> */}
                        <Divider   orientation="vertical"  sx={{ mx: 5 }} />
                        <JoyButton variant="plain" color="danger" onClick={() => setOpen(false)}>
                            Anuluj
                        </JoyButton>
                    </Box>
                    </JoyModalDialog>
                </JoySheet> 
            </JoyModal>
        </>
    );
}