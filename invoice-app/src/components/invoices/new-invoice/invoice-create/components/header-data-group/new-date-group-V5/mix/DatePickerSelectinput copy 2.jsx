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
        placeholder="Amount"
        startDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
        endDecorator={
            <React.Fragment>
            <Divider orientation="vertical" />
            <Input 
                sx={{ '& input': { textAlign: 'right',} }}
                type="number"
                defaultValue={2.5}
                slotProps={{
                  input: {
                    
                    min: 0,
                    max: 360,
                    step: 1,
                  },
                }}
                endDecorator={
                    <React.Fragment>
                        Days
                    </React.Fragment>
                }
            />
            {/* <Select
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
                <Option value="dollar">US dollar</Option>
                <Option value="baht">Thai baht</Option>
                <Option value="yen">Japanese yen</Option>
            </Select> */}
            </React.Fragment>
        }
        sx={{ width: 300  }}
        />
            </Box>
    );
}
