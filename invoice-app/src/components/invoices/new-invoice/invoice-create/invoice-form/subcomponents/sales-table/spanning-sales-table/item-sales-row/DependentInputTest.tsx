import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler, DefaultValues } from "react-hook-form";

// import "./styles.css";



// DependentInputTest 
// https://codesandbox.io/s/react-hook-form-submithandler-inpud-dependent-forked-mvg73l

// Isolate ReRender
// https://codesandbox.io/s/control-forked-isolate-ra-render-control-lolffw




let renders = 0;

interface FormValues {
        value: number;
    discountPercent: number;
    discountValue: number;
}

const defaultValues: DefaultValues<FormValues> = {
    value: 0,
    discountPercent: 0,
    discountValue: 0
};

const onSubmit: SubmitHandler<FormValues> = (data) => console.info(data);

const recalc = (
    value: FormValues["value"],
    discountPercent: FormValues["discountPercent"],
    discountValue: FormValues["discountValue"]
) => {
    const _discountPercent = (100 * discountValue) / value;
    const _discountValue = (discountPercent / 100) * value;
    const _value = (discountValue / discountPercent) * 100;

    return {
        discountPercent: _discountPercent,
        discountValue: _discountValue,
        value: _value
    };
};

export default function DependentInputTest(props: any) {
    const { register, watch, getValues, handleSubmit, setValue } = useForm<
        FormValues
    >({
        defaultValues
    });
    const data = watch();
    console.log(data);
    renders++;

    return (
        <div className="App">
        <h1>React Hook Form</h1>
        <h2>{renders}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: !props.entryPriceIsGross ? "none" : "block" }} >
            <label>Value</label>
            <input
                {...register("value", {
                valueAsNumber: true,
                onChange: (event) => {
                    const [discountPercent, discountValue] = getValues([
                    "discountPercent",
                    "discountValue"
                ]);
                const value = +event.target.value;
                const {
                    discountPercent: newDiscountPercent,
                    discountValue: newDiscountValue
                } = recalc(value, discountPercent, discountValue);
                setValue("discountPercent", newDiscountPercent);
                setValue("discountValue", newDiscountValue);
                }
            })}
            type="number"
            
            />
        </div>

        <div>
          <label>Discount Percent</label>
          <input
            {...register("discountPercent", {
              valueAsNumber: true,
              onChange: (event) => {
                const [value, discountValue] = getValues([
                  "value",
                  "discountValue"
                ]);
                const discountPercent = +event.target.value;
                const {
                  value: newValue,
                  discountValue: newDiscountValue
                } = recalc(value, discountPercent, discountValue);
                setValue("value", newValue);
                setValue("discountValue", newDiscountValue);
              }
            })}
            type="number"
          />
        </div>

        <div>
          <label>Discount Value</label>
          <input
            {...register("discountValue", {
              valueAsNumber: true,
              onChange: (event) => {
                const [discountPercent, value] = getValues([
                  "discountPercent",
                  "value"
                ]);
                const discountValue = +event.target.value;
                const {
                  value: newValue,
                  discountPercent: newDiscountPercent
                } = recalc(value, discountPercent, discountValue);
                setValue("value", newValue);
                setValue("discountPercent", newDiscountPercent);
              }
            })}
            type="number"
            style={{ display: props.entryPriceIsGross ? "none" : "block" }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
