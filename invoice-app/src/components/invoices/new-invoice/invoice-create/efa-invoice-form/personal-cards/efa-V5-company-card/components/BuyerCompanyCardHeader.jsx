import * as React from "react";
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
import { useRecordContext, useReferenceInputController, useResourceContext } from "react-admin";
// import NewBuyerReferenceInput from '../../../components/personal-cards/components/NewBuyerReferenceInput';
// import { ShowContent } from '../../../components/personal-cards/BuyerReferenceCard';
import BuyerIcon from '@mui/icons-material/ShoppingCart';








export const BuyerCompanyCardHeader = (props) => { 
     
        const {icon, title, subtitle, cardTitle, cardSubtitle, children , cardIcon } = props;

    return (
            <CardHeader sx={{ py:0, my: 0 }}
                avatar={ 
                    <Box display="flex" sx={{ ml: -2, mr: 0,  mb: -2 }} >
                            <Avatar
                                // src={<SellerIcon sx={{ fontSize: '40px', color: 'primary.900', opacity: 1 }}/>}
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
                                {/*  {cardIcon? cardIcon : ""} */}
                                    <BuyerIcon />
                                    {/* { children ? children : ''} */}
                                </SvgIcon>
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
                                pl: 1,
                                pr: 1,
                                pb: 0,
                                mr: -1,
                                ml: -2,
                                // writingMode: "vertical-rl",
                                // textAlign: "left",
                                // fontSize: "xs3",
                                // fontWeight: "xl2",
                                // letterSpacing: "2px",
                                textTransform: "uppercase",
                                borderBottomLeftRadius: '10px',
                                bgcolor: "neutral.50",
                                border: '1px solid',
                                borderColor: "neutral.100"
                            }}
                        >
                    <Typography level="body3"  sx={{ color: 'neutral.700', pl: 0, pr: 'auto', display: 'flex',    mb: -0.25, mt: 0.25, }}     //width="15em"
                    ><small><small>MVA: </small>  { children ? children : ''} </small> 
                      
                    </Typography>
                        </CardOverflow>

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
            />)
 
                };