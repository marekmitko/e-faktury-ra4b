import * as React from 'react';
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
// import { Typography, useMediaQuery } from '@mui/material';
import { formatCurrency } from '../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ';


const RowItemClassesPrefix = 'ItemTableRow';





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





export const TabFormIteratorItemRow = React.forwardRef((props, ref) => {
        
        const { 
            children,
            disabled,
            disableReordering,
            disableRemove,
            getItemLabel,
            index,
            inline = false,
            member,
            record,
            fields,
            removeButton,
            reOrderButtons,
            resource,
            source, setValue,
            isMedium
        } = props;


        
        // * A hook that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
        // * Useful to create custom array input iterators.
        const { total, reOrder, remove } = useSimpleFormIterator();

        // to zastąpiłem getValues() - optymalizacja //*edu Sprawdzić poprawność 
        // const { product_count, product_vat, product_price_netto,  product_price_brutto, } = useWatch({ name: `${member}` });
        
        // const enteryValue = entryPriceIsGross ? product_price_brutto : product_price_netto;
        // const newDependentValue = useMemo(() => {
        //     // if (!enteryValue) return "";
        //     if (!entryPriceIsGross  ) //setGrossPriceItem
        //         return ((!isNaN(enteryValue)) ? (parseFloat(enteryValue)  * (product_vat)) : "0.00" ) / 100;
        //     if (entryPriceIsGross) //setNetPriceItem
        //         return (parseFloat(+enteryValue) / (product_vat)) * 100 ;
        //     }, [enteryValue, product_vat, entryPriceIsGross]);
    
        //     const nameNetValeu = member + '.product_price_netto';
        //     const nameGrossValeu = member + '.product_price_brutto';
        // useEffect(() => {
        //     if ( !isNaN(!parseFloat(newDependentValue)) && entryPriceIsGross ) {
        //         setValue(nameNetValeu, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"  }`);
        //         // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
        //     }
        //     if ( !isNaN(!parseFloat(newDependentValue)) && !entryPriceIsGross && product_vat ){
        //         setValue( nameGrossValeu, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"  }` );
        //         // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );

        //     }
        //     // }, [ grossPriceInput, taxValueInput]);
        // }, [enteryValue, product_vat, entryPriceIsGross]);



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


        
        return (
            <SimpleFormIteratorItemContext.Provider value={context}>
                  {/* <td data-th={field.description}>{item[field.id]}</td> */}
                    {/* //Om!!<td  ref={ref}   > */}

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
                                 {/* <td data-th={"field.description"}>{"item[field.id]"}</td> */}
            </SimpleFormIteratorItemContext.Provider>
        );
    }
);



// const RootRowLine = styled('div', {
//     name: RowItemClassesPrefix,
// overridesResolver: (props, styles) => styles.root,
// })(({ theme }) => ({
//     width: '100%',
//     margin: 0,
//     pading: 0,
// } 
// ));