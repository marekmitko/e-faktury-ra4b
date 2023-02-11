import { useController, useWatch, Controller } from 'react-hook-form';
import { Card, Grid, Checkbox, FormControlLabel} from '@mui/material';
import Close from '@mui/icons-material/Close';


export const EhfOptionbox = ({label, children}) => {
    const EHFCheckbox  = useController({ name: 'ehf', defaultValue: false, });
    // console.log("EHFCheckbox", moreDetailEHF);
    return( 

//*edu Przeanalizować to w tym kontekście - https://react-hook-form.com/api/usecontroller/           ("+atrybut rules")

        <FormControlLabel
        // sx={{ minWidth: 100 }}
            label={<span style={{ display: 'block', margin: "auto",   minWidth: 100, height: 25}}>{label}</span>}
            labelPlacement='start'
            // uncheckedIcon={<Close/>}
            control={
                <span>
                    <Checkbox {...EHFCheckbox.field}
                        onChange={(e) => { EHFCheckbox.field.onChange(e.target.checked) }}
                        checked={EHFCheckbox.field.value}
                        icon={<Close/>}
                        label={label}
                    />{ children ? children : " " }
                </span>
            }
        />

    );
};