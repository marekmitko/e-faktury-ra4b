import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
// import { TextField } from 'react-admin';
import { IconButton } from '@mui/joy';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';


// *edu Sprawdzić czy lepiej zdefiniować funkcję poza komponentem,
    // czy może lepiej opakować ją callbackiem? Praktyka optymalizacji komponentów

const handlerCallbackAction = (event, copies) => {
    event.stopPropagation(); //*edu Doczytać o różnicy pomiędzy stopPropagation() vs preventDefault()
    alert(copies);
};

export const CancelActionButton = (props) => {
    const [copies, setCopies] = useState(1);

    return(  
        <span> 
            <IconButton
                sx={{
                    "--IconButton-size": "30px"
                }}
                onClick={(event) => handlerCallbackAction(event, copies)}  
                >
                    <DeleteSweepRoundedIcon />
                </IconButton>
        </span>
    );
};