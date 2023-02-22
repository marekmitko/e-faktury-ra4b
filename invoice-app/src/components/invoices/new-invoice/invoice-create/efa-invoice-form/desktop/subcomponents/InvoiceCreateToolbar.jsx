import { Stack } from '@mui/material';
import * as React from 'react';
import { Toolbar, useRecordContext,  DeleteWithConfirmButton, CreateButton, SaveButton,  useResourceContext, ResourceContextProvider, Button } from 'react-admin';
import { DataTestContext } from './DataTestContext';

import { createPrefixObjectKeys } from '../../../../../../../db/fnInvoiceForm';
import { useFormContext } from 'react-hook-form';

// const user = {
//     "id": "user_123",
//     "user_company": "Efremtid sp. zoo",
//     "user_firstname": "Aleksander",
//     "user_lastname": "Mariański",
//     "user_street": "Widawska 128d",
//     "user_place": "Wrocław",
//     "user_zip_code": 44140,
//     "user_email": "aleksander@marianski.com",
   
//     };



// const prefixObjectUser = createPrefixObjectKeys('user_');
// const db_user = prefixObjectUser(user);

export const InvoiceCreateToolbar = props => {
    // PRZENIEŚĆ RECORD - to InvoiceCreate;
    const myMethods = useFormContext();


    return(
        <Toolbar {...props}>
            <Stack direction="row" spacing={2} width="100%" alignItems="center" justifyContent="flex-start">
                <SaveButton
                    label="issuedInvoices_list.action.save_and_show"
                />
                <SaveButton />
                <SaveButton
                    label="issuedInvoices_list.action.save_and_notify"
                    transform={data => ({ ...data, notify: true })}
                    type="button"
                />
                <CreateButton
                    // label="dbclientlist.action.save_and_notify"
                    transform={data => ({ ...data, notify: true })}
                    type="button"
                    resource='dbclientlist/create'
                />
                {/* <DeleteWithConfirmButton
                    confirmContent="You will not be able to recover this record. Are you sure?"
                    // translateOptions={{ name: record.name }}
                    // translateOptions={{ name: {record: {name: 'Marek'}} }}
                /> */}
                {/* {<p>{record ? record.payment_due : null }</p>} */}
                {/* //note OMÓWIĆ <Button ><ContentCreate...??? /></Button>  */}
                <Button label="Edit" color="secondary" onClick={() => { }} />
                <div><DataTestContext /></div>
            </Stack>
        </Toolbar>
    );
};