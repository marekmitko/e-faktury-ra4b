import * as React from "react";
import { choices, useInput, useTranslate } from 'react-admin';
import MobiSelectButton from "./subcomponent/MobiSelectButton";
import { Stack, Divider, Box, FormControl, InputLabel, TextField, InputAdornment } from "@mui/material";
import { ItemIndexChip } from "../../../../../../../efa-invoice-form/components/index-item-row/ItemIndexChip";
import SalesItemCardLabel from "../../../item-wrapper/SalesItemCardLabel";
import { MobiIndexChip } from "./subcomponent/MobiIndexChip";
import MobiRemoveItemButton from "./subcomponent/MobiRemoveItemButton";



const SelectBtn = ({namefield, choiceOptions }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'min-content',
            // border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'transparent',
            color: 'text.secondary',
            // '& svg': {
            //     m: 1.5,
            // },
            // '& hr': {
            //     mx: 0.5,
            // },
            
        }}
        >
    {/* cssBox={{ m: .5, mt: .75, mr: 1 }} */}
    {/* <Divider 
    // sx={{ m: 0 }}  variant="middle"  
    orientation="vertical" flexItem /> */}
        <MobiSelectButton sxCSS={{    mb: 1.25, display: 'flex',   alignItems: 'center', bgcolor: 'transparent'}}
            nameProdcutNameInput={namefield ? namefield : ""} 
            options={choiceOptions ? choiceOptions : {} }
        />
    </Box>
);




export const MobiInputTextSelected = ({index, choiceOptions, sx,  InputProps, label,  placeholder, variant, ...props}) => {
    const translate = useTranslate();
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted },
        // isRequired
    } = useInput(props);
    const { name } = field;
    // const options = props.choiceOptions;
    console.log("inputprops", props);
    return(
        <Box sx={{ ...sx } }    >
            <SalesItemCardLabel >

            <Stack direction='row' >
                <MobiIndexChip cssBox={{ m: .5, mt: .75, mr: 0.5 }} index={++index} />
                <TextField sx={{ width: '100%' } }
                        {...field} 
                        // variant={ variant ? variant : "standard"}
                        variant={ variant ? variant : "standard"}
                        label={translate(label)}
                        required
                        placeholder={translate(placeholder)}
                        autoComplete="off"
                        InputProps={{
                            // ...InputProps,
                            startAdornment:   (
                                <InputAdornment  sx={{  mx: -0.75                                                                                                    }} sizeSmall="small"  position="start">
                                        {<SelectBtn namefield={ field? name : "" } choiceOptions={choiceOptions? choiceOptions : {} } />}
                                        </InputAdornment>
                                ),
                                // classes: {
                                //     focused: 'on'
                                // }
                                // value: 'fs'
                            }}
                    {...props}
                />
                <Box sx={{ m: .5, mt: .75, mr: .5 }} >
                   <MobiRemoveItemButton />
                </Box>
            </Stack>
                            </SalesItemCardLabel>
        </Box>
    );
};