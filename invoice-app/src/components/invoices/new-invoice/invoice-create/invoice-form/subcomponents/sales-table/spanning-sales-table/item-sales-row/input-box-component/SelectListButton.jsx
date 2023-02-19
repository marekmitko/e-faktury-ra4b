import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useFormContext } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JoyIconButton from "@mui/joy/IconButton";

export default function SelectListButton( {nameProdcutNameInput, options, label, variant, variantLabel, defaultValue, sx,...props} ) {
    const { control, setValue, register } = useFormContext();
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setValue( nameProdcutNameInput, `${options[event.target.value]['no']}`);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <>
        
        <JoyIconButton variant="plain"  
            sx={{ display: "inline-block", mt: '12px', pb: 0, mr: '5px', width: '10px', maxWidth: '20px' }}
            onClick={handleOpen}>
            <ExpandMoreIcon />
        </JoyIconButton>
        <FormControl {...props} >
            {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
        <Select
            sx={{ visibility: "hidden", mt: "-50px", mx: 0, maxWidth: '1px', textAlign: 'right' }}
            defaultValue={defaultValue ? `${defaultValue}` : null}
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen} 
            // value={product2}
            label="setProduct"
            onChange={handleChange}
            >
             {(options.length) ? 
                (options.map(({id, name, value}, index) => (
                        <MenuItem key={`${id}_idx${index}`} value={index}>
                            {name}
                        </MenuItem>))
                ) : null
            }
            </Select>
        </FormControl>
        {/* // </div> */}
        </>
    );
    }
