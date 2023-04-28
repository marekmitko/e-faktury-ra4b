import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import JoyInput from '@mui/joy/Input';



export const JoyTextField = (props) => {
    const {
        id="Id",
        required,
        size="sm",
        color="primary",
        placeholder="Placeholder",
        name,
        type='number',
        autoComplete="off",
        autoFocus,
        error,
        fullWidth,
        defaultValue="DefaultValue",
        variant="outlined",
        label,
        msgError, 
        value,
        onChange,
    } = props;

    return(

            <FormControl
            id={id}
            required={required}
            size={size}
            color={color}
            error={error}
            >
                <FormLabel id={`${id}-label`} >
                    {label ? label : name }
                </FormLabel>
                <JoyInput
                    value={value}
                    onChange={ onChange}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    // error={error}
                    fullWidth={fullWidth}
                    defaultValue={defaultValue}
                    variant={variant}
                />
                <FormHelperText id={`${id}-helper-text`}  sx={{color: 'error'}} >
                    {msgError}!
                </FormHelperText>
            </FormControl>

    );
}; 
