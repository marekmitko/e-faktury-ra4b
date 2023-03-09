import { borderRight } from '@mui/system';
import * as React from 'react';
import { globalArea } from '../../../mobile/spanning-sales-table/mobile-form-iterator/MobiForm';
import SwitchNetOrGross from "./components/SwitchNetOrGross";
import TableHeader from "./components/TableHeader";



const sxStandard = {
    display: "grid",
    
    // gridTemplateColumns: "50px auto 150px 70px 60px 125px 125px 125px 50px",
    gridGap: 10,
    marginTop: "auto",
    borderBottom: 1, 
    width: '100%', 
    paddingTop: ".5em",
    paddingBottom: ".5em", 
    paddingLeft: 0, 
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

    const {
        // children, gridTemplateColumns, enabled, disabled, 
        entryPriceIsGross, setEntryPriceOnGross } = props;

    return(

                    <TableHeader toggelPrice={entryPriceIsGross}  
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
                    </TableHeader>

    );
});

export default SalesTableHeader;