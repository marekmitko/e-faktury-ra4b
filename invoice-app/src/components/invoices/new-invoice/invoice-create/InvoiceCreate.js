import * as React from "react";
import ReactDOM from "react-dom";
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
import {    Create,   SimpleForm,   TextInput, useRecordContext  } from 'react-admin';
import { InvoiceForm } from "./efa-invoice-form/InvoiceForm";
import { TestGroupTabbedForm } from "./TestGroupTabbedForm";
import { CommentCreate } from "../../invoice-list/invoice-filters/filters-bar-items/ReferenceInputTEST";

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151

const InvoiceCreate = (props) => {
    // sprawdzić to https://marmelab.com/react-admin/SimpleForm.html
    const myMethods = useForm();
    // const { register, handleSubmit } = methods;

    return(
    <>
        <Create redirect="list" component="div"  {...props} >
            {/* <FormProvider {...myMethods}> */}
                <InvoiceForm {...props} />
    
    
    
            
    
    
    
    
    
    
    
    
       {/* <hr /> */}
            {/* <form onSubmit={myMethods.handleSubmit((data) => console.log(data))}>
            // <div onClick={methods.handleSubmit((data) => console.log(data))}>
                <label>Test</label>
                <input {...myMethods.register("test", { required: true })} />
                <label>Nested Input</label>
            

                /<NewInvoiceContext {...props} />

                <input value="wyślij" type="button" onClick={ () => console.log(myMethods.getValues())} />
            //</div>
            <input type="submit" />
        </form> */}
        {/* </FormProvider> */}

        </Create>
    {/* <TestGroupTabbedForm /> */}
    </>
);
};

export default InvoiceCreate;