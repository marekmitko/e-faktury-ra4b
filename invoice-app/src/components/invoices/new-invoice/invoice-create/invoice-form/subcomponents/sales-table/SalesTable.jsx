import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./SalesTableBody";
// import ReactDOM from "react-dom";

// import "./styles.css";






const defaultValues = {
    test: [
        {
            qty: "1",
            price: "0",

            nestedArray: [{ value: "0" }]
        },
        {
            qty: "1",
            price: "0",

            nestedArray: [{ value: "0" }]
        }
    ]
};





export default function SalesTable() {
    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        setValue,
        watch
    } = useForm({
        defaultValues
    });

    // const myObjRef = React.useRef(defaultValues);

    const onSubmit = (data) => console.log("data", data);
    console.log("dataLog", onSubmit());
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{textAlign: 'left', padding: '25px'}}>
                <h2>Sales Table </h2>
                <table>
                    <thead>
                        <tr>
                            <th style={{width: '5px !important'}} >No.</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Net Price</th>
                            <th>VAT</th>
                            <th>Net Value</th>
                            <th>Gross Value</th>
                            <th>x</th>
                        </tr>
                    </thead>
                    <FieldArray
                        {...{
                            control,
                            watch,
                            register,
                            defaultValues,
                            getValues,
                            setValue,
                            errors,
                        }}
                        />
                    <tfoot>
                        <input {...register("total")} readOnly />
                    </tfoot>

                    <input type="submit" />
                </table>
            </div>
        </form>
    );
}

