import { useState, useEffect, useMemo} from "react";
import {  FormControl, InputLabel, Autocomplete, MenuItem, Select, makeStyles, } from "@mui/material";
import { useTranslate, useInput } from "react-admin";
import { Box } from "@mui/joy";
import { width } from "@mui/system";



// const useStyles = makeStyles((theme) => ({
// 	margin: {
// 		margin: theme.spacing(1)
// 	},
// 	selectRoot: {
// 		width: "200px",
//         borderTopLeftRadius: '15px',
//         borderTopRightRadius: '15px',
// 		"&:focus": { 
// 			backgroundColor: "yellow",
//             borderTopLeftRadius: '15px',
//             borderTopRightRadius: '15px',
// 		}
// 	} 
// }));











// function SelectItemOption({field, ...props}) {
export function MobiSelectInput({ options, gridArea, label, variantLabel, variant, defaultValue, sx,...props}) {
    // const classes = useStyles();
    const translate = useTranslate();
    // https://stackoverflow.com/questions/66722593/how-to-set-defaultvalue-after-some-delay-on-react-select-with-react-hook-form
    // useEffect(() => {
    //     setTimeout(() => {
    //     setValue("country", "India");
    //     }, 2000);
    // }, [setValue]);

    // const saveData = (form_data) => {
    //     console.log("form_data", form_data);
    // };
  

    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useInput(props);

    // label={ typeItem.field.value ? "myroot.form.label.inputbox_itemrow.typeItem" : "Wprowadź typ"} 
    // sx={{ minWidth: 100 }} defaultValue="placeholder" options={typeOptions}  


    return (
        <Box sx={{ gridArea: gridArea? gridArea : '',  '& svg': { mr: -0.5, mt: .25 },
         mr: -1, mt: -0.25, mb: -.45,         
         }}>

        <FormControl variant="standard" sx={{ width: '100%', marginBottom: 'auto',
        backgroundColor: 'transparent', 
          "& selectRoot:focus": {
            backgroundColor: 'transparent', 
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
        }, 
        backgroundColor: 'transparent', 
          "& selectRoot:checked": {
            backgroundColor: 'transparent', 
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
        }, 
        "& :hover": {
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            // backgroundColor: 'blue'
        },
                            // '& input': { mr: -1, mt: -5.25, mb: -.45,  } 
                            }} 
        {...props}  size="small"
        >
            <InputLabel variant={ variant ? variant : "filled"}  sx={{ marginTop: '-2px', backgroundColor: 'transparent',  }} id="demo-simple-select-autowidth-label">
                {translate(label)}
            </InputLabel>
            <Select
                size="small"
                required
                // color="success"
                // error={isError ? false : true}
                defaultValue={defaultValue ? `${defaultValue}` : null}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-label"
                value={field.value}
                label={translate(label)}
                onChange={field.onChange}
                variant={ variant ? variant : "filled"}
                autoWidth
                sx={{
                    backgroundColor: 'transparent', 
                    "& .MuiSelect-inputRoot":  {  
                        backgroundColor: 'transparent', 
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        mt: 0,   
                        mb: 0,
                        pl: 1
                    },


                "& input": { p: 0  , m: 0,  
                        // 'focusedHighlight': "none", 
                     
                    },
                '& .MuiInput-input': { // backgroundColor: 'blue', 
                color: 'text.primary.500',   fontSize: '1.5rem' },

                 

                "& .MuiAutocomplete-endAdornment": { mt: 0, px: 1 },
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                // backgroundColor: 'pink',
                
                
                // '& .MuiFilledInput-root': { 
                //     borderTopLeftRadius: '15px',
                //     borderTopRightRadius: '15px',
                // },
                "& .MuiFormHelperText-filled": {
                        display: 'none',
                        visibility: 'hidden'
                },
                "& .MuiFilledInput-underline": {
                        // display: 'none',
                        // visibility: 'hidden'
                        // marginTop: '5px'
                        // backgroundColor: 'neutral.100'
                },
                
                "& .MuiInputLabel": {
                        // display: 'none',
                        // visibility: 'hidden'
                        marginTop: '20px'
                },
                "& .MuiInputLabel-filled": {
                        // display: 'none',
                        // visibility: 'hidden'
                        marginTop: '-20px'
                }
            }}

                > 
                {(options.length) ? 
                    (options.map(({id, name, value}, index) => {
                        if(index==0) return (<MenuItem disabled key={`${id}_idx${index}`} value={value}><em>{name}</em></MenuItem>)
                        return(
                            <MenuItem key={`${id}_idx${index}`} value={value}>
                                {name}
                            </MenuItem>)})
                    ) : null
                }
            </Select>
    </FormControl>
            </Box>
    );
}

// export default MobiSelectInput;