import * as React from 'react';
import { useEffect, useState, useCallback, Fragment } from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from '@mui/joy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <ExpandMoreIcon size='small' sx={{ mt: 1 }} {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginRight: 'auto',
        marginLeft: '0px',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
    }),
}));

const ExpandMoreIconButton = (props) => {
    const {disabled} = props;
    const [expand, setExpand] = React.useState(false);
    const handleExpandClick = () => {
        setExpand(!expand);
    };
    return(
    <ExpandMore variant='plain' disabled={disabled ? true : false }   aria-label="show more"
        expand={expand} onClick={handleExpandClick}  aria-expanded={expand}
        sx={{   color: 'text.tertiary',
                backgroundColor: 'transparent',
            }}
    />
//     <ExpandMoreIcon />
// </ExpandMore>
)};

export default ExpandMoreIconButton; 