import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useFormContext } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JoyIconButton from "@mui/joy/IconButton";
import { Box } from "@mui/joy";
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { IconButtonWithTooltip } from "react-admin";

export default function SelectButton( {nameProdcutNameInput, options, label, variant, variantLabel, defaultValue, sxCSS, sx, ...props} ) {
    const {  setValue } = useFormContext();
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
        <Box sx={sxCSS}>
        <IconButtonWithTooltip
            label="myroot.form.label.input.selectInputItemName" 
            size="small"
            // onClick={() => remove()}
            color="info"
            sx={{  
                ":hover, --focusVisible":  { 
               
            
                backgroundColor: 'transparent', border: 'none' 
                },
                "--IconButton-size": "12px", 
            }}
            {...props}
        >
        <JoyIconButton  variant="soft"  size="sm"  
            sx={{  border: 'none', color: 'primary.900',
                ":hover, --focusVisible":  { transform: 'rotate(90deg)', 
                color: '#26c6da', // color: 'primary.500', 
            
                backgroundColor: 'transparent', border: 'none' 
                },
                "--IconButton-size": "auto", 
                
                display: "flex",  bgcolor: 'transparent'
            }}
            onClick={handleOpen}>
            <MoreVertTwoToneIcon />
        </JoyIconButton>
        </IconButtonWithTooltip>
        </Box>
        <FormControl {...props} >
            {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
        <Select
            sx={{ visibility: "hidden", mt: "-50px", mx: 0, maxWidth: '1px', textAlign: 'right' }}
            defaultValue={defaultValue ? `${defaultValue}` : null}
            // labelId="demo-controlled-open-select-label"
            // id="demo-controlled-open-select"
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
