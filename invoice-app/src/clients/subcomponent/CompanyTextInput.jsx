import React, { memo } from 'react';
import { InputAdornment } from '@mui/material';
import { TextInput, useResourceContext, useTranslate  } from 'react-admin';
import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded';

const CompanyTextInput = (props) => {
    const { 
        iconColor = 'primary.900', iconSx,
        icon = <AddHomeWorkRoundedIcon sx={iconSx} />
    } = props;
    const translate = useTranslate();
    const resources = useResourceContext();
    return (
        <TextInput label="" fullWidth helperText={false} resettable 
            sx={{   marginRight: -10,  
                    '& .MuiFilledInput-input': {
                        paddingTop: 2,
                        marginTop: -1,
                    },
                    '& .MuiFilledInput-underline': {
                        borderTopLeftRadius: '15px',
                        fontSize: '1.2rem',
                    }, 
                }}
            InputProps={{
                placeholder: translate(`resources.${resources}.fields.${props['source']}`),
                startAdornment: <InputAdornment position="start"   
                                    sx={{ color: iconColor, '& > svg': { mt: -1.5,  ml: 1, } }}
                                >
                                    { icon }
                                </InputAdornment>,
            }}   
            {...props} 
        />
    );
};

export default memo(CompanyTextInput);
