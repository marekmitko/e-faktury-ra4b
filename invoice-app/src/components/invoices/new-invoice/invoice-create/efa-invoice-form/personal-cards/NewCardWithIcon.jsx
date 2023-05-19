import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SellerIcon from "@mui/icons-material/Store";
import { Box, Button } from '@mui/material';
import { ShowContent } from '../../components/personal-cards/BuyerReferenceCard';
import { CardOverflow } from '@mui/joy';


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

export default function NewCardWithIcon({icon, title }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <Card sx={{ border: '1px solid #e9e9e9', borderRadius: 3 }} >
        <CardHeader sx={{ py:0, my: 0 }}
                avatar={ 
            <Box display="flex" sx={{ ml: -2, mr: 0,  mb: -2 }} >
                    <Avatar sx={{ bgcolor: 'primary.50', p: 3.5 , borderRadius: '0 0 42px 0', opacity: .9  }} aria-label="recipe">
                <>
                    <Box width="1.8em"  className="icon">
                        <SellerIcon sx={{ fontSize: '40px', color: 'primary.900', opacity: 1 }}/>
                        {/* {React.createElement(icon, { fontSize: 'large' })} */}
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
            action={  <Typography variant="body2" color="text.secondary">MVA: 1234567 </Typography>
            // <IconButton aria-label="settings">
            //     <MoreVertIcon />
            // </IconButton>
            }
            title={  <Typography variant="h6" color="text.secondary" component="div" sx={{ ml: -1, color: 'primary.900' }} >
            Nabywca
          </Typography>}
            // subheader="September 14, 2016"
        />
        <CardContent sx={{ py: 0, pl: 8, my: 0 }}>
            <Typography variant="body2" color="text.secondary">
            Coś tu dołożyć?
            </Typography>
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

            <CardOverflow
            sx={{
            m: 0,
            borderBottomRightRadius: 0
            }}
        >
            {/* <Divider /> */}
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
                bgcolor: "neutral.100"
            }}
            >
        <Typography level="body2"  sx={{ color: 'neutral.700'}}   width="200px" //width="15em"
        >
            MVA: <b>{'415415'}</b>
        </Typography>
            </CardOverflow>
        </CardOverflow>


        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <ShowContent />
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
            </Typography>
            <Typography paragraph>
                Heat oil in a 
            </Typography>
            <Typography paragraph>
                Add rice and stir very gently to distribute. 
                minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    );
}
