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

// const iconAvatarHeader = (
//     <Box display="flex" sx={{ ml: -2, mr: 0,  mb: -2 }} >
//     <Avatar
//         src={<SellerIcon sx={{ fontSize: '40px', color: 'primary.900', opacity: 1 }}/>}
//         sx={{ bgcolor: 'primary.50', p: 3.2 ,  opacity: .9,
//                     borderBottomRightRadius: '42px',
//                     borderTopLeftRadius: '0',
//     }} aria-label="recipe">
// <>
//     <Box   className="icon">
//         <SvgIcon //shapeRendering 
//             sx={{   color: 'primary.900',
//                     fontSize: '45px'
//             }}
//             viewBox="-4 2 44 37"
            
//         >
//         {/*  {cardIcon? cardIcon : ""} */}
//             <SellerIcon />
//             {/* { children ? children : ''} */}
//         </SvgIcon>
//     </Box>
//     <Box textAlign="left">
//         <Typography variant="h5" component="h2">
//             {title || ' '}
//         </Typography>
//     </Box>

// </>
// </Avatar>
// </Box>
// );





const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton size='small' {...other} />;
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





const MyIcon = () => (<SvgIcon //shapeRendering 
    sx={{   color: 'primary.900',
            fontSize: '45px'
    }}
    viewBox="-4 3 44 37"


    > <BuyerIcon/>
    </SvgIcon>
);
export default function BuyerCompanyCard({icon, cardTitle, resourcePath }) {



    const [expanded, setExpanded] = React.useState(false);
    const translate = useTranslate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const buyerId = useWatch({ name: "buyer_id" });

    const defaultSort = { field: 'company', order: 'ASC' };

    
    // const isMedium = useMediaQuery(`${MQ_isMedium}`);





    return (<>
            {/* <Card sx={ (theme) => ({
                border: `1px solid ${theme.vars.palette.divider}`,
                borderRadius: 2, boxShadow: 'sm' 
                })} > */}
                <Card  sx={{ border: '1px solid #e9e9e9', borderRadius: 2, boxShadow: 0 }} >
            <BuyerCompanyCardHeader cardTitle={translate('myroot.form.label.header.buyer')}
                    cardSubtitle={'.'}
                    // cardIcon={<SellerIcon />}
                >
                    {`${buyerId ? buyerId : 'Podaj Nabywcę'}`}
                </BuyerCompanyCardHeader>
                <CardContent sx={{ py: 0, pl: 8, my: 0 }}>
            <Box  display='flex' >
                {/* <Typography variant="body2" color="text.secondary">
                    Coś?
                </Typography> */}
                <Box  sx={{ marginRight: -4.5, marginLeft: 'auto', my: -2, mb: -3, //minWidth: '80%' 
            }} >
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
        <CardActions  sx={{ alignItems: 'flex-end', py:0, my: 0 }} >
            <Button size="small" onClick={handleExpandClick} sx={{ marginRight: -1.5, marginLeft: -1.75, paddingLeft: 1 }}
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
            <CompanyReferenceContext resource='buyersEfaktury' id={buyerId} >
                <CardContent>
                    <AddressDetailsBuyer prefixFirstRow="ul. " capitionLabel={translate('myroot.form.label.header.address')}   />
                    <ContactDetailsBuyer  capitionLabel={translate('myroot.form.label.header.contact')} />
                </CardContent>
            </CompanyReferenceContext>
        </Collapse>
            </Card>
            </>
    );
}
