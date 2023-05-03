import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box } from "@mui/material";
import { useTranslate } from "react-admin";
import { JoyInputField } from "./JoyInputField";

export default function JoySelectinputPrice(props) {
    const {placeholder, ...rest } = props;
    const [currency, setCurrency] = React.useState("dollar");
    const translate = useTranslate();
    let labelName = translate('myroot.form.label.input.datePickerSelectinput.optionLabelName');
    return (
        <Box  sx={{   '& .datePickerSelectinput-input--main-root': { width: '100%', pr: 0, }    }}  > 
            <JoyInputField
                className="datePickerSelectinput-input--main-root"
                // variant="solid"
                sx={{ width: 300  }}
                placeholder={placeholder? placeholder : "placeholder-test"}
                startDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
                endDecorator={
                    <React.Fragment>
                    <Divider orientation="vertical" />
                    <Select
                        className="datePickerSelectinput-select--inner-branch, datePickerSelectinput--endDecorator"
                        variant="plain"
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
                    </React.Fragment>
                }
            {...rest} />
        </Box>
    );
}
