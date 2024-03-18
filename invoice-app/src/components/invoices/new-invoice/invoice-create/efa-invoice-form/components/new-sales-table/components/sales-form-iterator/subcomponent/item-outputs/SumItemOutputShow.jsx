import { Box, Typography } from "@mui/joy";
import { textAlign } from "@mui/system";
import * as React from "react";
import { useMemo, useEffect } from "react";
import { useTranslate } from "react-admin";
import { formatCurrency } from "../../../total-cost-result-table/logic/getCostResult ";
import {
  CostCell,
  TotalCostCell,
} from "../../../total-cost-result-table/subcomponent/TotalCostCell";
import { useFormContext, useWatch } from "react-hook-form";

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

const styleInit = {
  color: "neutral.500",
};

export const SumItemOutputShow = (props) => {
  const {
    label,
    levelLabel = "body2",
    cssLabel,
    fontWeightLabel = "400",
    textColorLabel,
    textAlignLabel = "left",
    children,
    textAlign = "right",
    cssBox,
    index,
    source,
  } = props;
  const translate = useTranslate();
  const { getValues, control } = useFormContext();
  const input_value_results = useWatch({ control, name: `${source}.${index}` });
  const GROSS_input_value_results = useWatch({
    control,
    name: `${source}.${index}.product_price_brutto`,
  });
  const input_value = getValues(`${source}.${index}`);
  console.log("input💠,💠💠💠", input_value_results);
  console.log("gross💠💠💠", GROSS_input_value_results);
  //   const {
  //     product_count,
  //     product_price_brutto,
  //     product_price_netto,
  //     product_vat,
  //   } = input_value;

  return (
    <Box noWrap sx={{ ...styleInit, ...cssBox }}>
      <TotalCostCell
        fontWeight={fontWeightLabel}
        level={levelLabel}
        textColor={textColorLabel}
        textAlign={textAlignLabel}
        sx={cssLabel}
      >
        {label ? translate(label) : ""}
      </TotalCostCell>
      <Typography
        noWrap
        textAlign={textAlign}
        lineHeight="1"
        sx={{ pl: 1 }}
        {...props}
      >
        {children ? children : ""}
        {/* {"My"}
        {getGrossSum(
          input_value.product_price_netto ? input_value.product_price_netto : 0,
          input_value.product_count ? input_value.product_count : 1,
          input_value.product_vat ? "" : ""
        )} */}
      </Typography>
    </Box>
  );
};

export const GrossItemSumOutput = ({ source, index, control }) => {
  const memberTest = useWatch({
    control,
    name: `${source}.${index}`,
  });
  const sumBrutto = getGrossSum(
    memberTest.product_price_netto,
    memberTest.product_count,
    memberTest.product_vat
  );

  return (
    <SumItemOutputShow
      source={source}
      index={index}
      label="myroot.form.label.header_salesTable.sumGrossOutput"
      noWrap
      cssBox={{ flex: 1 }}
    >
      {sumBrutto}
    </SumItemOutputShow>
  );
};
export const NetItemSumOutput = ({ source, index, control }) => {
  const memberTest = useWatch({
    control,
    name: `${source}.${index}`,
  });
  const sumNetto = getNetSum(
    memberTest.product_price_netto,
    memberTest.product_count
  );

  return (
    <SumItemOutputShow
      source={source}
      index={index}
      label="myroot.form.label.header_salesTable.sumGrossOutput"
      noWrap
      cssBox={{ flex: 1 }}
    >
      {sumNetto}
    </SumItemOutputShow>
  );
};

export const EffectNetItemSumOutput = ({
  source,
  index,
  control,
  entryPriceIsGross,
}) => {
  //   const memberTest = useWatch({
  //     control,
  //     name: `${source}.${index}`,
  //   });
  //   const sumNetto = getNetSum(
  //     memberTest.product_price_netto,
  //     memberTest.product_count
  //   );

  const member = `${source}.${index}`;
  const { setValue } = useFormContext();
  const {
    product_count,
    product_vat,
    product_price_netto,
    product_price_brutto,
  } = useWatch({ control, name: member });

  const enteryValue = entryPriceIsGross
    ? product_price_brutto
    : product_price_netto;
  const newDependentValue = useMemo(() => {
    // if (!enteryValue) return "";
    if (!entryPriceIsGross)
      //setGrossPriceItem
      return (
        (!isNaN(enteryValue) ? parseFloat(enteryValue) * product_vat : "0.00") /
        100
      );
    if (entryPriceIsGross)
      //setNetPriceItem
      return (parseFloat(+enteryValue) / product_vat) * 100;
  }, [enteryValue, product_vat, entryPriceIsGross]);

  const nameNetValeu = member + ".product_price_netto";
  const nameGrossValeu = member + ".product_price_brutto";
  useEffect(() => {
    if (!isNaN(!parseFloat(newDependentValue)) && entryPriceIsGross) {
      setValue(
        nameNetValeu,
        `${
          newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"
        }`
      );
      // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
    }
    if (
      !isNaN(!parseFloat(newDependentValue)) &&
      !entryPriceIsGross &&
      product_vat
    ) {
      setValue(
        nameGrossValeu,
        `${
          newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"
        }`
      );
      // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );
    }
    // }, [ grossPriceInput, taxValueInput]);
  }, [enteryValue, product_vat, entryPriceIsGross]);

  return (
    <SumItemOutputShow
      //   source={source}
      //   index={index}
      label="myroot.form.label.header_salesTable.sumNetOutput"
      noWrap
      cssBox={{ flex: 1 }}
    >
      {product_price_netto}
    </SumItemOutputShow>
  );
};
