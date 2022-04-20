// in SexInput.js
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useInput } from 'react-admin';

const SexInput = props => {
    const {
        field,
        fieldState: { isTouched, invalid, error },
        formState: { isSubmitted }
    } = useInput(props);

    return (
        <Select
            label="Sex"
            {...field}
        >
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
        </Select>
    );
};
export default SexInput;