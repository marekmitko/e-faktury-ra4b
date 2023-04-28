import { TextInput } from 'react-admin';

const convertStringToNumber = value => {
    if (value == null || value === '') {
        return null;
    }
    const float = parseFloat(value);
    return isNaN(float) ? 0 : float;
};

export const InputTextNumber = ({parse, type, ...props}) => (
    <TextInput  type="number" parse={convertStringToNumber} {...props} />
);