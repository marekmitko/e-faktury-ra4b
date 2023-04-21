import * as React from "react";
import { Fragment, useState, useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
Button,
Dialog,
DialogTitle,
DialogContent,
DialogActions
} from "@mui/material";
import BuyerIcon from '@mui/icons-material/ShoppingCart';
import { AutocompleteInput, ReferenceInput, SelectInput, useTranslate } from "react-admin"; // eslint-disable-line import/no-unresolved
import BuyerPreview from "./BuyerPreview";
import OldCustomAutocompleteInput from "./subcomponents/autocomplete-input/OldCustomAutocompleteInput";
// import EfaBuyerAutoInput from "../../../efa-invoice-form/personal-cards/EfaBuyerAutoInput";
import DecorativeWrapper from "./subcomponents/autocomplete-input/DecorativeWrapper";
import { Stack,   } from "@mui/joy";
import { ClientCreateButton } from "../../../efa-invoice-form/personal-cards/show/buyer-invoice-form/create-client-subform/ClientCreateButton";

// import PostQuickCreate from "./PostQuickCreate";
// import PostPreview from "./PostPreview";

const BuyerReferenceInput = (props : any) => {
const translate = useTranslate();

const [showPreviewDialog, setShowPreviewDialog] = useState(false);

const { buyerId, reference } = props;

const handleShowClick = useCallback(
    (event : any ) => {
    event.preventDefault();
    setShowPreviewDialog(true);
    },
    [setShowPreviewDialog]
);

const handleCloseShow = useCallback(() => {
    setShowPreviewDialog(false);
}, [setShowPreviewDialog]);

  

return (
    <>
    <ReferenceInput {...props} defaultValue=""
        // enableGetChoices={({ q }) =>  q.length >= 3}
    >
        {/* <SelectInput
        fullWidth
        // create={<PostQuickCreate />}
        optionText="company"
        /> */}
        {/* <AutocompleteInput 
        /> */}
{/* <EfaBuyerAutoInput  icon={<BuyerIcon/>} valueBuyerId={valueBuyerId} setValueBuyerId={setValueBuyerId} /> */}
        <DecorativeWrapper icon={<BuyerIcon />} >
        <Stack direction="row" ml={7} mb='-10px' mr={2} spacing={2} >
            <OldCustomAutocompleteInput /> 
                {/* <ClientReferenceAutocompleteInput
                    variant="filled"
                    source="buyer_id" reference="buyersEfaktury" 
                    handleBuyerIdChange={props.setValueBuyerId}
                    valueBuyerId={props.valueBuyerId}
                    setValueForm={setValue}
                    // enableGetChoices={({ q }) =>  q.length ? (q.length >= 3) : null}
                />    */}
            <Stack alignItems="center" justifyContent="center" sx={{maxWidth: '50px', mx: 2, p: .1}} mr={2}>
                    <ClientCreateButton />
                </Stack> 
            </Stack>
        </DecorativeWrapper>
    </ReferenceInput>



  
    {props.children ? props.children : '' }
    { buyerId ? (
        <Fragment>
             {/* <BuyerPreview  id={buyerId} resource={reference} /> */}
        <Button //size="small"
            data-testid="button-show-post"
            sx={{  p: 0, mt: 1, mb: -0.2  //margin: "10px 24px", 
            // position: "relative" 
        }}
            onClick={handleShowClick}
        >
            {translate("ra.action.show")}
        </Button>
        <Dialog
            data-testid="dialog-show-post"
            fullWidth
            open={showPreviewDialog}
            onClose={handleCloseShow}
            aria-label={translate("simple.create-post")}
        >
            <DialogTitle>{translate("simple.create-post")}</DialogTitle>
            <DialogContent>
            {/* <PostPreview id={postId} resource="posts" /> */}
            <BuyerPreview  id={buyerId} resource={reference} />
            </DialogContent>
            <DialogActions>
            <Button
                data-testid="button-close-modal"
                onClick={handleCloseShow}
            >
                {translate("simple.action.close")}
            </Button>
            </DialogActions>
        </Dialog>
        </Fragment>
    ) : null}
    </>
);
};

export default BuyerReferenceInput;
