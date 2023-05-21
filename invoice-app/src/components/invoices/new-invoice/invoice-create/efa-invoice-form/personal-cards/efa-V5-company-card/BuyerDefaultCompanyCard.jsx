import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SellerIcon from "@mui/icons-material/Store";
import { Box, Button,  } from '@mui/material';
// import { ShowContent } from '../../../components/personal-cards/BuyerReferenceInput';
import { CardOverflow, SvgIcon } from '@mui/joy';
import NewBuyerReferenceInput from '../../../components/personal-cards/components/NewBuyerReferenceInput';
import { ShowContent } from '../../../components/personal-cards/BuyerReferenceCard';
import { DefaultCompanyCard } from './DefaultCompanyCard';
import { useTranslate } from 'react-admin';
import { CompanyCardHeader } from './components/CompanyCardHeader';
import { useWatch } from 'react-hook-form';
import { CompanyReferenceContext } from './components/CompanyReferenceContext';
import { AddressDetailsBuyer } from '../../../components/personal-cards/components/subcomponents/AddressDetailsBuyer';
import { ContactDetailsBuyer } from '../../../components/personal-cards/components/subcomponents/ContactDetailsBuyer';
import BuyerIcon from '@mui/icons-material/ShoppingCart';
import { BuyerCompanyCardHeader } from './components/BuyerCompanyCardHeader';

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

const BuyerCompanyHeader = (<CompanyCardHeader ><SellerIcon /> </CompanyCardHeader>);
const buyersResourcePath = 'dbclientlist';

export default function BuyerDefaultCompanyCard({icon, cardTitle, resourcePath }) {
    const [expanded, setExpanded] = React.useState(false);
    const translate = useTranslate();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const buyerId = useWatch({ name: "buyer_id" });
    const defaultSort = { field: 'company', order: 'ASC' };

    return (<>
        <Card  sx={{ border: '1px solid #e9e9e9', borderRadius: 2, boxShadow: 0 }} >
            <CompanyReferenceContext resource='buyersEfaktury' id={buyerId} >
                <BuyerCompanyCardHeader cardHeader={translate('myroot.form.label.header.buyer')}
                    suptitle={`${!buyerId ?  'Podaj Nabywcę'  : false  }`}
                    subtitle={false}
                    cardIcon={<BuyerIcon />}
                />
                <CardContent sx={{ py: 0,   ml: '75px', mb: -7 }}>
                    <Box  sx={{ marginRight: -4.5, marginLeft: 'auto', my: -2,   }} >
                    <Box
                        sx={{
                            position: "relative",
                            left: 0,
                            bottom: 0,
                            transform: `translateY(10%)`,   // translateX(1%)`,
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
                <CardActions  sx={{ alignItems: 'flex-end', py:0, my: -1.5, }} >
                    <Button size="small" onClick={handleExpandClick} sx={{   marginRight: -2.5, marginLeft: -1.75, paddingLeft: 1 }}
                            disabled={buyerId ? false : true }
                    >
                        Show
                    </Button>
                    <ExpandMore disabled={buyerId ? false : true }
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ my: -2, mx: -3.5 }}>
                        <AddressDetailsBuyer prefixFirstRow="ul. " capitionLabel={translate('myroot.form.label.header.address')}   />
                        <ContactDetailsBuyer  capitionLabel={translate('myroot.form.label.header.contact')} />
                    </CardContent>
                </Collapse>
            </CompanyReferenceContext>
        </Card>
        </>
    );
}
