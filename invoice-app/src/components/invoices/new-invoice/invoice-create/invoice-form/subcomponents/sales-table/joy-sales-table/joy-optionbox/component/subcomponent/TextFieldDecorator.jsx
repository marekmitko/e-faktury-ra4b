import * as React from 'react';
import Stack from '@mui/joy/Stack';
import JoyTextField from '@mui/joy/Input';
import Chip from '@mui/joy/Chip';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useRecordContext } from 'react-admin';
import { useFormContext, Controller } from 'react-hook-form';

export default function TextFieldDecorator(props) {
  const record = useRecordContext();
  const { control } = useFormContext();

  return (
    <Stack direction="column" spacing={0}>
        <Controller
            control={control}
            name="buyer_ref"
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
            }) => (
                // <Checkbox
                // onBlur={onBlur} // notify when input is touched
                // onChange={onChange} // send value to hook form
                // checked={value}
                // inputRef={ref}
                // />
                <JoyTextField
                // defaultValue={`${record.buyer_ref}`}
                variant='soft'
                // name={name}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value}
                inputRef={ref}
                placeholder="Wpisz Nabywcę"
                startDecorator={<EditIcon />} 
                endDecorator={
                    <Chip size="sm" variant="soft">
                    NABYWCA
                </Chip> 
            }
            
            />
            )}
                />
        {/* <JoyTextField 
            defaultValue={`${record.user_ref ? record.user_ref : null }`}
            variant='soft'
            label={null}
            // size='small'
            placeholder="Wpisz Wystawcę"
            startDecorator={<PersonRoundedIcon />}
            sx={{ mt: '5px', mb: 0, p: 0 }}
            endDecorator={
            <Chip size="sm" variant="soft">
                WYSTAWCA
            </Chip>
            }
        /> */}
    </Stack>
  );
}
