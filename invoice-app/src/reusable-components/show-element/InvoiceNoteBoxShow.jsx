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

const InvoiceNoteBoxShow = (props) => {
    // const { currencySymbol, sxCSS } = props;
    const translate = useTranslate();
    const record = useRecordContext();
    const resource = useResourceContext();

    console.log("🅿resource", resource);

    if(!record) return null;
    return (
        <Card
            variant="plain"
            size="sm"
            sx={{ 
                boxShadow: 0, 
                border: '1px solid',
                borderColor: 'transparent',
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
                    // borderBottom: '2px solid', borderColor: 'neutral.300'
                }}   // width: 100, 
                    >
                        <tr >
                            <th colspan="2" style={{ 
                                    textTransform: 'uppercase', 
                                    height: '30px', paddingTop: 0, paddingBottom: 0,
                                    // borderBottom: '2px solid', 
                                    // borderBottomColor: '#D8D8DF',
                                }}
                            >
                                {translate(`resources.${resource}.show.header.invoice_notes`)}
                            </th>
                        </tr>
                </Table>
                </CardContent>
            <Box  color="neutral" sx={{ 
                alignItems: 'stretch', height: '100%',
                mr: 'auto', ml: 0, 
                wordBreak: 'break-all', 
                display: 'flex', flexDirection: 'column', typography: {sm: 'h5', xs: 'body2'}, 
                }}
            >
                <TotalLabel  level="h6"  textColor="neutral.600" sx={{ //mr: 1, 
                              pt: 0,  ml: 1, //fontStyle: 'italic',
                            typography: {sm: 'body2', xs: "body2", md: 'body2' },
                        }}  
                            >
                            Lorem ipsum...
                    </TotalLabel>
            </Box>
        </Card>
    );
};

export default InvoiceNoteBoxShow;


