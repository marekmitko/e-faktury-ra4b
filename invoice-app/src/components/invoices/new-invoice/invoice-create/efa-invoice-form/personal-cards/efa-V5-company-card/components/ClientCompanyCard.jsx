import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SellerIcon from "@mui/icons-material/Store";
import { Box, Button, useMediaQuery,  } from '@mui/material';
import { useTranslate } from 'react-admin';
import { CompanyCardHeader } from './subcomponent/CompanyCardHeader';
import { useWatch } from 'react-hook-form';
import { CompanyReferenceContext } from '../components/CompanyReferenceContext';
import { AddressDetailsBuyer } from '../../../../components/personal-cards/components/subcomponents/AddressDetailsBuyer';
import { ContactDetailsBuyer } from '../../../../components/personal-cards/components/subcomponents/ContactDetailsBuyer';
import BuyerIcon from '@mui/icons-material/ShoppingCart';
import NewBuyerReferenceInput from '../../../../components/personal-cards/components/NewBuyerReferenceInput';
import { MQ_isMedium } from '../../../components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles';




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

const buyersResourcePath = 'dbclientlist';
const mySx = { minHeight: {xs: '72px', sm: '72px', md: '80px' }, border: '1px solid #e9e9e9', borderRadius: 2, boxShadow: 0,};

export default function ClientCompanyCard({icon=<BuyerIcon/>, cardTitle, resourcePath, sx }) {
    const [expanded, setExpanded] = React.useState(false);
    const translate = useTranslate();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const buyerId = useWatch({ name: "buyer_id" });
    const defaultSort = { field: 'company', order: 'ASC' };


    const isMedium = useMediaQuery(`${MQ_isMedium}`);


    return (<>
        <Card  sx={ sx ? {...mySx, ...sx } : {...mySx} } >
            <CompanyReferenceContext resource={resourcePath} id={buyerId} >
                <CompanyCardHeader cardIcon={icon}   sxSvg={{ mt: '7px' }}
                    cardHeader={translate('myroot.form.label.header.buyer')}
                    suptitle={`${buyerId ? false : translate('myroot.form.label.header.buyerCardHeader_supporting_text')  }`}
                />
                <CardContent className='company-card-content-name' sx={{ py: 0,   ml: '75px', mb: -7 }}>
                    <Box  sx={{ marginRight: -4.5, marginLeft: 'auto', my: -2,   }} >
                    <Box
                        sx={{
                            position: "relative",
                            right: 0,
                            bottom: { xs: '-9px', md: '0' },
                            // transform: `translateY(0px)`,   // translateX(1%)`,
                        }}
                    >
                        <NewBuyerReferenceInput
                            // buyerId={buyerId}
                            source="buyer_id"
                            // reference={resourcePath}
                            reference={'buyersEfaktury'}
                            // validate={required()}
                            perPage={10000}
                            sort={defaultSort}
                        />
                        </Box>
                    </Box>
                </CardContent> 
                <CardActions  sx={{ alignItems: 'flex-end', py:0, my: -1.5,  visibility: isMedium ? 'visible' : 'hidden'   }} >
                    <Button size="small" onClick={handleExpandClick} sx={{   marginRight: -2.5, marginLeft: -1.75, paddingLeft: 1 }}
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
