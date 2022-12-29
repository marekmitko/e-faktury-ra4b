import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Apartment from "@mui/icons-material/Apartment";
import Checkbox, { checkboxClasses } from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import {TableHead, TableBody, TableRow, TableCell} from "@mui/material";
import JoyTextField from '@mui/joy/TextField';

















export default function EnhancedRow({ item }) {
    // const [members, setMembers] = React.useState([false, true, false]);
    // const toggleMember = (index) => (event) => {
    // const newMembers = [...members];
    // newMembers[index] = event.target.checked;
    // setMembers(newMembers);
    // };

    // console.log("members", ....members);

    return (
    <>
        
       

                <TableRow key={item.name}>
                    <TableCell>{item.idx}</TableCell>
                    <TableCell>
                        <JoyTextField color="primary" variant="plain" placeholder="Wprowadź produkt" />
                    </TableCell>
                    <TableCell>
                        <JoyTextField color="primary" variant="plain" placeholder="Wybierz" />
                    </TableCell>
                    {/* <TableCell>{item.name}</TableCell> */}
                    <TableCell align="right">{item.qty} </TableCell>
                    <TableCell align="right">
                        {" "}
                        {(item.price * 0.84).toFixed(2)}{" "}
                    </TableCell>
                    <TableCell align="right">
                        {(item.subtotal * 0.84).toFixed(2)}
                    </TableCell>
                </TableRow>

    </>
);
}
