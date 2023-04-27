import {useRef, useState} from "react";
import { Container, GlobalStyles, TableContainer, TableFooter, TablePagination, TableCell, useMediaQuery, Grid } from "@mui/material";
import JoyCssBaseline from '@mui/joy/CssBaseline';
import JoyGlobalStyles from '@mui/joy/GlobalStyles';
import { Card, Divider, Typography } from "@mui/joy";
import { jsx, css } from '@emotion/react'
import {
    ArrayInput,
    Create,
    NumberInput,
    Form, Title, useTranslate,  
} from 'react-admin';
import { SalesFormIterator } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/SalesFormIterator";

import { CustomInputNumber,   } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/custom/CustomInputNumber";
import { InputTextSelected } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelected";
import { SelectInputItem } from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItem";
import { MQ_isMinimal, MQ_isSmall, MQ_isMedium, MQ_isXSmall, MQ_isLarge} from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import SalesTableHeader from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/SalesTableHeader";
import JoyBox from "@mui/joy/Box";
import {  productOptions, taxOptions, typeOptions } from "../../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import { lineLayout } from "../../efa-invoice-form/components/mobile/spanning-sales-table/mobile-form-iterator/styledLineLayout";
import { BorderLinebox, FlexboxContainer, FullwidthWraper, InnerLinebox } from "../../efa-invoice-form/components/layout/RowLineLayout";
import SwitchNetOrGross from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/components/SwitchNetOrGross";
import TotalCostCardV2 from "../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/TotalCostCardV2";
import { JoyNoteboxV2 } from "../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/JoyNoteboxV2";
import { ItemIndexChip } from "../../efa-invoice-form/components/index-item-row/ItemIndexChip";
import { StyledTableCellClasses } from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/components/styledHeaderCellClasses";

export const nameSalesIteratorForm = 'products';
const required = () => (value) => (
    value
        ? undefined
        : 'myroot.validation.required'
);
// https://blog.logrocket.com/guide-mui-grid-system/

const areaMinimal =  `"name name name name name name name name name"
                " . type type type type type type type type  "
                " . tax tax tax tax tax tax tax tax"
                " . count count count count count count count count"
                " . price price price price price price price price"
                `;
const areaXSmall =  `"name name name name name name name name name"
                " . type type type type type type type type  "
                " . count count tax tax tax tax tax tax  "
                " . price price price price price price price price "`;

const areaSmall =  `"name name name name name name name name name name name name name name name name"
                "  . tax tax type type type type type type type type type type type type type  "
                "  . count count price price price price price price price price price price price price price "`;

const areaMedium =  `"name name name name name name name name name type type"
                        " count count tax tax tax tax tax tax tax price price "`;

const sxTotalCard = { 
    // flexDirection: { xs: 'row', md: 'column' },
    // minWidth: 'auto',
    gap: 1, //maxHeight : 'min-content'
};

// export const globalArea = `" name name name type type count tax price price "`;
export const globalArea = `"name type count tax price "`;

const vumberInputValidation = [required()];

const OptionRecord = {  choice_product_list: productOptions  };

const configGridBox_itemRow = {
    display: 'grid',
    // gridTemplateColumns: 'minmax(550px, 1fr) minmax(auto, 300px) ',
    gridTemplateColumns: '500px  minmax(auto-fill, 300px)',
    gridTemplateAreas: `"rowInput rowOutput"`,
    gridAutoFlow: 'row',
    // gap: 1,
    // rowGap: 0.75,
    columnGap: 0.5,
    gridTemplateRows: 'auto',
};

const configGridBox_inputItemBox = {
    display: 'grid',
    // gridTemplateColumns: '3fr repeat(7, 1fr) minmax(10px, auto)',
    gridTemplateColumns: '31fr 17fr 9fr 11fr 16fr',
    gap: 1,
    rowGap: 0.75,
    columnGap: 0.5,
    gridTemplateRows: 'auto',
};



const MobileSalesTableHeader = ({ children, title}) => (
    <Typography textColor='neutral.100' fontWeight='500'
        sx={{ pl: 1, textTransform: 'uppercase' }}    
    >
        {title ? title : ''}
        {/* {children? children : ''} */}
    </Typography>
);










