import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Person from "@mui/icons-material/Person";
import People from "@mui/icons-material/People";
import Apartment from "@mui/icons-material/Apartment";
import JoyCheckbox, { checkboxClasses } from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import InvoiceEHFPersonalIcon from "@mui/icons-material/ContactPageRounded";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InvoiceEHFRounded from "@mui/icons-material/SummarizeRounded";
import InvoiceEHFOutlined from "@mui/icons-material/SummarizeOutlined";
import IssuedTextInput from "./IssuedTextInput";
import Chip from "@mui/joy/Chip";
import NumberInvoiceIcon from "@mui/icons-material/Pin";
import TextFieldDecorator from "./subcomponent/TextFieldDecorator";
import Close from '@mui/icons-material/Close';
import { useFormContext, Controller, useWatch, useController } from "react-hook-form";
import { useRecordContext, useTranslate } from "react-admin";
import { FormControlLabel } from "@mui/material";
import { EfaInputBox } from "./EhfInputBox";
import JoyInput  from "@mui/joy/Input";




function IconsCheckbox({label, options, name, control  }) {
    const { field } = useController({  control, name });
    const [value, setValue] = React.useState(field.value || []);
    const record = useRecordContext();

    const { register } = useFormContext();
    const { ref } =  register('buyer_order_no'); 

    return (
        <>

        
        {options.map((option, index) => (


            <JoyCheckbox 
                sx={{ flexDirection: "row-reverse", gap: 1.5 }}
                label={<span>{label} </span>} 
                uncheckedIcon={<Close />}
                onChange={(e) => {
                    const valueCopy = [...value];
                    // update checkbox value
                    valueCopy[index] = e.target.checked ? e.target.value : null;
                    // send data to react hook form
                    field.onChange(valueCopy);
                    // update local state
                    setValue(valueCopy);
                }}
                key={option}
                checked={value.includes(option)}
                type="checkbox"
                value={option}
               
           />
           ))}
            {value[0] && (  
                <>
                <Chip size="sm" sx={{ paddingLeft: '150px', marginTop: '-100px'}} variant="soft"> ZAMÓWIENIE NR:  
                    <JoyInput sx={{ display: 'inline', p:1 }} variant="plain" size="sm" placeholder="Podaj numer" inputRef={ref}  {...register('buyer_order_no')}/></Chip>
            
            <EfaInputBox checked={value[0]} /> 
                </>
            )}
        </>
    );
};



// const Input = ({ name, control, register, index }) => {
//     const value = useWatch({
//         control,
//         name
//     });
//     return <input {...register(`test.${index}.age`)} defaultValue={value} />;
//     };






export default function EhfCheckbox() {
    const translate = useTranslate();
    const [show, setShow] = React.useState(true);
    const { register, control, getValues, handleSubmit } = useFormContext();



    return (
        <Box sx={{ minWidth: 200 }}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
        <Typography
            id="example-payment-channel-label"
            // level="body5"
            textTransform="uppercase"
            // fontWeight="xl"
            sx={{ 
                fontSize: "xs1",
                letterSpacing: "xs",
                fontWeight: "lg",
                color: "text.secondary",
                pb: 0,
            }}
        >
        {translate('myroot.form.label.header.efa')}
        </Typography>
    </Box>
            <Sheet
                    variant="neutral"
                    sx={{
                        p: 1,
                        bgcolor: "background.body",
                        borderRadius: "sm",
                        width: 660,
                        maxWidth: "100%"
                    }}
            > 

                    <IconsCheckbox 
                        {...register('uncontrolled')}
                            // nameCheck="ehf"
                          // { ...register('postmail')  }
                            label={translate('myroot.form.label.checkbox.ehf')}
                            // onChange={handleChangePostmail }
                            // checked={checkedPostmail}
                            onClick={() => { console.log(show)
                                setShow(!show);
                            }}
                            options={["a"]}
                            control={control}
                            name="efa"
                            
                        />
                        {/* <section>
                            <button
                            type="button"
                            onClick={() => {
                                setShow(!show);
                            }}
                            >
                            Hide
                            </button>
                        </section>


                        {show && (
                                <ul>
                                    <li>"dupa:"</li>
                                        return ( 
                                        <li key={'firstIt'}>
                                            <input
                                            defaultValue={getValues(`test.efa.firstName`)}
                                            {...register(`test.efa.firstName`)}
                                            />

                                            <Controller
                                            render={({ field }) => <input {...field} />}
                                            control={control}
                                            name={`test.efa.lastName`}
                                            defaultValue={getValues(`test.efa.lastName`)}
                                            />

                                            <Input
                                            register={register}
                                            control={control}
                                            index="efa"
                                            name={`test.efa.age`}
                                            />

                                            <button type="button" onClick={() => console.log("removed....")}>
                                            Delete
                                            </button>
                                        </li>
                                      
                                </ul>
                            )} */}
            </Sheet>
            </Box>
    );
}
