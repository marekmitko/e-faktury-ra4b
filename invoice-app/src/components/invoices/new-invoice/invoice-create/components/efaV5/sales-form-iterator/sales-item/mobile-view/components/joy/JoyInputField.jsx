import * as React from "react";
 
import JoyFormControl from '@mui/joy/FormControl';
import JoyFormLabel from '@mui/joy/FormLabel';
import JoyFormHelperText from '@mui/joy/FormHelperText';
import JoyInput from '@mui/joy/Input';





// JoyInputField
export function JoyInputField(props){
    const { textHelper, defaultValue, hiddenLabel, hiddenTextHelper, ...rest } = props;

    return(<>
        <JoyFormControl   
            id={props?.id ? props.id : ( props.name || props.name  || "" ) }
            required={props?.required ? true : false}
            size={props?.size ? props.size : 'sm'}
            color={props?.color ? props.color : 'primary'}
            error={props?.error ? true : false}
            sx={{ 
                // minWidth: '100%',
                '& div.Joy-error': {
                    borderLeftWidth: '7px',
                    // borderLeftColor: 'var(--mui-palette-danger-outlinedBorder)'
                    borderLeftColor: 'danger.outlinedHoverBorder',
                    "--Input-focusedThickness": "none",
                    // "--Input-placeholderOpacity": 0.1,
                    "& input": { bgColor: 'blue'},
                    "--Input-placeholderColor": 'blue',

                    // "& .placeholder": { color: 'green'}
                },
            }}
        >
               { !hiddenLabel &&
                    <JoyFormLabel>
                        {props?.label ? props.label : props?.name }
                    </JoyFormLabel>
                }
            <JoyInput
            // --mui-palette-danger-outlinedBorder: var(--mui-palette-danger-200);
                // sx={{    '& button.mui-palette-danger-outlinedBorder': 'green'} }
                // sx={(theme) => ( {     '& .mui-palette-danger-outlinedBorder': 'green'} ) }
               


                placeholder={props?.placeholder ? props.placeholder : '' }
                name={props?.name ? props.name : '' }
                // type="tel"
                type={props?.type ? props.type : '' }
                // autoComplete={props?.autoComplete ? "on" : "off" }
                autoComplete="off"
                autoFocus={props?.autoFocus ? true : false }
                error={props?.error ? true : false}
                // fullWidth={props?.fullWidth ? true : false }
                fullWidth={true}
                defaultValue={ defaultValue ?  defaultValue : "" }
                variant={props?.variant ? props.variant : "outlined"} 
                {...rest}
            />
            { !hiddenTextHelper &&
                <JoyFormHelperText   sx={{ mt: '2px'}}>
                    { props?.textHelper ? props.textHelper : '' }
                </JoyFormHelperText>
            }
        </JoyFormControl>
        
    </>)
}






















// 333
const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
//   const Input = styled(InputUnstyled)(
//     ({ theme }) => `
    
//     display: inline-block;
  
//     .${inputUnstyledClasses.input} {
//       width: 320px;
//       font-size: 0.875rem;
//       font-family: IBM Plex Sans, sans-serif;
//       font-weight: 400;
//       line-height: 1.5;
//       color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//       background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
//       border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
//       border-radius: 8px;
//       padding: 12px 12px;
  
//       &:hover {
//         background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
//         border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//       }
  
//       &:focus {
//         outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
//       }
//     }
  
//     &.filled .${inputUnstyledClasses.input} {
//       box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
//     }
//   `,
//   );



