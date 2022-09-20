import * as React from 'react';
import { Fragment, useState, useCallback } from 'react';
import { useWatch } from 'react-hook-form';

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

import { ReferenceInput, SelectInput, useTranslate } from 'react-admin'; // eslint-disable-line import/no-unresolved

import BuyerQuickCreate from './BuyerQuickCreate';
import BuyerPreview from './BuyerPreview';

const BuyerReferenceInput = (props: any) => {
    const translate = useTranslate();

    const [showPreviewDialog, setShowPreviewDialog] = useState(false);
    const postId = useWatch({ name: 'buyer_id' });

    const handleShowClick = useCallback(
        event => {
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
                    // create={<BuyerQuickCreate />}
                    optionText="company"
                />
            </ReferenceInput>
            {/* {postId ? (
                <Fragment>
                    <Button
                        data-testid="button-show-post"
                        sx={{ margin: '10px 24px', position: 'relative' }}
                        onClick={handleShowClick}
                    >
                        {translate('ra.action.show')}
                    </Button>
                    <Dialog
                        data-testid="dialog-show-post"
                        fullWidth
                        open={showPreviewDialog}
                        onClose={handleCloseShow}
                        aria-label={translate('simple.create-post')}
                    >
                        <DialogTitle>
                            {translate('simple.create-post')}
                        </DialogTitle>
                        <DialogContent>
                            <BuyerPreview id={postId} resource="buyers" />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                data-testid="button-close-modal"
                                onClick={handleCloseShow}
                            >
                                {translate('simple.action.close')}
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Fragment>
            ) : null} */}
        </>
    );
};

export default BuyerReferenceInput;
