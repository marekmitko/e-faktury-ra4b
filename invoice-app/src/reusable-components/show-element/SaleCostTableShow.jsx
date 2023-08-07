import * as React from "react";
import Table from "@mui/joy/Table";
import { useRecordContext, useResourceContext, useTranslate } from "react-admin";
import { CellLabel, CostCell, TotalLabel } from "./subcomponent/TotalCostCell";
import { formatCurrency, getTotalPrice, getTotalTax } from "./logic/getCostResult ";
// import { nameSalesIteratorForm } from "../../../mobile/spanning-sales-table/mobile-form-iterator/MobiForm";
import { CardContent, Card,  Typography, AspectRatio, Box, Chip} from "@mui/joy";
import { Paper } from "@mui/material";
import { borderRadius } from "@mui/system";



const locale = {
    en: "en-US",
    pl: "pl"}
const currency = {
    pl: "PLN"
};

const SaleCostTableShow = (props) => {
    const { currencySymbol, sxCSS } = props;
    const currency = currencySymbol ? currencySymbol : "";
    const translate = useTranslate();
    const record = useRecordContext();
    const resource = useResourceContext();

    if(!record) return null;
    return (
        <Card
            variant="plain"
            size="sm"
            // sx={ sxCSS }
            sx={{ 
                boxShadow: 0,
                border: '1px solid',
                borderColor: 'neutral.300'
            } }
            >
                <CardContent sx={{  p: 0, m: 0 ,
                        flexBasis:  'initial' ,
                        bgcolor: 'background.level1', 
                        borderRadius: 1.5,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0

                    }} 
                >
                <Table  // aria-label="table with ellipsis texts" //note czy mi to jest potrzebne? 
                    noWrap //hoverRow      // stripe="odd"
                    sx={{ mx: "auto", }}   // width: 100, 
                    >
                    <tr >
                    <th style={{ 
                            textTransform: 'uppercase', 
                            height: '30px', paddingTop: 0, paddingBottom: 0,
                            borderBottom: '2px solid', 
                            borderBottomColor: '#D8D8DF',
                        }}
                    >
                    {  translate(`resources.${resource}.show.header.sales_cost_table.sum`) }
                    </th>

                    <th style={{ 
                            textTransform: 'uppercase', 
                            height: '30px', paddingTop: 0, paddingBottom: 0,
                            borderBottom: '2px solid', 
                            borderBottomColor: '#D8D8DF',
                        }}
                    >
                    {  translate(`resources.${resource}.show.header.sales_cost_table.value`) }
                    </th>
                    </tr>
                    {/* <tbody>
                        <tr>
                            <CellLabel
                                sx={{
                                    textTransform: 'lowercase',
                                }}
                            >
                            {  translate(`resources.${resource}.show.header.sales_cost_table.net`) }
                            </CellLabel>
                            <CostCell>
                            // { '???' 
                                
                            </CostCell>
                        </tr>
                        <tr>
                            <CellLabel
                                sx={{
                                   textTransform: 'uppercase',
                                }}
                                >
                                {translate(`resources.${resource}.show.header.sales_cost_table.tax`) }
                            </CellLabel>
                            <CostCell>
                                { '???' }
                            </CostCell>
                        </tr>
                    </tbody> */}
                </Table>
                </CardContent>
            <Box  color="neutral" sx={{ 
                ml: 'auto', mr: 0, 
                wordBreak: 'break-all', 
                display: 'flex', flexDirection: 'column', typography: {sm: 'h5', xs: 'body2'}, //borderTop: '2px solid', borderColor: 'neutral.300'
                }}>
                <Typography    color="primary" level="inherit" textColor="primary.900"  
                    sx={{ m: 0.5, typography: {sm: 'h6', xs: 'body1', md: 'h5' } , width: '100%',  
                    wordBreak: 'break-all', }} 
                    >
                    <TotalLabel  level="h6" fontWeight="400" textColor="neutral.600" sx={{ mr: 1, 
                            typography: {sm: 'body1', xs: "body2", md: 'h6' }  }}  
                            >
                        {/* {translate(`resources.${resource}.show.header.sales_cost_table.tax`) } */}
                        {translate(`resources.${resource}.show.header.sales_cost_table.sum`)}{": "}
                        
                    </TotalLabel>
                        <b> {formatCurrency(record.payment_amount)}{` ${currency}`}</b>
                </Typography>
            </Box>
            <Box  color="neutral" sx={{ 
                p: 0, my: 0, p: 0,
                ml: 'auto', mr: 0, 
                wordBreak: 'break-all', 
                display: 'flex', flexDirection: 'column', 
                typography: {sm: 'h5', xs: 'body2'}, 
                }}>
                <Typography    color="primary" level="inherit" textColor="primary.900"  
                    sx={{ m: 0.5, mt: -2.25, typography: {sm: 'h6', xs: 'body1', md: 'h5' } , width: '100%',  
                    wordBreak: 'break-all', 
                    
                    }} 
                    >
                    <TotalLabel  level="h6" fontWeight="400" textColor="neutral.600" sx={{ //mr: 1, 
                            pt: 0,   //fontStyle: 'italic',
                            typography: {sm: 'body2', xs: "body2", md: 'body2' }  }}  
                            >
                        {translate(`resources.${resource}.show.header.sales_cost_table.gross_value`)}
                    </TotalLabel>
                </Typography>
            </Box>
        </Card>
    );
};

export default SaleCostTableShow;


