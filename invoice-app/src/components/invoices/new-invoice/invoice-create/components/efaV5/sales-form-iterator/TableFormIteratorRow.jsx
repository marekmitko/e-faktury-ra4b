import * as React from 'react';
import { textAlign } from "@mui/system";
import {
    Children,
    cloneElement,
    MouseEvent,
    MouseEventHandler,
    isValidElement,
    ReactElement,
    ReactNode,
    useMemo,
    useEffect,
} from 'react';
import JoyTypography from '@mui/joy/Typography';
// import clsx from 'clsx';
import {  useWatch } from "react-hook-form";

import { useSimpleFormIteratorItem, useSimpleFormIterator, 
        SimpleFormIteratorItemContext, // *edu https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/input/ArrayInput/SimpleFormIteratorItemContext.ts
        useTranslate
} from 'react-admin';
import {
    Box, Stack, Card,
    Link, CardCover, CardContent, Grid, styled, cardClasses
    } from "@mui/joy";
import RowContainerIterator from './subcomponent/form-iterator/RowContainerIterator';
import { PriceField } from './subcomponent/field/PriceField';
import { ShowItemSumCost } from './subcomponent/field/ShowItemSumCost';
import { wrap } from 'lodash';
import { SumItemOutputShow } from './subcomponent/item-outputs/SumItemOutputShow';
import { Typography, useMediaQuery } from '@mui/material';
import { MQ_isMedium, RowItemClasses, RowItemClassesPrefix, SalesFormIteratorClasses, SalesFormIteratorPrefix } from './useSalesFormIteratorStyles';
import { InnerLinebox, BorderLinebox } from '../../../efa-invoice-form/components/layout/RowLineLayout';
import { formatCurrency } from '../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ';
import MobiSumItemContent from './sales-item/mobile-view/components/sales-item-row/subcomponent/MobiSumItemContent';










const getGrossSum =  (priceNetto, qty, tax) => {
    let priceSum = 0;
    if(priceNetto && qty &&  tax)
        priceSum = ((priceNetto*qty)*tax)/100;

    return formatCurrency(priceSum);  
}; 
const getNetSum =  (priceNetto, qty) => {
    let priceSum = 0;
    if(priceNetto && qty )
        priceSum = (priceNetto*qty);

    return formatCurrency(priceSum);  
}; 





