import * as React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import { useTranslate } from "react-admin"; 



const tdStyle = { width: '70%' }; 
const tdCostWidth = '70%'; 
const thBorderTopWidth = '2px';

export const TotalCostCell = ({children, styleCell, ...props}) => ( 

    <td  style={styleCell} >
        <Typography {...props}>
            {children ? children : '' }
        </Typography>
    </td>

 
); 


export const CostCell = ({children}) => (
    <TotalCostCell noWrap fontWeight="lg"  level="body2" textColor="neutral.500" textAlign='right' 
        styleCell={{ width: `${tdCostWidth}`  }}  
    >
        {children}
    </TotalCostCell>);
export const CellLabel = ({children}) => (
    <TotalCostCell noWrap fontWeight="lg"  level="body2" textColor="neutral.500" textAlign='left' >
        {children}
    </TotalCostCell>
);
export const TotalCell = ({children}) => (
    <th  style={{ borderTopWidth: `${thBorderTopWidth}`,   borderTopStyle: "solid",   width: `${tdCostWidth}`  }} >
        <Typography noWrap fontWeight="lg"     textColor="primary.800" textAlign='right'  >
            {children ? children : ''}
        </Typography>
    </th> 
);
export const TotalLabel =({children}) => (
    <th  style={{ borderTopWidth: `${thBorderTopWidth}`,   borderTopStyle: "solid"  }} >
        <Typography noWrap level="body2">
        {children ? children : ''}
            
        </Typography>
    </th>
);