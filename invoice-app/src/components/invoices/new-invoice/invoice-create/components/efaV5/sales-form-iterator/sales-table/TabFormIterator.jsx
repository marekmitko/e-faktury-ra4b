import * as React from "react";
import { cloneElement, useCallback, useMemo, useState, useRef } from "react";
import "../../../../../../../../style/styleNewTableFormIterator.css";
import { data } from "../table-form-iterator/dataTableFormIterator";
import { EfaRemoveItemButton } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/button/RemoveItemButton";
import { AddItemRowButton } from "../subcomponent/button/AddItemRowButton";
import { ReOrderButtons, SimpleFormIteratorContext } from "react-admin";
import useProductFormIterator from "../logic/useProductFormField";
import { TabFormIteratorItemRow } from "./TableFormIteratorItem";
import { ItemIndexChip } from "../../../../efa-invoice-form/components/index-item-row/ItemIndexChip";
import { MQ_isMedium } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import { useMediaQuery } from "@mui/material";
import { MobileCounterTd } from "./table-data-cell/MobileCounterTd";
import clsx from "clsx";
import SwitchNetOrGross from "../../../../efa-invoice-form/components/new-sales-table/components/sales-table-header/components/SwitchNetOrGross";

const required = () => (value) =>
    value ? undefined : "myroot.validation.required";
const data_table = data;
const nameSalesIteratorForm = "products";

export const TabFormIterator = React.forwardRef((props, ref) => {
    const {
        addButton = <AddItemRowButton />,
        removeButton = <EfaRemoveItemButton />, //<RemoveItemButton/>,
        reOrderButtons = <ReOrderButtons />,
        children,
        className,
        resource,
        source,
        disabled,
        disableAdd,
        disableClear,
        disableRemove,
        disableReordering,
        inline = false,
        getItemLabel = false,
        fullWidth,
        sx,
        entryPriceIsGross,
        setEntryPriceOnGross,
    } = props;

    const isMedium = useMediaQuery(`${MQ_isMedium}`);

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);
    const initialDefaultValue = useRef({});
    const {
        records,
        record,
        fields,
        translate,
        removeField,
        addField,
        move,
        replace,
    } = useProductFormIterator(props);
    // removeField

    // add field and call the onClick event of the button passed as addButton prop
    const handleAddButtonClick =
        (
            originalOnClickHandler // : MouseEventHandler
        ) =>
        (event) => {
            //: MouseEvent
            addField();
            if (originalOnClickHandler) {
                originalOnClickHandler(event);
            }
        };

    const handleReorder = useCallback(
        (origin, destination) => {
            move(origin, destination);
        },
        [move]
    );

    const handleArrayClear = useCallback(() => {
        replace([]);
        setConfirmIsOpen(false);
    }, [replace]);

    const context = useMemo(
        () => ({
            total: fields.length,
            add: addField,
            remove: removeField,
            reOrder: handleReorder,
            source,
            // to dodałem
            //   getValues,
        }),
        [addField, fields.length, handleReorder, removeField, source]
    );

    // const userMyRef = React.useRef({});

    return fields ? (
        <SimpleFormIteratorContext.Provider value={context}>
            {/* <ResponsiveTable columns={data2.columns} data={data2.data} /> */}
            <div class="sales__table container">
                <table class="new__sales__table">
                    <thead>
                        <tr class="sales__row__header">
                            {data_table.fields
                                .filter((item) => item.show)
                                .map((item) => {
                                    if (item.description === "Price")
                                        return (
                                            <th
                                                class={
                                                    item.class ? item.class : ""
                                                }
                                            >
                                                <SwitchNetOrGross
                                                    {...{
                                                        entryPriceIsGross,
                                                        setEntryPriceOnGross,
                                                    }}
                                                />
                                            </th>
                                        );
                                    return (
                                        <th
                                            class={item.class ? item.class : ""}
                                        >
                                            {item.description}
                                        </th>
                                    );
                                })}
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((member, index) => {
                            return (
                                <>
                                    <tr class="sales-item-row" key={index}>
                                        <TabFormIteratorItemRow
                                            key={member.id}
                                            disabled={disabled}
                                            disableRemove={
                                                isMedium ? false : disableRemove
                                            }
                                            disableReordering={
                                                disableReordering
                                            }
                                            fields={fields}
                                            getItemLabel={getItemLabel}
                                            index={index}
                                            member={`${source}.${index}`}
                                            onRemoveField={removeField}
                                            onReorder={handleReorder}
                                            record={
                                                (records && records[index]) ||
                                                {}
                                            }
                                            removeButton={removeButton}
                                            reOrderButtons={reOrderButtons}
                                            resource={resource}
                                            source={source}
                                            // ref={userMyRef}
                                            inline={inline}
                                            entryPriceIsGross={
                                                entryPriceIsGross
                                            }
                                        >
                                            <MobileCounterTd
                                                indexChip={
                                                    <ItemIndexChip
                                                        index={index}
                                                    />
                                                }
                                                removeButton={removeButton}
                                                itemName={translate(
                                                    "resources.e_faktury.list.header.sales_item"
                                                )}
                                                // visibility={isMedium ? "collapse" : "hidden"}
                                                display={isMedium ? "" : "none"}
                                            />
                                            <td
                                                class="td-counter"
                                                style={{
                                                    display: isMedium
                                                        ? "none"
                                                        : "",
                                                }}
                                            >
                                                <div class="counter-container">
                                                    <div>
                                                        <ItemIndexChip
                                                            index={index}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            {children}
                                        </TabFormIteratorItemRow>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
                <div className="sales-item-add-button container">
                    {!disableAdd && (
                        <div className="add-item-button">
                            {cloneElement(addButton, {
                                className: clsx(
                                    "-button-add",
                                    `button-add-${source}`
                                ),
                                onClick: handleAddButtonClick(
                                    addButton.props.onClick
                                ),
                            })}
                        </div>
                    )}
                </div>
            </div>
        </SimpleFormIteratorContext.Provider>
    ) : null;
});