export const TableFormIteratorRow = React.forwardRef((props, ref) => {
        const {         // MobileFormIteratorItemProps
            children,  
            disabled,
            disableReordering,
            disableRemove, 
            getItemLabel,
            index,
            inline = true,
            member,
            record,
            removeButton,
            reOrderButtons,
            resource,
            source,
            fields, 
            sxItemRow,
            sxItemContent,
            sxInputContent,
            sxSumPriceBox,
            wraperSectionItem,
            entryPriceIsGross, setValue
        } = props;
        
        // * A hook that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
        // * Useful to create custom array input iterators.
        const { total, reOrder, remove } = useSimpleFormIterator();

        // to zastąpiłem getValues() - optymalizacja //*edu Sprawdzić poprawność 
        const { product_count, product_vat, product_price_netto,  product_price_brutto, } = useWatch({ name: `${member}` });
        
        const enteryValue = entryPriceIsGross ? product_price_brutto : product_price_netto;
        const newDependentValue = useMemo(() => {
            // if (!enteryValue) return "";
            if (!entryPriceIsGross  ) //setGrossPriceItem
                return ((!isNaN(enteryValue)) ? (parseFloat(enteryValue)  * (product_vat)) : "0.00" ) / 100;
            if (entryPriceIsGross) //setNetPriceItem
                return (parseFloat(+enteryValue) / (product_vat)) * 100 ;
            }, [enteryValue, product_vat, entryPriceIsGross]);
    
            const nameNetValeu = member + '.product_price_netto';
            const nameGrossValeu = member + '.product_price_brutto';
        useEffect(() => {
            if ( !isNaN(!parseFloat(newDependentValue)) && entryPriceIsGross ) {
                setValue(nameNetValeu, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"  }`);
                // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
            }
            if ( !isNaN(!parseFloat(newDependentValue)) && !entryPriceIsGross && product_vat ){
                setValue( nameGrossValeu, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"  }` );
                // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );

            }
            // }, [ grossPriceInput, taxValueInput]);
        }, [enteryValue, product_vat, entryPriceIsGross]);



        const disableRemoveField = (record) => {
            if (typeof disableRemove === 'boolean') {
                return disableRemove;
            }
            return disableRemove && disableRemove(record);
        };

        // remove field and call the onClick event of the button passed as removeButton prop
        const handleRemoveButtonClick = (
            originalOnClickHandler, //MouseEventHandler,
            index // number
        ) => (event) => { // MouseEvent
            remove(index);
            if (originalOnClickHandler) {
                originalOnClickHandler(event);
            }
        };

        const context = useMemo( // SimpleFormIteratorItemContextValue
            () => ({
                index,
                total,
                reOrder: newIndex => reOrder(index, newIndex),
                remove: () => remove(index),
            }),
            [index, total, reOrder, remove]
        );

        const label =
            typeof getItemLabel === 'function'
                ? getItemLabel(index)
                : getItemLabel;


        const isMedium = useMediaQuery(`${MQ_isMedium}`);
        
        return (
            <SimpleFormIteratorItemContext.Provider value={context}>
                <RootRowLine ref={ref}  className={RowItemClassesPrefix} >
                    {/*BOX ITEM INDEX   */}
                        
                            {label && (
                        <BorderLinebox sxCSS={{ order: -1, height: '100%', }} className={RowItemClasses.index} >
                            <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', m: 0, p: 0, height: '100%' }}>
                                {/* <JoyTypography  sx={{ p: 0, m: 0, maxWidth: '20px',  bgcolor: 'background.paper',  color: 'neutral.600', borderRadius: "25%",     }}
                                    variant="body1"
                                > */}
                                    {label}
                                {/* </JoyTypography> */}
                        </Box>
                    </BorderLinebox>
                        )}
                        {/* </Box> */}
                    <InnerLinebox sxCSS={{ order: 1, m: 0, p: 0,  }} 
                        className={RowItemClasses.inline} 
                    >
                        <Card sx={{ p: 0, m: 0 }} component="section" className={RowItemClasses.rowSection}  >
                            {/* <Box sx={ wraperSectionItem }> */}
                                <div style={{    gridArea: 'rowInput'    }} >
                                        <Card component='section' className='inputSection-itemRow' sx={{  
                                            // gridArea: "inputSection",
                                            height: '115px',
                                            boxShadow: 'none', 
                                            p: 0,
                                            // flexGrow: 1,  
                                            m: 0,
                                            bgcolor:  "transparent"  }}>
                                            <CardCover  sx={{ bgcolor:  'transparent'  }}      />
                                            {/* <CardContent sx={ sxInputContent }     >    GOTOWA KARTA WIERSZA  https://codesandbox.io/s/efa23-product-card-mobi-version-3-vphxjv */}
                                            
                                            
                                            
                                            <CardContent component='tr' sx={  { mx:.75, ...sxInputContent} }     >  {/*   GOTOWA KARTA WIERSZA  https://codesandbox.io/s/efa23-product-card-mobi-version-3-vphxjv */}
                                            {Children.map(
                                                children,
                                                (input, index2) => {      // input: ReactElement,
                                                    
                                                    if (!isValidElement(input)) {
                                                        return null;
                                                    }
                                                    const { source, myIdx, ...inputProps } = input.props;
                                                    return  cloneElement(input, {
                                                        source: source
                                                        ? `${member}.${source}`
                                                            : member,
                                                        // index: source ? undefined : index2,
                                                        index: source ? index : index2,
                                                        resource,
                                                        disabled,
                                                        ...inputProps,
                                                    });
                                                }
                                                )}
                                            </CardContent>
                                        </Card>
                                </div>
                                { !isMedium &&

                                    <div style={{ 
                                        gridArea: 'rowOutput'
                                        // flex: 'initial' 
                                    }} >
                                    <Card  component="section"  className='outputSection-itemRow' sx={{  p: 0,
                                        ml: "auto", mr: 0,  mt: 0.5, mb: 0,
                                        boxShadow: 'none',
                                        bgcolor: 'transparent',
                                        // width: '100%'
                                        }}
                                    >
                                        <CardCover sx={{    bgcolor: "transparent"   }}  />
                                        <CardContent sx={{ ml: "auto", mr: 0,  
                                                        //   backgroundColor: 'red'
                                    }}>

                                        {/* <TitleItemRow title={""} /> */}
                                            <Stack sx={{  mt: -2, }}
                                                // direction={isSmall ? "row" : "column"}
                                                alignItems="flex-start"
                                                justifyContent="flex-end"
                                                spacing={0.5}
                                                >
                                            <ShowItemSumCost >
                                            <Stack  alignItems="center" gap={0} sx={ sxSumPriceBox } className="outputStack" >
                                                        <Box noWrap  className="outputBox" sx={{ display: 'flex',   pl: 1, gap: 1,   fontWeight: '400',  minWidth: {lg:'300px', xs: '150px', sm: '300px'},  }}>
                                                            <SumItemOutputShow label='myroot.form.label.header_salesTable.sumNetOutput'
                                                                noWrap cssBox={{   flex: 1 }} 
                                                            >
                                                                { getNetSum(product_price_netto, product_count ) }
                                                            </SumItemOutputShow>
                                                            <SumItemOutputShow label='myroot.form.label.header_salesTable.sumGrossOutput'
                                                                noWrap cssBox={{  flex: 1 }}
                                                                >
                                                                { getGrossSum(product_price_netto, product_count, product_vat ) }
                                                            </SumItemOutputShow>
                                                        </Box>
                                                </Stack>
                                            </ShowItemSumCost>
                                        </Stack>
                                        </CardContent>
                                    </Card>
                                </div>
                        }
                            {/* </Box> */}
                        </Card>
                        { isMedium &&
                                    <MobiSumItemContent 
                                        firstlineItemSum={getNetSum(product_price_netto, product_count )} 
                                        secondlineItemSum={ getGrossSum(product_price_netto, product_count, product_vat ) }
                                    />
                        }
                                    {/* <OldMobiSumItemContent /> */}
                    </InnerLinebox>
                    {!disabled && (
                        // <span className={SimpleFormIteratorClasses.action}>
                        <BorderLinebox sxCSS={{ order: 3 }} >
                            {!disableReordering &&
                                cloneElement(reOrderButtons, {
                                    index,
                                    max: total,
                                    reOrder,
                                    // className: clsx(
                                    //     'button-reorder',
                                    //     `button-reorder-${source}-${index}`
                                    // ),
                                })}

                            {/* {!disableRemoveField(record) &&
                                cloneElement(removeButton, {
                                    onClick: handleRemoveButtonClick(
                                        removeButton.props.onClick,
                                        index
                                    ),
                                    // className: clsx(
                                    //     'button-remove',
                                    //     `button-remove-${source}-${index}`
                                    // ),
                                })} */}
                        {/* </div> */}
                     {/* </Box> */}
                </BorderLinebox>
                    )}
                     {/* </Box> */}
                </RootRowLine>
            </SimpleFormIteratorItemContext.Provider>
        );
    }
);



const RootRowLine = styled('div', {
    name: RowItemClassesPrefix,
overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    width: '100%',
    margin: 0,
    pading: 0, 

// '& > ul': {
//     padding: 0,
//     marginTop: 0,
//     marginBottom: 0,
//     width: '100%',
// },
// '& > ul > li:last-child': {
//     // hide the last separator
//     borderBottom: 'none',
// },
// backgroundColor: 'red',
[`.${RowItemClasses.line}`]: {
    display: 'flex',   
    
    borderBottom: `solid 1px ${theme.palette.divider}`,
    [theme.breakpoints.down('sm')]: { display: 'block' },
},
[`& .${RowItemClasses.index}`]: {
    display: 'flex-inline',
    // gap: theme.spacing(1),
    marginRight: theme.spacing(1),
    // marginTop: theme.spacing(1),
    // [theme.breakpoints.down('md')]: { display: 'none' },
},
[`& .${RowItemClasses.inline}`]: {
    // alignItems: 'flex-start',
    // display: 'flex',
    // flexDirection: 'column',
    [theme.breakpoints.down('md')]: { 
        // backgroundColor: `${theme.palette.background.paper}`,
        // boxShadow:  `${theme.shadows[2]}`, //'1'mui-shadowRing)
        marginBottom:   theme.spacing(5),
    },

    [`& .${RowItemClasses.rowSection}`]: {
        // backgroundColor: 'pink', padding: '10px', margin: '10px', width: '40%'
        [theme.breakpoints.up('md')]: { 
            backgroundColor: 'transparent',
            boxShadow:  `${theme.shadows[0]}` //'1'mui-shadowRing)
        },
//Om2 tu jest clou - syle item sales list 
        [theme.breakpoints.down('md')]: { 
            // backgroundColor: `${theme.palette.background.paper}`,
            backgroundColor: 'transparent',
            // boxShadow:  `${theme.shadows[2]}`, //'1'mui-shadowRing)
            boxShadow:  `${theme.shadows[0]}`, //'1'mui-shadowRing)
            gap: theme.spacing(3),
        },
    },
},
[`& .${RowItemClasses.rowSection}`]: {
    display: 'grid',
    gridTemplateColumns: '500px  minmax(auto-fill, 300px)',
    rowGap: '10px',
    // columnGap: 1,
    gridAutoFlow: 'row',
    gridTemplateRows: 'auto',
    [theme.breakpoints.down('lg')]: { gridTemplateAreas:`"rowInput"
                                                        "rowOutput"`, },
    [theme.breakpoints.up('lg')]: {   gridTemplateAreas: `"rowInput rowOutput"`,},
    [`& .outputStack > div`]: {
        [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
    },
    [`& .outputStack .outputBox > div`]: {
        [theme.breakpoints.up('lg')]: { maxWidth: '150px' },
        // [theme.breakpoints.down('lg')]: { maxWidth: '50%' },
    },
},
// [`& .${RowItemClasses.action}`]: {
//     marginTop: theme.spacing(0.5),
//     visibility: 'hidden',
//     '@media(hover:none)': {
//         visibility: 'visible',
//     },
// },
// [`& .${RowItemClasses.buttons}`]: {
//     display: 'flex',
// },
// [`& .${RowItemClasses.add}`]: {
//     borderBottom: 'none',
// },
// [`& .${RowItemClasses.clear}`]: {
//     borderBottom: 'none',
// },
// [`& .${RowItemClasses.line}:hover > .${RowItemClasses.action}`]: {
//     visibility: 'visible',
// },
}));