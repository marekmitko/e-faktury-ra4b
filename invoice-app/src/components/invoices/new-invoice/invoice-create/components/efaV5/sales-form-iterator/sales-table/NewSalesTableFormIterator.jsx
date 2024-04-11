import * as React from "react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/joy";
// import { jsx, css } from "@emotion/react";
import { ArrayInput, NumberInput, TextInput, useTranslate } from "react-admin";

import {
    MQ_isMinimal,
    MQ_isSmall,
    MQ_isMedium,
    MQ_isXSmall,
    MQ_isLarge,
} from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";

import { CustomInputNumber } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/custom/CustomInputNumber";
import { TabFormIterator } from "./TabFormIterator";
import {
    productOptions,
    taxOptions,
    typeOptions,
} from "../../../../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import MobiRemoveItemButton from "../sales-item/mobile-view/components/sales-item-row/subcomponent/MobiRemoveItemButton";
import { InputTextSelectedTd } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelectedTd";
import SelectInputItemTd from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItemTd";
import { InputTextSelectedTdNew } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelectedTdNew";

const number =
    (message = "Must be a number") =>
    (value) =>
        value && isNaN(Number(value)) ? message : undefined;

const required = () => (value) =>
    value ? undefined : "myroot.validation.required";

const validateQuantityNumber = [required(), number()];
//
const InputNumberTd = (props) => {
    return (
        <td className="input-quantity-sales-item">
            <NumberInput fullWidth step={1} {...props} />
        </td>
    );
};

const CustomNumberTd = (props) => {
    const { source, isMedium, entryPriceIsGross, defaultValue } = props;

    return (
        <td className="input-price-td">
            <CustomInputNumber
                source={`${source}_netto`}
                validate={vumberInputValidation}
                defaultValue={defaultValue}
                sx={{
                    gridArea: "price",
                    width: "100%",
                    mt: 0.5,
                    visibility: !entryPriceIsGross ? "visable" : "hidden",
                    display: !entryPriceIsGross ? "" : "none",
                }}
                label="myroot.form.label.inputbox_itemrow.netItem"
                variant={isMedium ? "outlined" : "outlined"}
            />
            <CustomInputNumber
                source={`${source}_brutto`}
                validate={vumberInputValidation}
                sx={{
                    gridArea: "price",
                    width: "100%",
                    mt: 0.5,
                    visibility: entryPriceIsGross ? "visible" : "hidden",
                    display: entryPriceIsGross ? "" : "none",
                }}
                label="myroot.form.label.inputbox_itemrow.grossItem"
                variant={isMedium ? "outlined" : "outlined"}
            />
        </td>
    );
};

const nameSalesIteratorForm = "products";

// https://blog.logrocket.com/guide-mui-grid-system/

const OptionRecord = { choice_product_list: productOptions };

const vumberInputValidation = [required()];

// const OptionRecord = {  choice_product_list: productOptions  };

const Separator = () => <Box pt="1em" />;

const maxLength =
    (max, message = "Too short") =>
    (value) =>
        value && value.length > max ? message : undefined;

const validateFirstName = [required(), maxLength(1000)];

export const SalesTableFormIterator = (props) => {
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra-large: 1536px

    const isMedium = useMediaQuery(`${MQ_isMedium}`);

    const [entryPriceIsGross, setEntryPriceOnGross] = useState(false);
    const translate = useTranslate();
    return (
        <>
            <ArrayInput
                className="array"
                label={false}
                source={`${nameSalesIteratorForm}`}
                fullWidth
                {...props}
            >
                <TabFormIterator
                    //   getItemLabel={(index) => <ItemIndexChip index={++index} />}
                    removeButton={<MobiRemoveItemButton />}
                    entryPriceIsGross={entryPriceIsGross}
                    setEntryPriceOnGross={setEntryPriceOnGross}
                >
                    <InputTextSelectedTdNew
                        fullWidth
                        className="input-sales-item-name"
                        source="product_name"
                        choiceOptions={OptionRecord.choice_product_list}
                        sx={{ gridArea: "name" }}
                        // placeholder={translate(
                        //     "resources.e_faktury.list.input.placeholder.sales_item_name"
                        // )}
                        validate={validateFirstName}
                    />
                    <SelectInputItemTd
                        validate={validateFirstName}
                        className="sales-type-item"
                        source="product_type"
                        // label="myroot.form.label.inputbox_itemrow.typeItem"
                        sx={{ gridArea: "type", "& svg": { mr: -0.5 } }}
                        defaultValue="placeholder"
                        options={typeOptions}
                        variant={isMedium ? "outlined" : "outlined"}
                        // placeholder={translate(
                        //     "resources.e_faktury.list.input.placeholder.sales_item_type"
                        // )}
                        label="resources.e_faktury.list.input.placeholder.sales_item_type"
                    />
                    <SelectInputItemTd
                        validate={validateFirstName}
                        className="tax-vat-item"
                        source="product_vat"
                        // label="myroot.form.label.inputbox_itemrow.taxItem"
                        sx={{ gridArea: "tax", "& svg": { mr: -0.5 } }}
                        defaultValue="placeholder"
                        options={taxOptions}
                        variant={isMedium ? "outlined" : "outlined"}
                        // placeholder={translate(
                        //     "resources.e_faktury.list.input.placeholder.sales_item_tax"
                        // )}
                        label="resources.e_faktury.list.input.placeholder.sales_item_tax"
                    />
                    <InputNumberTd
                        source="product_count"
                        label="myroot.form.label.inputbox_itemrow.qtyItem"
                        helperText={false}
                        validate={validateQuantityNumber}
                        sx={{ mt: 1 }}
                        variant={isMedium ? "outlined" : "outlined"}
                        placeholder={translate(
                            "resources.e_faktury.list.input.placeholder.sales_item_qty"
                        )}
                    />
                    <CustomNumberTd
                        source="product_price"
                        isMedium={isMedium}
                        entryPriceIsGross={entryPriceIsGross}
                    />
                </TabFormIterator>
            </ArrayInput>
        </>
    );
};
