import * as React from 'react';
import JoyBox from '@mui/joy/Box';
import JoyCheckbox, { checkboxClasses } from '@mui/joy/Checkbox';
import JoySheet from '@mui/joy/Sheet';

export default function CheckboxText() {
  return (
    <JoyBox
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        '& > div': { p: 2, boxShadow: 'sm', borderRadius: 'xs', display: 'flex' },
      }}
    >
      <JoySheet variant="outlined" sx={{ bgcolor: 'background.body' }}>
        <JoyCheckbox overlay label="It works with any parent" />
      </JoySheet>
      <JoySheet variant="outlined" sx={{ bgcolor: 'background.body' }}>
        <JoyCheckbox
          label="Focus outline covers the parent!"
          overlay
          // Force the outline to appear in the demo. Usually, you don't need this in your project.
        //   slotProps={{ action: { className: checkboxClasses.focusVisible } }}
        />
      </JoySheet>
    </JoyBox>
  );
}
