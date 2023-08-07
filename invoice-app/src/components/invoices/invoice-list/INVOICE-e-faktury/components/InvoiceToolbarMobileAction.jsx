import * as React from "react";
import Button from '@mui/material/Button';
import { TopToolbar, ListButton, ShowButton, Edit } from 'react-admin';
import { DownloadActionButton } from "../../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/DownloadActionButton";
import { CancelActionButton } from "../../../../../reusable-components/button/call-action/CancelActionButton";
import { PurringActionButton } from "../../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/PurringActionButton";
import { SpecialSubmitActionButton } from "../../../new-invoice/invoice-create/efa-invoice-form/invoices-list/components/call-action-buttons/SpecialSubmitActionButton";

const InvoiceToolbarMobileAction = () => (
    <TopToolbar>
        {/* <ShowButton /> */}
        {/* Add your custom actions */}

        <tr label="Operacje" style={{ textAlign: 'center' }}>
                <td>
                    <DownloadActionButton/>
                </td>
                {/* <td>   <CancelActionButton />  </td> */}
                <td>
            <PurringActionButton />
                </td>
                <td>
            <SpecialSubmitActionButton />
                </td>
            </tr>
        <Button color="primary" onClick={() => { } }>Custom Action</Button>
        <ListButton />
    </TopToolbar>
);


export default InvoiceToolbarMobileAction;