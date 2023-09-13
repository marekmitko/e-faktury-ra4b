// in src/comments.js
import * as React from 'react';
import { Box, Card, CardHeader, CardContent, Typography } from '@mui/material';
import {
    DateField,
    EditButton,
    NumberField,
    TextField,
    BooleanField,
    useTranslate,
    useListContext,
    RecordContextProvider,
    ChipField,
} from 'react-admin';
import ClientField from './ClientField';
import TotalCostField from './subcomponents/TotalCostField';
// import CustomerReferenceField from '../../clients/visitors/CustomerReferenceField';

// import { Order } from '../types';

const MobileGrid = () => {
    const { data, isLoading } = useListContext();
    const translate = useTranslate();
    if (isLoading || data.length === 0) {
        return null;
    }
    return (
        <Box margin="0.5em">  
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Card sx={{ margin: '0.5rem 0' }}>
                        <CardHeader 
                            title={
                                <>
                                <Box sx={{ textTransform: 'capitalize', textAlign: 'center' }}>
                                    {translate('resources.e_faktury.name', 1)} {`nr: `} 
                                    <TextField
                                        source="invoice_id"
                                        variant="h6"
                                        fontWeight='500'
                                        />
                                    &nbsp;

                                    <Typography component='div' sx={{ mt: -.25, letterSpacing: -0.2 }} variant="body2" gutterBottom>
                                {translate('resources.e_faktury.show.header.date_submit')}
                                :&nbsp;
                                <DateField source="date_submit"  />
                                {/* <TextField source="payment_amount" showTime /> */}
                            </Typography>
                                        </Box>
                                </>
                            }
                            titleTypographyProps={{ variant: 'h6' }}
                            action={<EditButton />}
                            sx={{ mb: -1.5 }}
                        />
                        <CardContent sx={{  pt: 0, pl: 6, mb: -1 }}>
                            <Box>
                            <ClientField   sx={{ ml: -2, mb: 1 }}  />
                            </Box>
                            <Box>

                            <Typography variant="body2" gutterBottom
                            sx={{ textOverflow: 'ellipsis' }}
                            >
                                {translate(
                                    'resources.e_faktury.show.header.total'
                                )}
                                :&nbsp;
                                <TotalCostField  source="payment_amount"
                                sx={{ fontSize: '17px', fontWeight: '500' }}
                                />
                            </Typography>
                            <Typography sx={{ mt: -.25, letterSpacing: -0.2 }} variant="body2" gutterBottom>
                                {translate('resources.e_faktury.show.header.date_paid')}
                                :&nbsp;
                                <DateField source="date_paid"  />
                            </Typography>


{/* 
                            <Typography variant="body2" gutterBottom>
                                {translate('resources.e_faktury.show.header.date_submit')}
                                :&nbsp;
                                <DateField source="date_submit"  />
                                <TextField source="payment_amount" />
                            </Typography> */}
                            <Typography textAlign="right" variant="body2" gutterBottom>
                                {translate('resources.e_faktury.show.header.status')}
                                :&nbsp;
                                <TextField source="status" />
                                <ChipField sx={{ 
                                    '&.RaChipField-chip.MuiChip-root': { 
                                    my: -0.5,
                                    borderRadius: 2,
                                    '&.MuiChip-label': {
                                        padding: 0,
                                        }
                                    }
                                }} source='id' 
                                onDelete
                                size="small"
                            />
                            </Typography>
                                    </Box>
                        </CardContent>
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};

MobileGrid.defaultProps = {
    data: {},
    ids: [],
};

export default MobileGrid;