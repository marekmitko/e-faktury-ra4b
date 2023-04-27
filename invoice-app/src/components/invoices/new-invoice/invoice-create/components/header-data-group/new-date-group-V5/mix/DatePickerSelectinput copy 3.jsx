import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box } from "@mui/material";

export default function DatePickerSelectinput() {
    const [currency, setCurrency] = React.useState("dollar");
    return (
        <Box
            sx={{   '& .datePickerSelectinput-input--main-root': {
                        bgcolor: 'yellowgreen', width: '100%', pr: 0,
                    }  
            }}
        > 
            <Input
                className="datePickerSelectinput-input--main-root"
                // variant="solid"
                sx={{ width: 300  }}
                placeholder="Amount"
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
                        <Option value="dollar">7 dni</Option>
                        <Option value="baht">14 dni</Option>
                        <Option value="yen">21 dni</Option>
                    </Select>  
                    </React.Fragment>
                }
            />
        </Box>
    );
}
