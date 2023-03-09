import {useRef, useState} from "react";
import { Container, GlobalStyles, TableContainer, TableFooter, TablePagination, TableCell, useMediaQuery, Grid } from "@mui/material";
import JoyCssBaseline from '@mui/joy/CssBaseline';
import JoyGlobalStyles from '@mui/joy/GlobalStyles';
import { jsx, css } from '@emotion/react'
import {
    ArrayInput,
    Create,
    NumberInput,
    Form, Title,  
} from 'react-admin';
import { SalesFormIterator } from "../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/SalesFormIterator";

import { CustomInputNumber, MyControlledPriceNumberInput, PriceNumberInput, RaPriceNumberInput } from "../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/custom/CustomInputNumber";
import { InputTextSelected } from "../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelected";
import { SelectInputItem } from "../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItem";
import { MQ_isMinimal, MQ_isSmall, MQ_isMedium, MQ_isXSmall, MQ_isLarge} from "../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import SalesTableHeader from "../efa-invoice-form/components/new-sales-table/components/sales-table-header/SalesTableHeader";
import JoyBox from "@mui/joy/Box";
import TotalCostTable from "../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/TotalCostTable";
import Box from "@mui/joy/Box";
import { Card } from "@mui/joy";
import {  productOptions, taxOptions, typeOptions } from "../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import JoyNotebox2 from "../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/JoyNotebox2";
import { lineLayout } from "../efa-invoice-form/components/mobile/spanning-sales-table/mobile-form-iterator/styledLineLayout";
import { BorderLineBox } from "../efa-invoice-form/components/layout/LineLayout";


const borderLine = css({ 
    flex: '0 1 auto',
    maxWidth: '20px',
    backgroundColor: 'red',
    color: 'green'
});

export const nameSalesIteratorForm = 'products';
const required = () => (value) => (
    value
        ? undefined
        : 'myroot.validation.required'
);
// https://blog.logrocket.com/guide-mui-grid-system/

const areaXSmall =  `"name name name name name name name name name"
                " . type type type type type type type type  "
                " . count count count tax tax tax tax tax  "
                " . price price price price price price price price "`;

const areaSmall =  `"name name name name name name name name name"
                " . tax tax tax type type type type type  "
                " . count count count price price price price price "`;

const areaMedium =  `"name name name name name name type type type"
                        " qty qty count count tax tax price price price "`;

export const globalArea = `" name name name type type count tax price price "`;

const onSubmit = data => console.log('DATA', data);

const vumberInputValidation = [required()];
const myAutoTestSLC = [required() ];

const OptionRecord = {  choice_product_list: productOptions  };

