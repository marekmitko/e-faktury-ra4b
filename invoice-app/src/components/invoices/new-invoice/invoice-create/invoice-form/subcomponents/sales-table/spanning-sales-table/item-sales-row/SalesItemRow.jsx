import * as React from "react";
import { Controller, useWatch } from "react-hook-form";
import { NumberInput } from "react-admin";
import InputBox from "./InputsCell";


// *see SPrawdzi 
// https://codesandbox.io/s/react-hook-form-fieldsarray-yup-validation-min-length-forked-7uk2qd


export const SalesItemRow = ({ control, index, salesTableName }) => {
        const value = useWatch({
            name: `${salesTableName}.${index}`,
            control
        });
    // console.log("value", value);
        return (
            <Controller
                control={control}
                name={`${salesTableName}.${index}`}
                render={({ field }) =>{


                    const refContainer = React.createRef(null);
                    const myClick = () => {
                        console.log('clicked !', refContainer.current.value); // refContainer is null !!!
                        refContainer.current.value = '1';
                    };
                    return(
                    <>
                    <InputBox  control={control} arrayItemIdx={`${salesTableName}.${index}`} idx={index} />
                        {/* <NumberInput  
                        inputRef={refContainer}
                        value='value'
                        // sx={{ maxWidth: 150, p: 0  }}
                        size="small" variant="outlined" 
                        // label={labelName} 
                        {...field}   
                        helperText={false}
                        />  
                         */}
                        {/* value?.[index]?.id === "on" ? <input {...field} /> : null */}
                        </>
                    );
                }
                }
                // defaultValue={field.firstName}
            />
        );
    };