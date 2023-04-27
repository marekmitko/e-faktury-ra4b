import * as React from 'react';

// import OrientationSwitch from './components/OrientationSwitch';
import { Card, CardOverflow, Chip, Grid, Input } from '@mui/joy';
import { Controller } from 'react-hook-form';
import DatePickerGroup from './DatePickerGroup';


export default function HeaderDateGroup( ) {



    return(
        <>
            <Card sx={{ pt: 1, display: 'flex', flexFlow: 'row wrap', gap: 1, boxShadow: 'none' }} >
                <DatePickerGroup />
            </Card>
        </>
        )
}