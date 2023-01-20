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
import JoySelect from '@mui/joy/Select';
import JoyOption from '@mui/joy/Option';
import { selectClasses } from '@mui/joy/Select';






function SelectBasic() {
    const action = React.useRef(null);
    return (
      <JoySelect 
    //   action={action}
        
      defaultValue="dog">
        <JoyOption value="dog">Dog  </JoyOption>
        <JoyOption value="cat">Cat  </JoyOption>
        <JoyOption value="fish">Fish</JoyOption>
        <JoyOption value="bird">Bird</JoyOption>
      </JoySelect>
    );
}










export default function EnhancedRow({ item }) {
    // const [members, setMembers] = React.useState([false, true, false]);
    // const toggleMember = (index) => (event) => {
    // const newMembers = [...members];
    // newMembers[index] = event.target.checked;
    // setMembers(newMembers);
    // };

    // console.log("members", ....members);

    return (
        <TableRow key={item.name} sx={{ width: '100%', px: 0, mx: 0 }} >
            <TableCell>{item.idx}</TableCell>
            <TableCell>
                <JoyTextField color="primary" variant="plain" placeholder="Wprowadź produkt" />
            </TableCell>
            <td>
                <JoySelect
                // overlay
                // color="primary" 
                // variant="plain"



                slotProps={{
                        action: ({ checked }) => ({
                    sx: (theme) => ({
                        ...(true && {
                        // inset: -1,
                        border: "2px solid",
                        borderColor: "green",
                        // borderColor: theme.vars.palette.primary[500],
                        })
                    })
                    }),


                    listbox: {
                      sx: {
                        // '--List-decorator-size': '44px',
                        bgcolor: "white"
                      },
                    },
                  }}
                //   sx={{
                //     // '--List-decorator-size': '44px',
                //     minWidth: 10,
                //     bgcolor: "white"
                //   }}
                sx={{
                    flexDirection: 'row',
                    gap: 2,
                    [`& .${selectClasses.checked}`]: {
                      [`& .${selectClasses.action}`]: {
                        inset: -1,
                        border: '3px solid',
                        borderColor: 'primary.500',
                      },
                    },
                        [`& .${selectClasses.focusVisible}`]: {
                          borderColor: "blue",
                        //   },
                        },
                  }}


                 placeholder="Wybierz" 
                   >
                    <JoyOption value="opt1"><div>Usługa</div></JoyOption>
                    <JoyOption value="opt2"><div>Towar</div></JoyOption >
                    <JoyOption value="opt3">Wynajem</JoyOption >
                    <JoyOption value="opt4">Prowizja</JoyOption >
                    <JoyOption value="opt5">Sprzedaż</JoyOption >
                    <JoyOption value="opt6">Sprzedaż 0%</JoyOption >
                    <JoyOption value="opt7">Zwolniona z MVA</JoyOption >
                </JoySelect>
                {/* <JoyTextField color="primary" variant="plain" placeholder="Wybierz" /> */}
            </td>
            <td>
                <SelectBasic color="primary" variant="plain" placeholder="Wprowadź produkt" />
            </td>
            {/* <TableCell>{item.name}</TableCell> */}
            <TableCell align="right">{item.qty} </TableCell>
            <TableCell align="right" >
                {" "}
                {(item.price * 0.84).toFixed(2)}{" "}
            </TableCell>
            <TableCell align="right">
                {(item.subtotal * 0.84).toFixed(2)}
            </TableCell>
        </TableRow>
    );
}
