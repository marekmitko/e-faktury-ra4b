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
import { Typography } from '@mui/material';
// import clsx from 'clsx';
import {  useWatch } from "react-hook-form";
import {
    List,
    ListItem,
    Divider,
    ListItemContent,
    Button,
    Box, Stack, Card,
    Link, CardCover, CardContent
    } from "@mui/joy";
import { useSimpleFormIteratorItem, useSimpleFormIterator, 
        SimpleFormIteratorItemContext // *edu https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/input/ArrayInput/SimpleFormIteratorItemContext.ts
} from 'react-admin';
import RowContainerIterator from '../../../new-sales-table/components/sales-table/RowContainerIterator';
import { ShowItemSumCost } from '../../../new-sales-table/components/sales-form-iterator/subcomponent/field/ShowItemSumCost';
import { PriceField } from '../../../new-sales-table/components/sales-form-iterator/subcomponent/field/PriceField';

export const SalesTableFormIteratorRow = React.forwardRef((props, ref) => {
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
            fields
        } = props;

        
        // * A hook that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
        // * Useful to create custom array input iterators.
        const { total, reOrder, remove } = useSimpleFormIterator();
        const {myPriceFormat, age } = useWatch({ name: `${member}` });
        console.log("fields", fields);
        // console.log("ref",  ref);

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
                <tr ref={ref}     style={{border: "2px blue solid", padding: '10px',  backgroundColor: 'skyblue',}} 
                        // className={SimpleFormIteratorClasses.line} 
                >

                    {label && (
                    // {true && (
                        <Typography
                        sx={{ bgcolor: 'midnightblue', color: 'white'}}
                        variant="body2"
                            // className={SimpleFormIteratorClasses.index}
                        >
                            {label}{"label sales row"}
                        </Typography>
                    )}
                    {/* <section      style={{border: "2px blue dotted", padding: '1px', margin: '10px', backgroundColor: 'white'}}      // https://stackoverflow.com/questions/57557271/how-to-use-clsx-in-react
                    >                */}
                <RowContainerIterator >
                    <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                        <CardCover 
                        // sx={{ bgcolor: "#7F9FBF" }} 
                        />
                        <CardContent>
                        {/* 
                        GOTOWA KARTA WIERSZA
                        https://codesandbox.io/s/efa23-product-card-mobi-version-3-vphxjv */}
                        {Children.map(
                            children,
                            (input, index2) => {      // input: ReactElement,
                                // console.log("index:", index, "index2:", index2);
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
                        <Card component="li" sx={{ minWidth: 300, flexGrow: 0, flexBasis: 'fit-content'}}>
                            <CardCover sx={{ bgcolor: "#7F9FBF" }} />
                            <CardContent>
                                {/* <TitleItemRow title={""} /> */}
                                <Stack
                                    // direction={isSmall ? "row" : "column"}
                                    alignItems="flex-start"
                                    justifyContent="flex-end"
                                    spacing={0.5}
                                    >
                                <ShowItemSumCost >
                                <Stack direction="row" alignItems="center" gap={0.5}>

                                    <PriceField title="netto" >
                                        <td style={{ padding: "0 20px" }}>
                                            {(myPriceFormat)? myPriceFormat : "0.00" }  
                                        </td>
                                    </PriceField>
                                    <PriceField   title="brutto">
                                        <td style={{ padding: "0 20px" }}>
                                            {(age)? age : "0.00" }
                                        </td>
                                    </PriceField>
                                    <PriceField   title="brutto">
                                        <td style={{ padding: "0 20px" }}>
                                            {(age && myPriceFormat )? age*myPriceFormat : "0.00" }
                                        </td>
                                    </PriceField>
                                    </Stack>
                                </ShowItemSumCost>
                            </Stack>
                        </CardContent>
                    </Card>
                    {!disabled && (
                        // <span className={SimpleFormIteratorClasses.action}>
                        <span>
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
                        </span>
                    )}
                </RowContainerIterator>
                </tr>
            </SimpleFormIteratorItemContext.Provider>
        );
    }
);