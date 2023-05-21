import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SellerIcon from "@mui/icons-material/Store";
import { Box, Button, TextField, useMediaQuery,  } from '@mui/material';
import { useTranslate } from 'react-admin';
import { CompanyCardHeader } from './subcomponent/CompanyCardHeader';
import { useWatch } from 'react-hook-form';
import { CompanyReferenceContext } from './CompanyReferenceContext';
import { AddressDetailsBuyer } from '../../../../components/personal-cards/components/subcomponents/AddressDetailsBuyer';
import { ContactDetailsBuyer } from '../../../../components/personal-cards/components/subcomponents/ContactDetailsBuyer';
import NewBuyerReferenceInput from '../../../../components/personal-cards/components/NewBuyerReferenceInput';
import { Stack,   } from "@mui/joy";
import { SellerCompanyNameField } from './subcomponent/SellerCompanyNameField';
import { MQ_isMedium } from '../../../components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles';



const cssDisabled = {
    sx: { opacity: 0.85, },
    sxIcon: { bgcolor: 'neutral.100', },
    sxSvg: { color: 'neutral.600', mt: '5px' },
    sxHeader: { color: 'neutral.600', },
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton size='small' sx={{ mt: 1 }} {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginRight: 'auto',
        marginLeft: '0px',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
    }),
}));
const mySx = {  minHeight: {xs: '72px', sm: '72px', md: '80px' }, border: '1px solid #e9e9e9', borderRadius: 2, boxShadow: 0 };

export default function SellerCompanyCard({icon= <SellerIcon />, cardTitle, resourcePath, userId, sx }) {
    const [expanded, setExpanded] = React.useState(false);
    const translate = useTranslate();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const buyerId = userId;
    const defaultSort = { field: 'company', order: 'ASC' };





    const isMedium = useMediaQuery(`${MQ_isMedium}`);




    return (<>
        <Card sx={ sx ? {...mySx, ...sx } : {...mySx}  
        // sx={{ border: '1px solid #e9e9e9', borderRadius: 2, boxShadow: 0,
        //             opacity: 0.85 //added
         } >
            <CompanyReferenceContext resource={resourcePath} id={buyerId} >
                <CompanyCardHeader  {...cssDisabled }
                
                    cardIcon={icon}  
                    cardHeader={translate('myroot.form.label.header.seller')}
                    suptitle={`${buyerId ? false : translate('myroot.form.label.header.buyerCardHeader_supporting_text')  }`}
                />
                <CardContent sx={{ py: 0,   ml: '75px', mb: -7 }}>
                    <Box  sx={{ marginRight: -4.5, marginLeft: 'auto', my: -2,   }} >
                    <Box
                        sx={{ minHeight: '31.4px', maxHeight: "40.5",
                            position: "relative",
                            right: 0,
                            bottom: { xs: '-20px', md: '-11px' },
                            // transform: `translateY(55%)`,   // translateX(1%)`,
                        }}
                    >
                          <Stack direction="row" ml={0} mb='-10px' mr={2} spacing={2} >
                           <SellerCompanyNameField />
                    </Stack>
                        </Box>
                    </Box>
                </CardContent> 
                <CardActions  sx={{ alignItems: 'flex-end', py:0, my: -1.5,  visibility: isMedium ? 'visible' : 'hidden'   }} >
                    <Button size="small" onClick={handleExpandClick}            //addedDisabledStyle
                     sx={{ marginRight: -2.5, marginLeft: -1.75, paddingLeft: 1, color: 'neutral.700', 
                    }}
                            disabled={buyerId ? false : true }
                    >
                        { translate('myroot.form.label.header.show') }
                    </Button>
                    <ExpandMore disabled={buyerId ? false : true }   aria-label="show more"
                        expand={expanded} onClick={handleExpandClick}  aria-expanded={expanded}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={ !isMedium ? true : expanded } timeout="auto" unmountOnExit>
                    <CardContent sx={{ my: -2, mx: -3.5 }}>
                        <AddressDetailsBuyer prefixFirstRow={`${translate('myroot.form.label.header.street_prefix')} `}
                            capitionLabel={translate('myroot.form.label.header.address')}   />
                        <ContactDetailsBuyer  capitionLabel={translate('myroot.form.label.header.contact')} />
                    </CardContent>
                </Collapse>
            </CompanyReferenceContext>
        </Card>
        </>
    );
}
