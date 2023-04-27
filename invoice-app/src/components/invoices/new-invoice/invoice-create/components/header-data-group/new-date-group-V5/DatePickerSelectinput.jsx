import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box } from "@mui/material";
import { useTranslate } from "react-admin";
import { DatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/joy";









function MyDataPicker(props){ 

    return( 
        <DatePicker 
        slotProps={{ field: (<p>asdsa</p>)  }}
        sx={{ bgcolor: 'red', zIndex: 99 }} {...props} />
    );
} 
export default function DatePickerSelectinput(props) {
    const [currency, setCurrency] = React.useState("dollar");
    const translate = useTranslate();
    let labelName = translate('myroot.form.label.input.datePickerSelectinput.optionLabelName');

    const { options, ...other } = props;
    return (
        <>
        <Box  sx={{   '& .datePickerSelectinput-input--main-root': { width: '100%', pr: 0, }    }}  > 
        <Stack  direction="row" > 
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div  style={{ marginTop: '1px', marginBotton: 'auto', padding: 0 }} > 

          
            <DatePicker 
                    sx={{ width: '150px' }}
                    slots={{ field: MyDataPicker, ...props.slots }}
                    slotProps={{
                        field: "asdsa" ,
                        textField: {
                            variant: 'outlined',
                            // helperText: 'MM/DD/YYYY',
                        },
                        // startDecorator: {'dsa' }
                    }}
                    startDecorator={ "dddd" }
                        { ...other }
            />
              </div>
              <div style={{ marginTop: 'auto', marginBotton: 'auto'  }}>
                    <Divider orientation="vertical" />
                    <Select
                        
                        className="datePickerSelectinput-select--inner-branch, datePickerSelectinput--endDecorator"
                        variant="outlined"
                        value={currency}
                        onChange={(_, value) => { 
                            console.log('DatePickerSelectinput', _);                     
                            setCurrency(value)
                            }
                        }
                        sx={{ 
                            p: 0,
                            bgcolor:  "transparent", 
                            "& span": {    pr: 1,  },
                            "& button": { bgcolor:  "transparent", pl: 1, pr: 3, mr: -4,  width: '100%', zIndex: 1 },
                            "&:hover": { bgcolor: "transparent" } 
                            
                        }}
                    >
                        <Option value="dollar">7 {labelName}</Option>
                        <Option value="baht">14 {labelName}</Option>
                        <Option value="yen">21 {labelName}</Option>
                    </Select>  
                 </div>
                            </div>
                </Stack>
        </Box>
                </>
    );
}
