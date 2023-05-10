import * as React from 'react';
import { SelectInput, SelectInputProps } from 'react-admin';

import segments from '../selection-options/data';

const NewMobiSelectInput = (props) => (
    <SelectInput
        {...props}
        // source="groups"
        // translateChoice
        choices={segments}
    />
);

export default NewMobiSelectInput;