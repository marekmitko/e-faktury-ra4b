import * as React from 'react';
import Stack from '@mui/joy/Stack';
import JoyTextField from '@mui/joy/TextField';
import Chip from '@mui/joy/Chip';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

export default function TextFieldDecorator() {
  return (
    <Stack direction="column" spacing={0}>
        <JoyTextField
            variant='soft'
            // color="secondary"
            label="Dane Nabywcy"
            placeholder="Wpisz Nabywcę"
            startDecorator={<EditIcon />} 
            endDecorator={
                <Chip size="sm" variant="soft">
                    NABYWCA
                </Chip>  // <CheckIcon />
            }

        />
        <JoyTextField
            disabled
            variant='soft'
            label={null}
            placeholder="Efremtid sp. zoo"
            startDecorator={<PersonRoundedIcon />}
            sx={{ mt: '5px', mb: 0, p: 0 }}
            endDecorator={
            <Chip size="sm" variant="soft">
                WYSTAWCA
            </Chip>
            }
        />
    </Stack>
  );
}
