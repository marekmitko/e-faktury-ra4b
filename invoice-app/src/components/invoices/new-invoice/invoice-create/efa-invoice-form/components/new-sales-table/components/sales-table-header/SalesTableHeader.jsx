import { TableHead } from '@mui/material';
import { borderRight } from '@mui/system';
import * as React from 'react';
import { useTranslate } from 'react-admin';
import {  InnerLinebox } from '../../../layout/RowLineLayout';
import { SalesTh } from './components/styledHeaderCellClasses';



const sxStandard = {
    // display: "grid",
    
    // gridTemplateColumns: "50px auto 150px 70px 60px 125px 125px 125px 50px",
    // gridGap: 10,
    // marginTop: "auto",
    // borderBottom: 1, 
    // width: '100%', 
    // paddingTop: ".5em",
    // paddingBottom: ".5em", 
    // paddingLeft: 0, 
    // bgcolor:  lightBlue[300]
    // bgcolor:  blue[400],
    bgcolor:  "#054da7",
    // color:  "white",
    borderColor: "white",
    // borderRadius: '15px 15px 0 0',
    // textAlign: 'center',
    // justifyItems: 'center'
};



const SalesTableHeader = React.forwardRef((props, ref ) => {
    const { children } = props; // children, gridTemplateColumns, enabled, disabled, 
        const translate = useTranslate();
    return(
        <InnerLinebox sxCSS={ { order: 1, bgcolor:  "#054da7", width: '100%' } }    > 
            {/* <TableHeader toggelPrice={entryPriceIsGross}  
                    sxContentRow={{ ...sxStandard,
                    gridTemplateColumns: 'repeat(9, 1fr)',
                    // gridTemplateColumns: " auto 100px 60px 50px 90px 100px 100px 50px" ,
                    rowGap: 0,
                    columnGap: 0.5,
                    gridTemplateRows: 'auto',
                    // gridTemplateAreas: globalArea,
                    gridTemplateAreas: `"name name name type count tax price price . ."`,
                }}
            >
            <SwitchNetOrGross {...{  entryPriceIsGross, setEntryPriceOnGross }}  />
        </TableHeader> */}
                <TableHead    sx={{ display: 'flex', px: 0, mx: 0, borderColor: "white", }}   >
                    <SalesTh sx={{   flexBasis: 3 }} >
                        {translate('myroot.form.label.header_salesTable.itemName')}
                    </SalesTh>
                    <SalesTh sx={{ gridArea: 'type'  }} >
                        {translate('myroot.form.label.header_salesTable.itemType')}
                    </SalesTh>
                    <SalesTh  sx={{   gridArea: 'count' }} >
                        {translate('myroot.form.label.header_salesTable.itemQty')}
                    </SalesTh>
                    <SalesTh sx={{   gridArea: 'tax' }}>
                        {translate('myroot.form.label.header_salesTable.itemTax')}
                    </SalesTh>
                    <SalesTh align="right"  sx={{ gridArea: 'price' }} >
                        {children}
                    </SalesTh>
                    <SalesTh align="right"   >
                        {translate('myroot.form.label.header_salesTable.sumNetPrice')}
                    </SalesTh>
                    <SalesTh align="right"   >
                        {translate('myroot.form.label.header_salesTable.sumGrossPrice')}
                    </SalesTh>
            </TableHead>
        </InnerLinebox>

    );
});

export default SalesTableHeader;