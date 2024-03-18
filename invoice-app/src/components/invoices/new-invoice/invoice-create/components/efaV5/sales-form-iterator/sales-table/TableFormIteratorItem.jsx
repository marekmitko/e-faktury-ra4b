import * as React from "react";
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
} from "react";
import JoyTypography from "@mui/joy/Typography";
// import clsx from 'clsx';
import { useFormContext, useWatch } from "react-hook-form";
import clsx from "clsx";
import {
  useSimpleFormIteratorItem,
  useSimpleFormIterator,
  SimpleFormIteratorItemContext, // *edu https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/input/ArrayInput/SimpleFormIteratorItemContext.ts
  useTranslate,
} from "react-admin";
import {
  Box,
  Stack,
  Card,
  Link,
  CardCover,
  CardContent,
  Grid,
  styled,
  cardClasses,
} from "@mui/joy";
// import { Typography, useMediaQuery } from '@mui/material';
import { formatCurrency } from "../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ";
import { MQ_isMedium } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import { useMediaQuery } from "@mui/material";
import {
  BruttoItemSumOutput,
  EffectNetItemSumOutput,
  GrossItemSumOutput,
  NetItemSumOutput,
  SumItemOutputShow,
} from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/item-outputs/SumItemOutputShow";
import { EffectPriceOutputField } from "./table-data-cell/PriceOutputField";

const RowItemClassesPrefix = "ItemTableRow";

const getGrossSum = (priceNetto, qty, tax) => {
  let priceSum = 0;
  if (priceNetto && qty && tax) priceSum = (priceNetto * qty * tax) / 100;

  return formatCurrency(priceSum);
};
const getNetSum = (priceNetto, qty) => {
  let priceSum = 0;
  if (priceNetto && qty) priceSum = priceNetto * qty;

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
    source,
    setValue,
    entryPriceIsGross,
    // isMedium,
  } = props;

  const isMedium = useMediaQuery(`${MQ_isMedium}`);
  // * A hook that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
  // * Useful to create custom array input iterators.
  const { total, reOrder, remove } = useSimpleFormIterator();

  const disableRemoveField = (record) => {
    if (typeof disableRemove === "boolean") {
      return disableRemove;
    }
    return disableRemove && disableRemove(record);
  };

  // remove field and call the onClick event of the button passed as removeButton prop
  const handleRemoveButtonClick =
    (
      originalOnClickHandler, //MouseEventHandler,
      index // number
    ) =>
    (event) => {
      // MouseEvent
      remove(index);
      if (originalOnClickHandler) {
        originalOnClickHandler(event);
      }
    };

  const methodsItem = useFormContext();
  const { getValues, control } = methodsItem;
  //   console.log("sources❌", source);
  //   console.log("___METHODSTITEM❌", methodsItem);
  //   console.log("➕fromContextMy", getValues(`${source}.${index}`));

  //   const outputName = `${source}.${index}.product_price_netto`;
  //   const input_value = getValues(`${source}.${index}`);
  //   console.log(outputName, "output-test");
  //   console.log("input💠", input_value);

  //   console.log("watchTest", memberTest);

  //   const input_value = getValues(`${source}.${index}`);
  //   const {
  //     product_count,
  //     product_price_brutto,
  //     product_price_netto,
  //     product_vat,
  //   } = watchTest;
  //   console.log("input_Value", [
  //     product_count,
  //     product_price_brutto,
  //     product_price_netto,
  //     product_vat,
  //   ]);

  const context = useMemo(
    // SimpleFormIteratorItemContextValue
    () => ({
      index,
      total,
      reOrder: (newIndex) => reOrder(index, newIndex),
      remove: () => remove(index),
    }),
    [index, total, reOrder, remove]
  );

  const label =
    typeof getItemLabel === "function" ? getItemLabel(index) : getItemLabel;

  return (
    <SimpleFormIteratorItemContext.Provider value={context}>
      {/* <td data-th={field.description}>{item[field.id]}</td> */}
      {/* //Om!!<td  ref={ref}   > */}

      {Children.map(children, (input, index2) => {
        // input: ReactElement,

        if (!isValidElement(input)) {
          return null;
        }
        const { source, myIdx, ...inputProps } = input.props;
        return cloneElement(input, {
          source: source ? `${member}.${source}` : member,
          // index: source ? undefined : index2,
          index: source ? index : index2,
          resource,
          disabled,
          ...inputProps,
        });
      })}

      {/* {!disableRemoveField(record) &&
        cloneElement(removeButton, {
          onClick: handleRemoveButtonClick(removeButton.props.onClick, index),
          className: clsx("button-remove", `button-remove-${source}-${index}`),
        })} */}

      {/* <td data-th={"field.description"}>{"item[field.id]"}</td> */}

      <EffectPriceOutputField
        index={index}
        source={source}
        control={control}
        entryPriceIsGross={entryPriceIsGross}
      />

      <td class="td-remove" style={{ display: isMedium ? "none" : "" }}>
        <div class="remove-button-container">{removeButton}</div>
      </td>
    </SimpleFormIteratorItemContext.Provider>
  );
});

// const RootRowLine = styled('div', {
//     name: RowItemClassesPrefix,
// overridesResolver: (props, styles) => styles.root,
// })(({ theme }) => ({
//     width: '100%',
//     margin: 0,
//     pading: 0,
// }
// ));
