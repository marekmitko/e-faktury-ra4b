import { Box } from '@mui/joy';
import { TableHead } from '@mui/material';
import { borderRight } from '@mui/system';
import * as React from 'react';
import { useTranslate } from 'react-admin';
import {  InnerLinebox } from '../../../layout/RowLineLayout';
import { SalesTh } from './components/styledHeaderCellClasses';

import {   styled   } from "@mui/joy";

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
    const { children, cssHeader } = props; // children, gridTemplateColumns, enabled, disabled, 
        const translate = useTranslate();
    return(
        <InnerLinebox sxCSS={ { order: 1, } }    > 
            {/* <div style={{   width: '100%'  }}> */}
            <HeaderRootLine  >
                <TableHead  component="div"  sx={{display: 'flex'  }} >
                    <div style={{ flex: 'auto'}} >
                        <Box sx={ {   display: 'grid',    
                                                        gridAutoFlow: 'column', px: 0,
                                                        // gridTemplateColumns: '2fr 45px repeat(10, 1fr)  300px ',
                                                        gridTemplateColumns: '1fr 31fr 17fr 9fr 11fr 16fr',
                                                        gap: 1,
                                                        rowGap: 0.75,
                                                        columnGap: 0.5,
                                                        gridTemplateRows: 'auto',
                                                        // gridTemplateRows: `"3rem 25% 1fr 2fr"`,
                                                        gridTemplateAreas: `". name type count tax price "`,
                                                        // gridTemplateAreas: "name name  type type count count  ",
                                                        borderColor: "white" }  }>

                            <SalesTh  sx={{   gridArea: 'name'   }} >
                                {translate('myroot.form.label.header_salesTable.itemName')}
                            </SalesTh>
                            <SalesTh align="left"  sx={{   gridArea: 'type'   }}    >
                                {translate('myroot.form.label.header_salesTable.itemType')}
                            </SalesTh>
                            <SalesTh sx={{   gridArea: 'count'   }} >
                                {translate('myroot.form.label.header_salesTable.itemQty')}
                            </SalesTh>
                        <SalesTh sx={{   gridArea: 'tax' }}>
                            {translate('myroot.form.label.header_salesTable.itemTax')}
                        </SalesTh>
                        <SalesTh align="right"  sx={{ gridArea: 'price' }} >
                            {children}
                        </SalesTh>
                        </Box>
                    </div>
                    <div>{" "}</div>
                {/* <div style={{ flex: 'initial'}} >
                    <SalesTh align="right"   >
                        {translate('myroot.form.label.header_salesTable.sumNetPrice')}
                    </SalesTh>
                    <SalesTh align="right"   >
                        {translate('myroot.form.label.header_salesTable.sumGrossPrice')}
                    </SalesTh>
                </div> */}
            </TableHead>
            {/* </div> */}
            </HeaderRootLine>
        </InnerLinebox>

    );
});

export default SalesTableHeader;



const HeaderRootLine = styled('div', {
    name: "HeaderFormIterator",
overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    // backgroundColor: 'gold',
    width: '100%',
        '& > div': {
            // padding: 0,
            // marginTop: 0,
            // marginBottom: 0,
            // backgroundColor: 'red',
            display: 'flex',
        },
        '& > div > div ': {
            // hide the last separator
            // backgroundColor: 'blue',
            flex: 'auto'
        },
        '& > div > div:last-child': {
            // hide the last separator
            // backgroundColor: 'green',
            minWidth: '315px',
            maxWidth: '325px',
            [theme.breakpoints.down('lg')]: { display: 'none' },
        //     [theme.breakpoints.up('lg')]: {   gridTemplateAreas: `"rowInput rowOutput"`,},
        //     [`& .outputStack > div`]: {
        //         [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
        //     },
        //     [`& .outputStack .outputBox > div`]: {
        //         [theme.breakpoints.up('lg')]: { maxWidth: '150px' },
        //         // [theme.breakpoints.down('lg')]: { maxWidth: '50%' },
        //     },


        },
        
        // [`& .${SalesFormIteratorClasses.line}:hover > .${SalesFormIteratorClasses.action}`]: {
        //     visibility: 'visible',
        // },
}));

// [`& .${RowItemClasses.rowSection}`]: {
//     display: 'grid',
//     gridTemplateColumns: '500px  minmax(auto-fill, 300px)',
//     rowGap: '10px',
//     // columnGap: 1,
//     gridAutoFlow: 'row',
//     gridTemplateRows: 'auto',
//     [theme.breakpoints.down('lg')]: { gridTemplateAreas:`"rowInput"
//                                                         "rowOutput"`, },
//     [theme.breakpoints.up('lg')]: {   gridTemplateAreas: `"rowInput rowOutput"`,},
//     [`& .outputStack > div`]: {
//         [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
//     },
//     [`& .outputStack .outputBox > div`]: {
//         [theme.breakpoints.up('lg')]: { maxWidth: '150px' },
//         // [theme.breakpoints.down('lg')]: { maxWidth: '50%' },
//     },
// },