import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
// import { TextField } from 'react-admin';
import Input from '@mui/joy/Input';


// *edu Sprawdzić czy lepiej zdefiniować funkcję poza komponentem,
    // czy może lepiej opakować ją callbackiem? Praktyka optymalizacji komponentów

const handlerCallbackAction = (event, copies) => {
    event.stopPropagation(); //*edu Doczytać o różnicy pomiędzy stopPropagation() vs preventDefault()
    alert(copies);
};

export const PrintActionButton = (props) => {
    const [copies, setCopies] = useState(1);

    return(  
        <span> 
            <Input label="Number of copies" />
            <Button variant="contained" color="primary"
            onClick={(event) => handlerCallbackAction(event, copies)}   // PROBLEM: this is NOT called when user click the button
            >
                Print
            </Button>
        </span>
    );
};