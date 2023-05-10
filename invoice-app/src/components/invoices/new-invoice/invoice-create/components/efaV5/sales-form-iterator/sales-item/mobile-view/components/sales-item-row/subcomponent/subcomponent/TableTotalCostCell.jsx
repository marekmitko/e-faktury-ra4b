import { Typography } from '@mui/joy';
import * as React from "react";

// { width: `${tdCurrencyWidth}`, padding: 0,  }
export const TotalCostCell = ({children, styleCell, ...props}) => ( 

        <td  style={styleCell} >
            <Typography {...props}>
                {children ? children : '' }
            </Typography>
        </td>

     
    ); 

