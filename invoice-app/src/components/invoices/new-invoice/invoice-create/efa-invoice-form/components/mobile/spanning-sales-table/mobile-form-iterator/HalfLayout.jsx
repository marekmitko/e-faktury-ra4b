import { Box, CardContent,  } from "@mui/joy";
import { Card, CardHeader, Grid, Typography } from "@mui/material";





export const HalfLayout = ({children}) => (

    <Grid
    item
    xs={12}
    sm={  6}
    md={  6} 
>  
<Card>
    <CardHeader
        // title={tier.title}
        // subheader={tier.subheader}
        // titleTypographyProps={{ align: "center" }}
        // action={tier.title === "Pro" ? <StarIcon /> : null}
        subheaderTypographyProps={{
            align: "center"
        }}
        sx={{
            backgroundColor: (theme) =>
            theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700]
        }}
    />
    <CardContent sx={{ bgcolor: 'neutral.100' }}>
        
            {children? children : ''}
    </CardContent>
  
    </Card>
</Grid>


);