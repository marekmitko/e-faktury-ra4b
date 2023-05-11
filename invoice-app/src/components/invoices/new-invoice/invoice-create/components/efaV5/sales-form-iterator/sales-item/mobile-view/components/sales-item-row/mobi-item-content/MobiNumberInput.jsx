import { pink } from '@mui/material/colors';
import * as React from 'react'; 
import { NumberInput } from 'react-admin';




const MobiNumberInput = (props) => {    
    // const {source, variant, ...rest } = props;

    return(
        <NumberInput {...props} 
            className='ra-input-count-number-input--mobi'
            fullWidth
            sx={{  
                
                gridArea: 'count', '& input': { mr: -1, mt: -.25, mb: -.45, },
                // marginTop: "8px",
                marginBottom: 'auto',
                '& .MuiFilledInput-root': { 
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                },
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
                "& .MuiInputLabel-filled": {
                        // display: 'none',
                        // visibility: 'hidden'
                        marginTop: '-2px'
                }
            }}
        />
    );
};


export default MobiNumberInput;


