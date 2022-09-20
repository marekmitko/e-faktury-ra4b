import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
    const { fields, append } = useFieldArray({
        control,
        name: `test.${nestIndex}.nestedArray`
    });

    return (
        <span>
            {fields.map((item, k) => {
                return (
                    <input
                        key={item.id}
                        // {...register(`test.${nestIndex}.nestedArray.${k}.value`, {
                        //     required: true
                        // })}
                        type="number"
                        defaultValue={item.value}
                        style={{ marginLeft: 20, marginRight: 25 }}
                    />
                );
            })}

            <input type="button" onClick={() => append({ value: "0" })} value="Append Child" /> 
        </span>
    );
};
