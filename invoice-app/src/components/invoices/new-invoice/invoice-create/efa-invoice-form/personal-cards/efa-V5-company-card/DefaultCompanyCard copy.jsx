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
import { Box, Button, SvgIcon } from '@mui/material';
// import { ShowContent } from '../../../components/personal-cards/BuyerReferenceInput';
import { CardOverflow } from '@mui/joy';
import NewBuyerReferenceInput from '../../../components/personal-cards/components/NewBuyerReferenceInput';
import { ShowContent } from '../../../components/personal-cards/BuyerReferenceCard';
import { CompanyCardHeader } from './components/CompanyCardHeader';



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

export function DefaultCompanyCard(props) {
// export   const DefaultCompanyCard = React.forwardRef((props, ref) => { 
    const { icon, title, cardTitle, cardSubtitle, resourcePath, cardHeader } = props;
    

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

     


    return (
        <Card sx={{ border: '1px solid #e9e9e9', borderRadius: 3 }} >
{/* <MyHeader /> */}
{cardHeader ? cardHeader :""}
            <CardHeader sx={{ py:0, my: 0 }}
                    avatar={ 
                <Box display="flex" sx={{ ml: -2, mr: 0,  mb: -2 }} >
                        <Avatar
                            src={<SellerIcon sx={{ fontSize: '40px', color: 'primary.900', opacity: 1 }}/>}
                            sx={{ bgcolor: 'primary.50', p: 3.2 ,  opacity: .9,
                                        borderBottomRightRadius: '42px',
                                        borderTopLeftRadius: '0',
                        }} aria-label="recipe">
                    <>
                        <Box   className="icon">
                            <SvgIcon //shapeRendering 
                                sx={{   color: 'primary.900',
                                        fontSize: '45px'
                                }}
                                viewBox="-4 2 44 37"
                                
                            >
                                {icon ? icon : ''}
                            </SvgIcon>
                                {/* {ref?.icon ? ref.icon : ''} */}
                            {/* <SellerIcon sx={{ fontSize: '40px', color: 'primary.900', opacity: 1 }}/> */}
                            {/* {React.createElement(icon, { fontSize: 'large' })} */}
                            {/* {icon ? icon : ''} */}
                        </Box>
                        <Box textAlign="left">
                            <Typography variant="h5" component="h2">
                                {title || ' '}
                            </Typography>
                        </Box>

                    </>
                </Avatar>
                    </Box>
                }
                action={  
                    <CardOverflow
                        variant="soft"
                        // color="neutral"
                        sx={{
                            mx: 0,
                            px: 0.1,
                            py: 0.1,
                            pl: 4,
                            pb: 0,
                            mr: -1,
                            ml: -2,
                            // writingMode: "vertical-rl",
                            // textAlign: "left",
                            // fontSize: "xs3",
                            // fontWeight: "xl2",
                            // letterSpacing: "2px",
                            textTransform: "uppercase",
                            borderBottomLeftRadius: '15px',
                            bgcolor: "neutral.50",
                            border: '1px solid',
                            borderColor: "neutral.100"
                        }}
                    >
                <Typography level="body2"  sx={{ color: 'neutral.700',      mb: -0.25, mt: 0.25, }}   width="200px" //width="15em"
                >
                    MVA: <b>{'415415'}</b>
                </Typography>
                    </CardOverflow>
                
                // <Typography variant="body2" color="text.secondary">MVA: 1234567 </Typography>
                // <IconButton aria-label="settings">
                //     <MoreVertIcon />
                // </IconButton>
                }
                title={
                    <Typography variant="h6" color="text.secondary" component="div" sx={{ ml: -1, color: 'primary.900' }} >
                        {cardTitle ? cardTitle : "Title"}
                    </Typography>
                }
                subheader={
                    <Box sx={{ my: -1, ml: -1.1 }}>
                        {cardSubtitle  ? cardSubtitle : "Subtitle"}
                    </Box>
                }
            />
        <CardContent sx={{ py: 0, pl: 8, my: 0 }}>
            <Box  display='flex' >
                {/* <Typography variant="body2" color="text.secondary">
                    Coś?
                </Typography> */}
                <Box  sx={{ marginRight: -4.5, marginLeft: 'auto', my: -2, mb: -3, minWidth: '388px'}} >
                    <NewBuyerReferenceInput
                        //  buyerId={buyerId}
                        source="buyer_id"
                        reference={resourcePath}
                        // validate={required()}
                        perPage={10000}
                        //  sort={defaultSort}
                    />
                </Box>
            </Box>
        </CardContent>
        <CardActions  sx={{ alignItems: 'flex-end', py:0, my: 0 }} >
            {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton> */}
            <Button size="small" onClick={handleExpandClick} sx={{ marginRight: -1.5, marginLeft: -1.75, paddingLeft: 1 }}>
                Show
            </Button>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
{/* 
            <CardOverflow
            sx={{
            m: 0,
            borderBottomRightRadius: 0
            }}
        >
            <Divider /> 
            <CardOverflow
            variant="soft"
            // color="neutral"
            
            sx={{
                mx: 0,
                px: 0.1,
                py: 0.1,
                pl: 4,
                pb: 0,
                mr: -1,
                ml: 1,
                // writingMode: "vertical-rl",
                // textAlign: "left",
                // fontSize: "xs3",
                // fontWeight: "xl2",
                // letterSpacing: "2px",
                textTransform: "uppercase",
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: expanded ? '10px' : 0,
                bgcolor: "neutral.50",
                border: '1px solid',
                borderColor: "neutral.100"
            }}
            >
        <Typography level="body2"  sx={{ color: 'neutral.700'}}   width="200px" //width="15em"
        >
            MVA: <b>{'415415'}</b>
        </Typography>
            </CardOverflow>
        </CardOverflow> */}


        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <NewBuyerReferenceInput 
                    source="buyer_id"
                    reference={resourcePath}
                    perPage={10000}
                >
                    <ShowContent resourcePath={resourcePath} buyerId={'bElyxvi'}/>
                </NewBuyerReferenceInput>
            </CardContent>
        </Collapse>
        </Card>
    );
// });
}
