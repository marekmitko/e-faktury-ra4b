import * as React from "react";
import { useMemo, useEffect } from "react";
import { Box, Typography } from "@mui/joy";
import { textAlign } from "@mui/system";
import { useTranslate } from "react-admin";
// import { formatCurrency } from "../../../total-cost-result-table/logic/getCostResult ";
import { useFormContext, useWatch } from "react-hook-form";
import { formatCurrency } from "../../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ";
import {
  TotalCostCell,
  CostCell,
} from "../../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/subcomponent/TotalCostCell";

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

export const ElementSumShow = (props) => {
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
    source,
  } = props;
  const translate = useTranslate();

  return (
    <Box noWrap sx={{ ...styleInit, ...cssBox }}>
      {label ? (
        <TotalCostCell
          fontWeight={fontWeightLabel}
          level={levelLabel}
          textColor={textColorLabel}
          textAlign={textAlignLabel}
          sx={cssLabel}
        >
          {label ? translate(label) : ""}
        </TotalCostCell>
      ) : null}
      <Typography
        noWrap
        textAlign={textAlign}
        // lineHeight="1"
        // sx={{ pl: 1, verticalAlign: "baseline", height: "100%", magin: 0 }}
        // {...props}
      >
        {children ? children : ""}
      </Typography>
    </Box>
  );
};

export const EffectPriceOutputField = ({
  source,
  index,
  control,
  entryPriceIsGross,
}) => {
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
    if (!entryPriceIsGross && !isNaN(product_vat) && !isNaN(+enteryValue))
      //setGrossPriceItem
      return !isNaN(+enteryValue)
        ? (parseFloat(+enteryValue) * product_vat) / 100
        : null;
    if (entryPriceIsGross && !isNaN(product_vat) && !isNaN(+enteryValue))
      //setNetPriceItem
      return !isNaN(+enteryValue)
        ? (parseFloat(+enteryValue) / product_vat) * 100
        : null;
  }, [enteryValue, product_vat, entryPriceIsGross]);

  const nameNetValeu = member + ".product_price_netto";
  const nameGrossValeu = member + ".product_price_brutto";
  useEffect(() => {
    if (
      !isNaN(!parseFloat(newDependentValue)) &&
      entryPriceIsGross &&
      product_vat !== null
    ) {
      setValue(
        nameNetValeu,
        `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : null}`
      );
      // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
    }
    if (
      !isNaN(!parseFloat(newDependentValue)) &&
      !entryPriceIsGross &&
      product_vat !== null
    ) {
      setValue(
        nameGrossValeu,
        `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : null}`
      );
      // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );
    }
    // }, [ grossPriceInput, taxValueInput]);
  }, [enteryValue, product_vat, entryPriceIsGross]);

  return (
    <React.Fragment>
      <td class="td-sum td-sum-net">
        <ElementSumShow
          label="myroot.form.label.header_salesTable.sumNetOutput"
          noWrap
        >
          {formatCurrency(product_price_netto * product_count)}
        </ElementSumShow>
      </td>
      <td class="td-sum td-sum-gross">
        <ElementSumShow
          label="myroot.form.label.header_salesTable.sumGrossOutput"
          noWrap
        >
          {formatCurrency(product_price_brutto * product_count)}
        </ElementSumShow>
      </td>
    </React.Fragment>
  );
};
