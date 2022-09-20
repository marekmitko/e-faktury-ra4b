import * as React from "react";
import {    Create,   SimpleForm,   TextInput  } from 'react-admin';
import { InvoiceForm } from "./invoice-form/InvoiceForm";
import { TestGroupTabbedForm } from "./TestGroupTabbedForm";
import { CommentCreate } from "../../invoice-list/invoice-filters/filters-bar-items/ReferenceInputTEST";

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151
// const ProfileEdit = ({ staticContext, ...props }) => {

const InvoiceCreate = (props) =>  (
    <>
    <Create redirect="list" component="div" {...props}>
        <InvoiceForm {...props} />
        {/* <CommentCreate  /> */}
    </Create>

    {/* <TestGroupTabbedForm /> */}
    </>
);

export default InvoiceCreate;