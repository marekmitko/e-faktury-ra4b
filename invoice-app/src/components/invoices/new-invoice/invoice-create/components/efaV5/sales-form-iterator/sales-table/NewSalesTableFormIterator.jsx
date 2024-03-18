import * as React from "react";
import { useRef, useState } from "react";
import { TablePagination, TableCell, useMediaQuery, Grid } from "@mui/material";

import { Box, Card, Divider, Typography } from "@mui/joy";
import { jsx, css } from "@emotion/react";
import {
  ArrayInput,
  Create,
  NumberInput,
  Form,
  Title,
  useTranslate,
  TextInput,
} from "react-admin";

import {
  MQ_isMinimal,
  MQ_isSmall,
  MQ_isMedium,
  MQ_isXSmall,
  MQ_isLarge,
} from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";

import { CustomInputNumber } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/custom/CustomInputNumber";
import { TabFormIterator } from "./TabFormIterator";
import { InputTextSelected } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelected";
import {
  productOptions,
  taxOptions,
  typeOptions,
} from "../../../../invoice-form/subcomponents/sales-table/spanning-sales-table/item-sales-row/options_select_input";
import SelectInputItem from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItem";
import { ItemIndexChip } from "../../../../efa-invoice-form/components/index-item-row/ItemIndexChip";
import MobiRemoveItemButton from "../sales-item/mobile-view/components/sales-item-row/subcomponent/MobiRemoveItemButton";
import { InputTextSelectedTd } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-name-item/InputTextSelectedTd";
import SelectInputItemTd from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-inputs/select-item/SelectInputItemTd";
import { useFormContext } from "react-hook-form";

const InputNumberTd = (props) => (
  <td>
    <NumberInput {...props} />
  </td>
);

const CustomNumberTd = (props) => {
  const { source, isMedium, entryPriceIsGross, defaultValue } = props;

  return (
    <td>
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
const required = () => (value) =>
  value ? undefined : "myroot.validation.required";
// https://blog.logrocket.com/guide-mui-grid-system/

const OptionRecord = { choice_product_list: productOptions };

const sxTotalCard = {
  // flexDirection: { xs: 'row', md: 'column' },
  // minWidth: 'auto',
  gap: 1, //maxHeight : 'min-content'
};

// export const globalArea = `" name name name type type count tax price price "`;
export const globalArea = `"name type count tax price "`;

const vumberInputValidation = [required()];

// const OptionRecord = {  choice_product_list: productOptions  };

const Separator = () => <Box pt="1em" />;

export const SalesTableFormIterator = (props) => {
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
  const is650px = useMediaQuery("(max-width:650px)");

  const [entryPriceIsGross, setEntryPriceOnGross] = useState(false);

  const translate = useTranslate();

  const methodsInnerSalesProps = useFormContext(props);
  const methodsInnerSalesNone = useFormContext();

  console.log("metISP✅", methodsInnerSalesProps);
  console.log("metISP❌", methodsInnerSalesNone);

  return (
    <>
      <ArrayInput
        className="array"
        label={false}
        // source={nameSalesIteratorForm}
        source="products"
        fullWidth
      >
        <TabFormIterator
          //   getItemLabel={(index) => <ItemIndexChip index={++index} />}
          removeButton={<MobiRemoveItemButton />}
          entryPriceIsGross={entryPriceIsGross}
          setEntryPriceOnGross={setEntryPriceOnGross}
        >
          <InputTextSelectedTd
            // label="myroot.form.label.inputbox_itemrow.itemNameField"
            label=""
            source="product_name"
            choiceOptions={OptionRecord.choice_product_list}
            sx={{ gridArea: "name" }}
            placeholder="myroot.form.label.inputbox_itemrow.itemNameField"
          />
          <SelectInputItemTd
            source="product_type"
            label="myroot.form.label.inputbox_itemrow.typeItem"
            sx={{ gridArea: "type", "& svg": { mr: -0.5 } }}
            defaultValue="placeholder"
            options={typeOptions}
            variant={isMedium ? "outlined" : "outlined"}
          />
          <SelectInputItemTd
            source="product_vat"
            label="myroot.form.label.inputbox_itemrow.taxItem"
            sx={{ gridArea: "tax", "& svg": { mr: -0.5 } }}
            defaultValue="placeholder"
            options={taxOptions}
            variant={isMedium ? "outlined" : "outlined"}
          />
          <InputNumberTd
            defaultValue="3"
            source="product_count"
            label="myroot.form.label.inputbox_itemrow.qtyItem"
            helperText={false}
            sx={{
              mt: 1,
              //   mt: 0.5,
              //gridArea: 'count', '& input': { mr: -1 }, mt: 1,
              // '& .MuiInputLabel-root': {
              //     textTransform: 'uppercase',
              //     letterSpacing: '-0.5px',
              //     marginRight: '-50px',
              //     backgroundColor: 'inherit',
              //     pr: -1
              //     // transform: 'scale(0.95)'
              // }
            }}
            variant={isMedium ? "outlined" : "outlined"}
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
