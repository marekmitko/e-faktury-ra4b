import {useRef, useState} from "react";
import { Container, GlobalStyles, TableContainer, TableFooter, TablePagination, TableCell, useMediaQuery } from "@mui/material";
import JoyCssBaseline from '@mui/joy/CssBaseline';
import JoyGlobalStyles from '@mui/joy/GlobalStyles';
import {
    ArrayInput,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    Form, Title, SelectField, SelectInput, useRecordContext
} from 'react-admin'; 
import { SalesFormIterator } from "../../../new-sales-table/components/sales-form-iterator/SalesFormIterator";
import { CustomInputNumber, MyControlledPriceNumberInput, PriceNumberInput, RaPriceNumberInput } from "../../../new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/custom/CustomInputNumber";
import { PriceField } from "../../../new-sales-table/components/sales-form-iterator/subcomponent/field/PriceField";
import AutoValidInput from "../../../new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/auto-valid-input/AutoValidInput";
import MuiAutoValidInput from "../../../new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/auto-valid-input/MuiAutoValidInput";
import { InputTextSelected } from "../../../new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelected";
import { productOptions, taxOptions, typeOptions  } from "../../../../../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import { SelectInputItem } from "../../../new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItem";
import { MQ_isMinimal, MQ_isSmall, MQ_isMedium, MQ_isXSmall, MQ_isLarge} from "../../../new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import { InputTextNumber } from "../../../new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/ra-input-text-number/InputTextNum";
import SalesTableHeader from "../../../new-sales-table/components/sales-table-header/SalesTableHeader";
import JoyBox from "@mui/joy/Box";
import TotalResultCostTable from "../../../new-sales-table/components/sales-form-iterator/subcomponent/total-cost-result-table/TotalResultCostTable";
 

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



export const FormsCreate = props => { 


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
                    <ArrayInput source="products-test" fullWidth>
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
                    <JoyBox  className="App"
                            sx={{
                                mt: 0,
                                pt: 0,
                                pb: 1,
                                display: 'flex',
                                // display: "grid",
                                // gridTemplateColumns: 'repeat(2, 1fr)',
                                // gridGap: 10,
                                // alignItems: "baseline"
                            }}
                >
                    {/* <p>"TotalCostTable"</p>   */}
                    {/* <TotalResultCostTable /> */}
                </JoyBox>
                </TableContainer>
            </Container>
        </div>
        <hr/>
        <PriceNumberInput name="LAalal" /> {/* //działa  dobrze */}
        <MyControlledPriceNumberInput name='testPrice'  />
        <MuiAutoValidInput  />
        <hr/>
        <RaPriceNumberInput name="Faf" />     {/* // muli  */}
        <input type='submit' />
        </Form>
        {/* </SimpleForm> */}
    </Create>
);
};