export const SalesTableV2 = props => { 

    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra-large: 1536px

    const isMinimal = useMediaQuery(`${MQ_isMinimal}`);
    const isXSmall = useMediaQuery(`${MQ_isXSmall}`);
    const isSmall = useMediaQuery(`${MQ_isSmall}`);
    const isMedium = useMediaQuery(`${MQ_isMedium}`);
    const isLarge = useMediaQuery(`${MQ_isLarge}`);
    const is650px = useMediaQuery('(max-width:650px)');

    const [entryPriceIsGross, setEntryPriceOnGross ] = useState(false);

    const translate = useTranslate();
    return(
        <>
                <div>
                    <JoyGlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
                    <JoyCssBaseline />
                    <Container
                        maxWidth="xl"
                        component="main"
                    >
                        {/* <small> main container - component: TableContainer </small> */}
                        <TableContainer className="tableContainer" sx={{  width: '100%' }}>
                            <ArrayInput  className="array" label={false} source={nameSalesIteratorForm} fullWidth>
                                <SalesFormIterator  
                                    entryPriceIsGross={entryPriceIsGross}
                                
                                
                                    isXSmall={isXSmall} fullWidth // ref={memberRef} 
                                    wraperSectionItem={ 
                                        configGridBox_itemRow
                                        // isLarge? {display: 'flex'} : cssItemNoLarge
                                    }
                                    tableHeader={  ( isLarge )?  
                                                            <SalesTableHeader   >
                                                                <SwitchNetOrGross {...{  entryPriceIsGross, setEntryPriceOnGross }}  />
                                                            </SalesTableHeader> 
                                                            : (isMedium ?       <MobileSalesTableHeader title={translate('myroot.form.mobile.salesTableHeaderTitle')}/> :                                         
                                                                    <SalesTableHeader   >
                                                                        <SwitchNetOrGross {...{  entryPriceIsGross, setEntryPriceOnGross }}  />
                                                                    </SalesTableHeader>  )
                                                }
                                    sxTableBody={{
                                        // display: 'flex', p: 0,   
                                        // bgcolor: isLarge ? 'background.paper' : 'transparent', 
                                        bgcolor:  'transparent', 
                                        borderRadius: 1, flexDirection: 'column' }}
                                    
                                    sxItemRow={ {
                                    //   ...configGridBox_itemRow,
                                            //   flexFlow: isXSmall ? 'column wrap' : 'row nowrap',
                                            bgcolor: 'transparent', borderRadius: 1,  
                                        }}
                                        sxItemContent={ {  // mainContent in ItemRow
                                            display: 'flex', flexWrap: 'wrap', borderRadius: 2,   my: 0, p: 0,
                                            width: 'auto',  // width: '100%'
                                            // bgcolor: isLarge ? 'transparent' : 'background.paper' , 
                                            // boxShadow: isLarge ? 0 : 1 ,
                                            boxShadow:  0,
                                        }}
                                            sxInputContent={{ bgcolor: 'transparent', // onlyInputPart in ItemRow
                                                ...configGridBox_inputItemBox,
                                                gridTemplateAreas: isMedium ? (
                                                                            isSmall ? ( isXSmall ? ( isMinimal? areaMinimal : areaXSmall ) : areaSmall 
                                                                                ): areaMedium 
                                                                            )  : globalArea,
                                        }}
                                            sxSumPriceBox={{ 
                                            // width: '100%',
                                            display: 'flex', 
                                            flexDirection: isMinimal ? 'column' : 'row'
                                        }}
                                        getItemLabel={(index) => (<ItemIndexChip cssBox={{ mb: -2 }} index={++index} />)}  
                                > 
                                    <InputTextSelected 
                                            // label="myroot.form.label.inputbox_itemrow.itemNameField"
                                            label=''
                                            source="product_name" 
                                            choiceOptions={OptionRecord.choice_product_list} 
                                            sx={{   gridArea: 'name'   }} 
                                            placeholder="myroot.form.label.inputbox_itemrow.itemNameField"
                                    />
                                    <SelectInputItem
                                            source="product_type" 
                                            label="myroot.form.label.inputbox_itemrow.typeItem"
                                            sx={{ gridArea: 'type',  '& svg': { mr: -0.5 }   }} 
                                            defaultValue="placeholder" 
                                            options={typeOptions}  
                                            variant="outlined"
                                    />
                                    <SelectInputItem
                                            source="product_vat" 
                                            label="myroot.form.label.inputbox_itemrow.taxItem"
                                            sx={{ gridArea: 'tax', '& svg': { mr: -0.5 }  }} 
                                            defaultValue="placeholder" 
                                            options={taxOptions}  
                                            variant="outlined"
                                    />
                                    <CustomInputNumber source="product_price_netto" validate={vumberInputValidation}
                                        sx={{ gridArea: 'price', width: "100%", 
                                        visibility: entryPriceIsGross ? 'hidden' : 'visible',
                                        display: entryPriceIsGross ? 'hidden' : '' }}
                                        label="myroot.form.label.inputbox_itemrow.netItem" 
                                    />
                                    <CustomInputNumber source="product_price_brutto" validate={vumberInputValidation}
                                        sx={{ gridArea: 'price', width: "100%", 
                                        visibility: entryPriceIsGross ? 'visible' : 'hidden',
                                        display: entryPriceIsGross ? '' : 'hidden'      }}
                                        label="myroot.form.label.inputbox_itemrow.grossItem" 
                                    />
                                    <NumberInput source="product_count"
                                        label="myroot.form.label.inputbox_itemrow.qtyItem"
                                        variant="outlined" helperText={false}
                                        sx={{ gridArea: 'count', marginTop: "8px", '& input': { mr: -1 } }}
                                    />
                                </SalesFormIterator>
                            </ArrayInput>
                            <FullwidthWraper   // bgcolor: isLarge ? 'background.paper' : 'transparent',    // borderRadius: 1, flexDirection: 'column' 
                            >
                                <FlexboxContainer component='tr' sxCSS={{ //display: 'flex', 
                                        flexDirection: isXSmall ? 'column' : 'row',
                                        bgcolor: 'transparent', borderRadius: 1,    //sxItemRow
                                    }}
                                >
                                    <BorderLinebox sxCSS={{ order: -1 }} /> 
                                    <InnerLinebox sxCSS={ { order: 1 } }    >
                                    <JoyBox  sx={{ 
                                            // boxShadow: 'none',
                                            bgcolor: 'transparent', 
                                            flexGrow: 1, 
                                            boxShadow: 'none',
                                            display: 'flex',
                                            my: 1
                                        }}
                                        >
                                            <div style={{ width: '100%' }}>
                                            <div style={{ display: 'flex' }}>
                                            <JoyBox sx={{ display: 'grid',  
                                                gridTemplateColumns: {xs: '1fr', sm: '1fr', md: '1fr 1fr'},
                                                // gap: 1,
                                                rowGap: 1.5,
                                                columnGap: {xs: 0, sm: 1, md: 2},
                                                gridTemplateRows: 'auto',
                                            }} >

                                                <JoyBox sx={{ flexBasis: '1 1 auto',}}>
                                                    <JoyNoteboxV2 sxCSS={{   order: { xs: 1, sm: 1, md: -1, lg: -1 } , boxShadow: 1 }} />
                                                </JoyBox>
                                                    <TotalCostCardV2 sxCSS={{ ...sxTotalCard,  flex: '0 0 auto', order: { xs: -1, sm: -1, md: 1, lg: 1 } }} />
                                            </JoyBox>
                                            </div>
                                            </div>
                                        </JoyBox> 
                                    </InnerLinebox>
                                    <BorderLinebox  sxCSS={{ order: 3 }} />
                                </FlexboxContainer>
                            </FullwidthWraper>
                        </TableContainer>
                    </Container>
                </div>
                {/* // <...> bardzo spoko separator */}
                {/* <Divider sx={{ borderColor: 'red', py:0.15, mx: 0, mt: -0.5, pb: 0, mb: 0 }} / >  */}
        </>
    );
};