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

import { useSimpleFormIteratorItem, useSimpleFormIterator, 
        SimpleFormIteratorItemContext // *edu https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/input/ArrayInput/SimpleFormIteratorItemContext.ts
} from 'react-admin';

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
                <tr     style={{ backgroundColor: 'azure'}} >
                <tr ref={ref}     style={{border: "2px blue solid", padding: '10px'}} 
                        // className={SimpleFormIteratorClasses.line} 
                >

                    {/* {label && ( */}
                    {true && (
                        <Typography
                            sx={{ bgcolor: 'midnightblue', color: 'white'}}
                            variant="body2"
                            // className={SimpleFormIteratorClasses.index}
                        >
                            {label}{"label sales row"}
                        </Typography>
                    )}
                    <section      style={{border: "2px blue dotted", padding: '1px', margin: '10px', backgroundColor: 'white'}}      // https://stackoverflow.com/questions/57557271/how-to-use-clsx-in-react
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
                        </section>
                        <section>
                        <p>{(myPriceFormat)? myPriceFormat : "0.oo" }</p>
                        </section>
                </tr>
                </tr>
            </SimpleFormIteratorItemContext.Provider>
        );
    }
);