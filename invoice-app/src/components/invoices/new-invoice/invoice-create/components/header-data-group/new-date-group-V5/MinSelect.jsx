import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box } from "@mui/material";
import { useTranslate } from "react-admin";
import { DatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/joy";







 
export default function MinSelect(props) {
    const [currency, setCurrency] = React.useState("dollar");
    const translate = useTranslate();
    let labelName = translate('myroot.form.label.input.datePickerSelectinput.optionLabelName');

    const { options, ...other } = props;
    return (
        <>
            <div style={{ marginTop: 'auto', marginBotton: 'auto', paddingBottom: '4px', minWidth: '80px' }}>
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
        </>
    );
}
