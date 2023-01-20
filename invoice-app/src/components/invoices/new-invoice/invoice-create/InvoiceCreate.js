import * as React from "react";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import {    Create,   SimpleForm,   TextInput  } from 'react-admin';
import { InvoiceForm } from "./invoice-form/InvoiceForm";
import { TestGroupTabbedForm } from "./TestGroupTabbedForm";
import { CommentCreate } from "../../invoice-list/invoice-filters/filters-bar-items/ReferenceInputTEST";




// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151
// const ProfileEdit = ({ staticContext, ...props }) => {


// record: zainicjuj formularz rekordem

const TestContext = () => {
    const myMethods = useFormContext();
    return <input {...myMethods.register("bill")} />;
};


const InvoiceCreate = (props) => {
    const myMethods = useForm();
    // const { register, handleSubmit } = methods;

    return(

    <>
    <Create redirect="list" component="div"  {...props} >
             {/* <CommentCreate  />  */}
    <FormProvider {...myMethods}>
            <InvoiceForm {...props} />
    {/* ################################### */}


    <br />
    <br />
    <br />
        <form onSubmit={myMethods.handleSubmit((data) => console.log(data))}>
        {/* <div onClick={methods.handleSubmit((data) => console.log(data))}> */}
            <label>Test</label>
            <input {...myMethods.register("test", { required: true })} />
            <label>Nested Input</label>
        

            <TestContext />
            <input type="button" onClick={ () => console.log(myMethods.getValues())} />
        {/* </div> */}
        {/* <input type="submit" /> */}
      </form>
    </FormProvider>

    </Create>
    {/* <TestGroupTabbedForm /> */}
    </>
);
};

export default InvoiceCreate;