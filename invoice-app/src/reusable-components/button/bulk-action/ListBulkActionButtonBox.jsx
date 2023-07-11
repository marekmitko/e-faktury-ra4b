import * as React from 'react';
import { Fragment } from 'react';
import { BulkDeleteButton, BulkExportButton, DeleteWithConfirmButton } from 'react-admin';
import ResetViewsButton from '../ResetViewsButton';

const ListBulkActionButtons = () => (
    <Fragment>
        <ResetViewsButton label="Reset Views" />
        <BulkExportButton />
        {/* //Q? Jaki stan tu dać?  */}
        {/* // ['pessimistic', 'optimistic', 'undoable']   undoable is default*/}
        {/* <BulkDeleteButton /> */}
        <BulkDeleteButton mutationMode="pessimistic" />
        {/* <DeleteWithConfirmButton /> */}
    </Fragment>
);

export default ListBulkActionButtons;