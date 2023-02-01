import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


export default function InputDecorators() {
    const [currency, setCurrency] = React.useState('dollar');
        return (
        <Input
            type='number'
            // style={{ maxWidth: "150px"}} 
            placeholder="Kwota"
            // startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
            endDecorator={
            <React.Fragment>
                <Divider orientation="vertical" />{"|"}
                <Input type="date" 
                    size="xs"
                    variant="plain"
                    value={currency}
                    // onChange={(_, value) => setCurrency(value!)}
                    onChange={(_, value) => setCurrency(value )}
                    sx={{ maxWidth: '140px', mr: -2.5, '&:hover': { bgcolor: 'transparent' } }}
                />
            </React.Fragment>
            }
            sx={{ width: 300, borderColor: 'grey' }}
        />
        );
    }
    