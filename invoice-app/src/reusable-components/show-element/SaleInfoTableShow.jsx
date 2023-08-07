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

const SaleInfoTableShow = (props) => {
    // const { currencySymbol, sxCSS } = props;
    const translate = useTranslate();
    const record = useRecordContext();
    const resource = useResourceContext();

    if(!record) return null;
    return (
        <Card
            variant="plain"
            size="sm"
            sx={{ 
                boxShadow: 0, 
                border: '1px solid',
                borderColor: 'neutral.300',
                alignItems: 'stretch', height: '100%',
            }}
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
                    sx={{ mx: "auto",
                    borderBottom: '2px solid', borderColor: 'neutral.300'
                }}   // width: 100, 
                    >
                        <tr >
                            <th colspan="2" style={{ 
                                    textTransform: 'uppercase', 
                                    height: '30px', paddingTop: 0, paddingBottom: 0,
                                    borderBottom: '2px solid', 
                                    borderBottomColor: '#D8D8DF',
                                }}
                            >
                            {  translate(`resources.${resource}.show.header.payment_info`) }
                            </th>
                        </tr>
                    <tbody>
                        <tr>
                            <CellLabel
                                sx={{
                                    textTransform: 'lowercase',
                                }}
                            >
                            {  translate(`resources.${resource}.show.header.sales_info_table.date_payment`) }
                            </CellLabel>
                            <CostCell>
                                27-06-2023
                            </CostCell>
                        </tr>
                        <tr style={{
                            backgroundColor: '#fff'
                        }}>
                            <CellLabel
                                sx={{ 
                                    textTransform: 'lowercase',
                                    
                                }}
                                >
                                {translate(`resources.${resource}.show.header.sales_info_table.payment_method`) }
                            </CellLabel>
                            <CostCell
                            sx={{
                                textTransform: 'uppercase',
                                }} >
                                    {
                                        (record.payment_form === 'cash') ? 
                                            translate(`resources.${resource}.show.header.sales_info_table.cash_payment`)
                                            :
                                            translate(`resources.${resource}.show.header.sales_info_table.bank_transfer`)
                                    }
                            </CostCell>
                        </tr>
                    </tbody>
                </Table>
                </CardContent>
            <Box  color="neutral" sx={{ 
                alignItems: 'stretch', height: '100%',
                mr: 'auto', ml: 0, mt: 1.5,
                wordBreak: 'break-all', 
                display: 'flex', flexDirection: 'column', typography: {sm: 'h5', xs: 'body2'}, 
                }}
            >
                <TotalLabel  level="h6"  textColor="neutral.600" sx={{ //mr: 1, 
                              pt: 0,  ml: 1, //fontStyle: 'italic',
                            typography: {sm: 'body2', xs: "body2", md: 'body2' },
                            textTransform: 'uppercase',
                            fontWeight: "500!important"
                        }}  
                            >
                        {translate(`resources.${resource}.show.header.sales_info_table.account_number`)}
                    </TotalLabel>
            </Box>
            <Box  color="neutral" sx={{ 
                p: 0, my: 0,  
                ml: 'auto', mr: 0, mb: -1, 
                wordBreak: 'break-all', 
                display: 'flex', flexDirection: 'column', 
                typography: {sm: 'h5', xs: 'body2'}, 
                }}>
                <Typography    color="primary" level="inherit" textColor="primary.900"  
                    sx={{ m: 0.5, mt: -2.25, typography: {sm: 'h6', xs: 'body1', md: 'h5' } , width: '100%',  
                    wordBreak: 'break-all', 
                    
                    }} 
                    >
                    <Typography  level="h6"  textColor="neutral.600" sx={{ //mr: 1, 
                            pt: 0,   //fontStyle: 'italic',
                            typography: {sm: 'body2', xs: "body2", md: 'body2' },
                            fontWeight: '500!important',
                            letterSpacing: '-.05px!important'
                        }}  
                            >
                        { 'PL49 1020 2892 2276 3005 0000 1234'  }
                    </Typography>
                </Typography>
            </Box>
        </Card>
    );
};

export default SaleInfoTableShow;


