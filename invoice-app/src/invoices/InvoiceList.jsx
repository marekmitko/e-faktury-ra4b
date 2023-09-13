import * as React from 'react';
import { Fragment, useCallback } from 'react';
import {
    AutocompleteInput,
    BooleanField,
    Count,
    DatagridConfigurable,
    DateField,
    DateInput,
    ExportButton,
    FilterButton,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceField,
    ReferenceInput,
    SearchInput,
    SelectColumnsButton,
    TextField,
    TextInput,
    TopToolbar,
    useListContext,
} from 'react-admin';
import { useMediaQuery, Divider, Tabs, Tab, Theme } from '@mui/material';
import TabbedDatagrid from './components/TabbedDatagrid';



const InvoiceList = () => (
    <List
        // filterDefaultValues={{ status: 'ordered' }}
        sort={{ field: 'date', order: 'DESC' }}
        perPage={25}
        // filters={orderFilters}
        // actions={<ListActions />}
    >
        <TabbedDatagrid />
    </List>
);


export default InvoiceList;