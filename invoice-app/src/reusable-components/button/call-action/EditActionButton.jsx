import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
// import { TextField } from 'react-admin';
import { IconButton } from '@mui/joy';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


// *edu Sprawdzić czy lepiej zdefiniować funkcję poza komponentem,
    // czy może lepiej opakować ją callbackiem? Praktyka optymalizacji komponentów

const handlerCallbackAction = (event, copies) => {
    event.stopPropagation(); //*edu Doczytać o różnicy pomiędzy stopPropagation() vs preventDefault()
    alert(copies);
};

export const EditActionButton = (props) => {
    const [copies, setCopies] = useState(1);

    return(  
        <span> 
            <IconButton 
                color="primary"
                   sx={{ 
                    "--IconButton-size": "30px",
                    backgroundColor: 'transparent', //color: 'danger.900', 
                    // borderRadius: '25px', 
                    padding: 0,
                    '&:hover': {
                            // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                            // backgroundColor: 'danger.400',
                            // color: '#fff'
                        },
                }} 

                onClick={(event) => handlerCallbackAction(event, copies)}  
            {...props}
            >
                    <ModeEditIcon />
                </IconButton>
        </span>
    );
};