const configGridBox_inputItemBox = {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 1fr)',
    // gap: 1,
    // rowGap: 0.75,
    columnGap: 0.5,
    gridTemplateRows: 'auto',
};



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

    const [entryPriceIsGross, setEntryPriceOnGross ] = useState(false);
    return(
    <Create component='div' {...props}>
        {/* <SimpleForm> */}
        <Form onSubmit={onSubmit}  >
        <div>
            <JoyGlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
            <JoyCssBaseline />
            <Container
                maxWidth="xl"
                component="main"
            >
                <Title title=" - list" />
                <small> main container - component: TableContainer </small>
                <TableContainer sx={{  width: '100%' }}>
                    <ArrayInput source={nameSalesIteratorForm} fullWidth>
                        <SalesFormIterator  fullWidth // ref={memberRef} 
                        tableHeader={  isLarge ?  
                                                <SalesTableHeader  entryPriceIsGross={entryPriceIsGross} setEntryPriceOnGross={setEntryPriceOnGross}   /> 
                                                : null
                                            }
                        sxTableBody={{
                            display: 'flex', p: 0,   
                            bgcolor: isLarge ? 'background.paper' : 'transparent', 
                            borderRadius: 1, flexDirection: 'column' }}
                        
                        sxItemRow={{ display: 'flex',
                                    flexDirection: isXSmall ? 'column' : 'row',
                                bgcolor: 'transparent', borderRadius: 1,  
                                mx: 1 //sxItemRow
                            }}
                            sxItemContent={ {  // mainContent in ItemRow
                                display: 'flex', flexWrap: 'wrap', borderRadius: 2,   my: 0, p: 0,
                                width: 'auto',  // width: '100%'
                                bgcolor: isLarge ? 'transparent' : 'background.paper' , 
                                boxShadow: isLarge ? 0 : 1 ,
                            }}
                                sxInputContent={{ bgcolor: 'transparent', // onlyInputPart in ItemRow
                                    ...configGridBox_inputItemBox,
                                    gridTemplateAreas: isMedium ? (
                                                                isSmall ? ( isXSmall ? areaXSmall : areaSmall 
                                                                    ): areaMedium 
                                                                )  : globalArea,
                            }}
                                sxSumPriceBox={{ 
                                // width: '100%',
                                display: 'flex', 
                                flexFlow: `row ${isMinimal ? 'wrap' : 'nowrap'}` }}
                            getItemLabel={(index) => (<span>{++index}</span>)}  > 
                            <InputTextSelected 
                                    label="myroot.form.label.inputbox_itemrow.itemNameField"
                                source="product_name" 
                                choiceOptions={OptionRecord.choice_product_list} 
                                sx={{   gridArea: 'name'   }} 
                            />
                            <SelectInputItem
                                    source="product_type" 
                                    label="myroot.form.label.inputbox_itemrow.typeItem"
                                    sx={{ gridArea: 'type' }} 
                                    defaultValue="placeholder" 
                                    options={typeOptions}  
                                    variant="outlined"
                            />
                            <SelectInputItem
                                    source="product_vat" 
                                    label="myroot.form.label.inputbox_itemrow.taxItem"
                                    sx={{ gridArea: 'tax' }} 
                                    defaultValue="placeholder" 
                                    options={taxOptions}  
                                    variant="outlined"
                            />
                            <CustomInputNumber source="product_price_netto"  validate={vumberInputValidation}
                                sx={{ gridArea: 'price', width: "100%" }}
                                label="myroot.form.label.inputbox_itemrow.netItem"
                            />
                            <NumberInput source="product_count"
                                label="myroot.form.label.inputbox_itemrow.qtyItem"
                                variant="outlined" helperText={false}
                                sx={{ gridArea: 'count', marginTop: "8px" }}
                            />
                        </SalesFormIterator>
                    </ArrayInput>
                    <Box  sx={ {
                            display: 'flex', p: 0,   
                            // bgcolor: isLarge ? 'background.paper' : 'transparent', 
                            borderRadius: 1, flexDirection: 'column' } }                           
                    >
                        <Box component='tr' className='itemRow-salesIterator' sx={  { display: 'flex',
                                    flexDirection: isXSmall ? 'column' : 'row',
                                bgcolor: 'transparent', borderRadius: 1,  
                                mx: 1 //sxItemRow
                            }  } >
                            <BorderLineBox sxCSS={{ order: 3 }}>
                                <p>AAA"</p>
                            <Box sx={{ maxWidth: '10px', ml: 'auto', mr: "0", mt: 'auto', mb: "auto"}}>
                            </Box>
                            </BorderLineBox>
                            <BorderLineBox sxCSS={{ order: -1 }}>
                                <p>:Dasxcvcxsads"</p>
                            <Box sx={{ maxWidth: '10px', ml: 'auto', mr: "0", mt: 'auto', mb: "auto"}}>
                            </Box>
                            </BorderLineBox>
                            <Box
                            sx={ { order: 1 } }
                        >
                            <Card  sx={{ 
                                // boxShadow: 'none',
                                bgcolor: 'transparent',
                                // minWidth: 150, 
                                flexGrow: 1,
                                // width: '70%',
                                mb: -2
                            }}>

                    <Grid row container spacing={0}  >
                        <Grid item xs={12} sm={6} md={6} >
                            <TotalCostTable />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={6} >
                            <JoyNotebox2 register={() => {} }/>
                        </Grid> */}
                    </Grid>
                            </Card>
                            </Box>
                    <Box component='td' 
                        
                        className="buttonRemoveItem-itemRow"
                            sx={{ flexBasis: "20px", p: 0, m: 0, mr: "5px",  mt: 'auto', mb: "auto"
                            }} 
                            /> 
                        </Box>
                    </Box>

                </TableContainer>
            </Container>
        <div    css={borderLine} ><p>"ASdsads"</p> </div>
        </div>

        <input type='submit' />
        </Form>
    </Create>
);
};