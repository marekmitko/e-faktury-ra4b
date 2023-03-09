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
} from 'react';
import JoyTypography from '@mui/joy/Typography';
// import clsx from 'clsx';
import {  useWatch } from "react-hook-form";

import { useSimpleFormIteratorItem, useSimpleFormIterator, 
        SimpleFormIteratorItemContext // *edu https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/input/ArrayInput/SimpleFormIteratorItemContext.ts
} from 'react-admin';
import {
    List,
    ListItem,
    Divider,
    ListItemContent,
    Button,
    Box, Stack, Card,
    Link, CardCover, CardContent
    } from "@mui/joy";
import RowContainerIterator from './subcomponent/form-iterator/RowContainerIterator';
import { PriceField } from './subcomponent/field/PriceField';
import { ShowItemSumCost } from './subcomponent/field/ShowItemSumCost';
import { wrap } from 'lodash';
import { BorderLinebox, InnerLinebox } from '../../../layout/RowLineLayout';

export const SalesFormIteratorRow = React.forwardRef((props, ref) => {
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
            sxSumPriceBox
        } = props;

        
        // * A hook that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
        // * Useful to create custom array input iterators.
        const { total, reOrder, remove, getValues } = useSimpleFormIterator();

        // to zastąpiłem getValues() - optymalizacja //*edu Sprawdzić poprawność 
        const { product_count, product_price_netto, product_vat  } = useWatch({ name: `${member}` });

        // const {myPriceFormat, ilość } = getValues(`${member}`);

        // Returns a boolean to indicate whether to disable the remove button for certain fields.
        // If disableRemove is a function, then call the function with the current record to
        // determining if the button should be disabled. Otherwise, use a boolean property that
        // enables or disables the button for all of the fields.
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

                
                <div ref={ref}     style={{ width: "100%"   }} 
                        // className={SimpleFormIteratorClasses.line} 
                >

                    {/*BOX ITEM INDEX   */}
                    <BorderLinebox sxCSS={{ order: -1 }} >
                    <Box component='td' className="indexItem-itemRow" sx={{ 
                        flexBasis: "20px", p: 0, m: 0, mx: "5px",  mt: 'auto', mb: "auto"
                        }}>
                            <Box sx={{ maxWidth: '10px', ml: 'auto', mr: "0", mt: 'auto', mb: "auto"}}>

                        {label && (
                            <JoyTypography textAlign='center'
                            sx={{ bgcolor: 'background.paper', px: 0.5, ml: -1.5, color: 'neutral.600', borderRadius: "25%", boxShadow: 1 }}
                            variant="body1"
                            // className={SimpleFormIteratorClasses.index}
                            >
                            {label}
                        </JoyTypography>
                    )}
                    </Box>
                    </Box>
                    </BorderLinebox>
                    <InnerLinebox sxCSS={{ order: 1  }} >
                <Box component='tr' className='itemRow-salesIterator' sx={  sxItemRow  } >
                    <td className="mainContentItem-itemRow" style={{width: '100%'}}>
                        {/* <tr > */}
                        <Box
                            // sx={ sxItemContent }
                        >
                            <Card  sx={{ 
                                boxShadow: 'none',
                                // minWidth: 150, 
                                flexGrow: 1,
                                // width: '70%',
                                mb: -2
                            }}>
                                <CardCover 
                                sx={{ bgcolor: 
                                    "transparent"
                                }} 
                                />
                                <CardContent
                                sx={ sxInputContent }
                                >
                                {/* 
                                GOTOWA KARTA WIERSZA
                                https://codesandbox.io/s/efa23-product-card-mobi-version-3-vphxjv */}
                                {Children.map(
                                    children,
                                    (input, index2) => {      // input: ReactElement,

                                        if (!isValidElement(input)) {
                                            return null;
                                        }
                                        const { source, ...inputProps } = input.props;
                                        return cloneElement(input, {
                                            source: source
                                                ? `${member}.${source}`
                                                : member,
                                            index: source ? undefined : index2,
                                            resource,
                                            disabled,
                                            ...inputProps,
                                        });
                                    }
                                )}
                                </CardContent>
                            </Card>
                            <Card  component="td" sx={{ 
                                // minWidth: 150, 
                                // flexGrow: 0, flexBasis: 'fit-content',
                                ml: "auto", mr: 0,  mt: 'auto', mb: 0,
                                boxShadow: 'none',
                                bgcolor: 'transparent',
                                // p:0
                                }}>
                                <CardCover sx={{ 
                                    
                                    bgcolor: "transparent" 
                                    
                                    }} />
                                <CardContent sx={{ ml: "auto", mr: 0,  
                                                    width: 'auto'
                            }}>

                                    {/* <TitleItemRow title={""} /> */}
                                    <Stack
                                        // direction={isSmall ? "row" : "column"}
                                        alignItems="flex-start"
                                        justifyContent="flex-end"
                                        spacing={0.5}
                                        >
                                    <ShowItemSumCost >
                                    <Stack  alignItems="center" gap={0.5} sx={ sxSumPriceBox }
                                    >
                                        {/* <PriceField title="netto" >
                                            <td style={{ padding: "0 20px" }}>
                                            {(product_price_netto && product_count )? product_price_netto*product_count : "0.00" }
                                            </td>
                                        </PriceField> */}
                                            <td style={{ padding: "0 10px",    marginRight: "5px", marginLeft: 'auto'    }}>
                                                <JoyTypography textAlign="left" noWrap level="body2" textColor='neutral.500'   >
                                                    Suma netto&nbsp;&nbsp;
                                                </JoyTypography>
                                                <JoyTypography textAlign="right" noWrap fontWeight="500" sx={{ pl: 1  }} >
                                                    {(product_price_netto && product_count )? product_price_netto*product_count : "0.00" }
                                                </JoyTypography>
                                            </td>
                                            <td style={{ padding: "0 10px",   marginRight: "5px", marginLeft: 'auto' }}>
                                                <JoyTypography textAlign="left" noWrap level="body2" textColor='neutral.500'>
                                                    Suma brutto
                                                </JoyTypography>
                                                <JoyTypography textAlign="right" noWrap fontWeight="500" sx={{ pl: 1  }}>
                                                    {(product_price_netto && product_count &&  product_vat )? ((product_price_netto*product_count)*product_vat)/100 : "0.00" }
                                                </JoyTypography>
                                            </td>
                                        </Stack>
                                    </ShowItemSumCost>
                                </Stack>
                            </CardContent>
                        {/* </RowContainerIterator> */}
                            </Card>

                        </Box>
                        {/* </tr> */}



                    </td>
                        </Box>
                    </InnerLinebox>

                    {!disabled && (
                        // <span className={SimpleFormIteratorClasses.action}>
                        <BorderLinebox sxCSS={{ order: 3 }} >

                            {/* <Box ref={ref}  component='td' className="buttonRemoveItem-itemRow"
                             sx={{ flexBasis: "20px", p: 0, m: 0, mr: "5px",  mt: 'auto', mb: "auto"
                            }}>  */}
                        {/* <div   style={{ maxWidth: '10px' }}> */}
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

                            {!disableRemoveField(record) &&
                                cloneElement(removeButton, {
                                    onClick: handleRemoveButtonClick(
                                        removeButton.props.onClick,
                                        index
                                    ),
                                    // className: clsx(
                                    //     'button-remove',
                                    //     `button-remove-${source}-${index}`
                                    // ),
                                })}
                        {/* </div> */}
                     {/* </Box> */}
                </BorderLinebox>
                    )}
                     {/* </Box> */}
                </div>
            </SimpleFormIteratorItemContext.Provider>
        );
    }
);