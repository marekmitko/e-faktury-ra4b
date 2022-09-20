import { useEffect, useMemo, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const Value = ({ register }) => {
    return (
        <span>
            <span>Value </span>
            <input {...register("value")} />
        </span>
    );
};

const DiscountValue = ({ control, register, setValue }) => {
    const [value, discountPercent] = useWatch({
        control,
        name: ["value", "discountPercent"]
    });

    const discountValue = useMemo(
        () => (parseFloat(value) * parseFloat(discountPercent)) / 100,
        [value, discountPercent]
    );

    useEffect(() => {
        if (!isNaN(discountValue)) {
            setValue("discountValue", discountValue.toFixed(2));
        }
    }, [setValue, discountValue]);

    return (
        <span>
        <span>Discount Value </span>
        <input {...register("discountValue")} />
        </span>
    );
};

const DiscountPercent = ({ control, register, setValue }) => {
    const [value, discountValue] = useWatch({
        control,
        name: ["value", "discountValue"]
    });

    const prevValue = usePrevious(value);

    const discountPercent = useMemo(
        () => (parseFloat(discountValue) / parseFloat(value)) * 100,
        [value, discountValue]
    );

    useEffect(() => {
        if (!isNaN(discountPercent) && value === prevValue) {
        setValue("discountPercent", discountPercent.toFixed(2));
        }
    }, [setValue, discountPercent]);

    return (
        <span>
        <span>Discount Percent </span>
        <input {...register("discountPercent")} />
        </span>
    );
};



export default function RHFEasyItemRow() {
    const { control, register, setValue } = useForm({
        defaultValues: {
        value: "100",
        discountPercent: "50",
        discountValue: "0"
        }
    });

    return (
        <div>
        <h5>{"REACT-HOOK-FORM: input->calc->output display"}</h5> 
        <Value register={register} />
        <DiscountPercent
            register={register}
            control={control}
            setValue={setValue}
        />
        <DiscountValue
            register={register}
            control={control}
            setValue={setValue}
        />
        </div>
    );
}
