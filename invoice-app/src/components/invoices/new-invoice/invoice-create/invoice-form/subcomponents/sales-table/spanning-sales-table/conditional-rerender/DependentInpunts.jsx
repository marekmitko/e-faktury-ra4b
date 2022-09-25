import { Grid } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import { PriceNumberInput } from "../sales-item-cells/InputsCells";

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const Value = ({ register }) => {
    return (
        <div>
            <span>Value </span>
            <input {...register("value")} />
        </div>
    );
  };



export default function DependentInputsPrice({index, control, toggelPrice}) {
    const NetPriceInput = () => (<PriceNumberInput name={`salesTableList.${index}.netPrice`}  labelName="Net Price"   control={control} />);
    const GrossPriceInput = () => (<PriceNumberInput name={`salesTableList.${index}.grossPrice`} labelName="Gross Price"  control={control} />);
    return( 
        <>
        <Grid item xs={1.5} >
            {toggelPrice.checkedOption ? <GrossPriceInput /> : <NetPriceInput /> }
            {/* <PriceNumberInput name={`salesTableList.${index}.netPrice`}     control={control} /> */}
        </Grid>
        <Grid item xs={1.5} >
            {toggelPrice.checkedOption ? <NetPriceInput /> : <GrossPriceInput />  }
            {/* <PriceNumberInput name={`salesTableList.${index}.netPrice`}     control={control} /> */}
        </Grid>
        </>
    );
}