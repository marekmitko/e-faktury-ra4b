import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import { useTranslate } from "react-admin";
import { TotalCostCell } from "../subcomponent/TableTotalCostCell";


const totalCost = 100;
const totalTaxCost = 100;
const tdStyle = { width: '70%' }; 
const tdTypography = { noWrap: true, fontWeight:"lg",   level: "body2", textColor: "neutral.500", textAlign: 'right' }; 
const currency = "zł";
const tdCurrencyWidth = '15px'; 
const tdCostWidth = '70%'; 
const thBorderTopWidth = '2px';

const CostCell = ({children}) => (
    <TotalCostCell noWrap fontWeight="lg"  level="body2" textColor="neutral.500" textAlign='right' >
        {children}
    </TotalCostCell>);
const CellLabel = ({children}) => (
    <TotalCostCell noWrap fontWeight="lg"  level="body2" textColor="neutral.500" textAlign='left' >
        {children}
    </TotalCostCell>
);
const SufixCell = ({children}) => (
    <TotalCostCell noWrap fontWeight="lg"  level="body2" textColor="neutral.500" textAlign='left'
        tdStyle={{ width: `${tdCurrencyWidth}`, padding: 0,  }} 
    >
        {children}
    </TotalCostCell>
);


export default function NewTotalResultCostTable(props) {
    const translate = useTranslate();
    return (
        <>
        <Table  // aria-label="table with ellipsis texts" //note czy mi to jest potrzebne? 
            noWrap
            sx={{ mx: "auto", 
            // width: 100, 
            // "--Table-headerUnderlineThickness": "5px"
        
        }}
            stripe="odd"
            hoverRow
        >
            <tbody>
                <tr>
                    <td>
                        {translate('myroot.form.label.header_totalResultTable.totalNetCost')}
                    </td>
                    <td style={{ width: `${tdCostWidth}`, textAlign: 'right'  }}>
                        Description (you should see a part of this message)
                    </td>
                    <td style={{ width:  `${tdCurrencyWidth}`, padding: 0 }} />
                </tr>
                <tr>
                    <td>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Avatar src="/static/images/avatar/1.jpg" />
                            <Box sx={{ minWidth: 0 }}>
                                <Typography noWrap fontWeight="lg">
                                Morty D Ardiousdellois Addami
                                </Typography>
                                <Typography noWrap level="body2" >
                                Writer, Youtuber
                                </Typography>
                            </Box>
                        </Box>
                    </td>
                    <td style={{ width: `${tdCostWidth}`, textAlign: 'right' }} >
                        Cras non velit nec nisi vulputate nonummy.  
                    </td>
                    <td style={{ width:  `${tdCurrencyWidth}`, padding: 0 }}>
                        {currency}
                    </td>
                </tr>
                <tr>
                    <CellLabel>{translate('myroot.form.label.header_totalResultTable.totalTaxCost')}</CellLabel>
                    <CostCell>{totalTaxCost}</CostCell>
                    <SufixCell>{currency}</SufixCell>
                </tr>
                <tr    >
                    <th  style={{ borderTopWidth: `${thBorderTopWidth}`,   borderTopStyle: "solid"  }} >
                        <Typography noWrap level="body2">
                            {translate('myroot.form.label.header_totalResultTable.totalCost')}
                        </Typography>
                    </th>
                    <th  style={{ borderTopWidth: `${thBorderTopWidth}`,   borderTopStyle: "solid",
                            width: `${tdCostWidth}`
                        }}
                    >
                        <Typography noWrap fontWeight="lg"  
                            textColor="primary.800" textAlign='right'
                        >
                                {totalCost}
                        </Typography>
                    </th>
                    <th  style={{ borderTopWidth: `${thBorderTopWidth}`,   borderTopStyle: "solid",
                            width: `${tdCurrencyWidth}`, padding: 0
                        }}
                    >
                        <Typography fontWeight="lg" 
                            textColor="primary.800"
                            sx={{ padding: 0}}
                        >
                                {currency}
                        </Typography>
                    </th>
                </tr>
            </tbody>
        </Table>
        </>
    );
}
