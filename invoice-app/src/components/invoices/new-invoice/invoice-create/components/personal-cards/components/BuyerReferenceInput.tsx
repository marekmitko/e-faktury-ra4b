import * as React from "react";
import { Fragment, useState, useCallback } from "react";
import { useWatch } from "react-hook-form";

import {
Button,
Dialog,
DialogTitle,
DialogContent,
DialogActions
} from "@mui/material";

import { ReferenceInput, SelectInput, useTranslate } from "react-admin"; // eslint-disable-line import/no-unresolved
import BuyerPreview from "./BuyerPreview";

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
    <ReferenceInput {...props} defaultValue="">
        <SelectInput
        fullWidth
        // create={<PostQuickCreate />}
        optionText="company"
        />
    </ReferenceInput>
    {props.children ? props.children : '' }
    { buyerId ? (
        <Fragment>
             <BuyerPreview  id={buyerId} resource="buyersEfaktury" />
        <Button
            data-testid="button-show-post"
            sx={{ margin: "10px 24px", position: "relative" }}
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
            <BuyerPreview  id={buyerId} resource="buyersEfaktury" />
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
