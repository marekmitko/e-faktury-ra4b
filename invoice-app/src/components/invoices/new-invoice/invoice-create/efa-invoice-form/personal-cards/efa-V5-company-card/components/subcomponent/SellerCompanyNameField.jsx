import { TextField, Input } from "@mui/material";
import * as React from "react";
import { useRecordContext } from "react-admin";



// https://stackoverflow.com/questions/45638603/remove-underline-from-input-component-material-ui-v1-0-beta


export const SellerCompanyNameField = ( ) => { 
    // const { cardIcon, suptitle, cardHeader, subtitle = false, sx, sxIcon, sxSvg, sxHeader } = props;
    const record = useRecordContext();
    const {  org_nr, id, company } = record;
    return(

        <Input fullWidth  helperText={false}  disableUnderline={true}
        value={company ? company : ""} disabled 
        variant="standard"
        // endDecoration={<p>dsa</p>}
        sx={{   
            "--mui-palette-text-disabled": "rgba(0, 0, 0, 0.8)",
            backgroundColor: 'neutral.100',
            borderBottom:  'solid 1px rgba(0, 0, 0, 0.4)',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: 0,
            // mt: 0,   
            // mb: 0,
            pl: 1,
            // mt: .5,
           
         
        
            "& .MuiInput-input":  {  
                    backgroundColor: 'neutral.700', 
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: 0,
                   
                },


            "& input": {   p: 0, m: 0,
                    // 'focusedHighlight': "none", 
                    ml: 'auto', mr: 0,
                 
                },
            '& .MuiInput-input': {  
                // color: 'text.primary.700',   
                paddingLeft: 'auto', paddingRight: 0,
                fontSize: {xs: '1.1rem', md: '1.5rem' }
            },

            "&.Mui-disabled": {
                // background: "#eaeaea",
                // color: "#000000!important",
                fontWeight: 400,
                opacity: .75,
              },
           
              height: {sx: '30px', md: '35px' },
              mb: -1.25,
              pt: .3,
              pb: .3
        }}
    />
    );


}