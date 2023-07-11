import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
// import { TextField } from 'react-admin';
import { IconButton } from '@mui/joy';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


// *edu Sprawdzić czy lepiej zdefiniować funkcję poza komponentem,
    // czy może lepiej opakować ją callbackiem? Praktyka optymalizacji komponentów

const handlerCallbackAction = (event, copies) => {
    event.stopPropagation(); //*edu Doczytać o różnicy pomiędzy stopPropagation() vs preventDefault()
    alert(copies);
};

export const DownloadActionButton = (props) => {
    const [copies, setCopies] = useState(1);

    return(  
        <span> 
            <IconButton
                  sx={{ 
                    "--IconButton-size": "30px",
                    backgroundColor: 'transparent', color: 'primary.900', 
                    // borderRadius: '25px', 
                    padding: 0,
                    '&:hover': {
                            // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                            backgroundColor: 'primary.900',
                            color: '#fff'
                        },
                }} 
                onClick={(event) => handlerCallbackAction(event, copies)}  
                {...props}
                >
                <PictureAsPdfIcon />
                </IconButton>
        </span>
    );
};