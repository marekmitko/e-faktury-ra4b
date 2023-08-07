import * as React from "react";
import Button from '@mui/material/Button';
import { TopToolbar, ListButton, ShowButton, Edit, SaveButton, DeleteButton, Toolbar } from 'react-admin';
import { DownloadActionButton } from "../../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/DownloadActionButton";
import { CancelActionButton } from "../../../../../reusable-components/button/call-action/CancelActionButton";
import { ArchiveActionButton } from "../../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/PurringActionButton";
import { SpecialSubmitActionButton } from "../../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/SpecialSubmitActionButton";

const InvoiceSubtoolbarAction = (props) => (
    <Toolbar
        {...props}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
        <SaveButton />
        <DeleteButton label="Anuluj fakturę" mutationMode="pessimistic" />
    </Toolbar>
);



export default InvoiceSubtoolbarAction;


