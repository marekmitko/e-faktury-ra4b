import * as React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import { useTranslate } from "react-admin";

const tdStyle = { width: "70%" };
const tdCostWidth = "65%";
const thBorderTopWidth = "2px";

export const TotalCostCell = ({ children, styleCell, ...props }) => (
  <td class="label-td-sum" style={styleCell}>
    <Typography {...props}>{children ? children : ""}</Typography>
  </td>
);

export const CostCell = ({ children, ...props }) => (
  <TotalCostCell
    noWrap
    fontWeight="500"
    level="body2"
    textColor="neutral.600"
    textAlign="right"
    styleCell={{ width: `${tdCostWidth}` }}
    {...props}
  >
    {children}
  </TotalCostCell>
);
export const CellLabel = ({ children, ...props }) => (
  <TotalCostCell
    noWrap
    fontWeight="lg"
    level="body2"
    textColor="neutral.600"
    textAlign="left"
    {...props}
  >
    {children}
  </TotalCostCell>
);
export const TotalCell = ({ children, ...props }) => (
  <th
    style={{ borderTopWidth: `${thBorderTopWidth}`, width: `${tdCostWidth}` }}
  >
    <Typography noWrap textColor="primary.900" textAlign="right" {...props}>
      {children ? children : ""}
    </Typography>
  </th>
);
export const TotalLabel = ({ children, ...props }) => (
  // <th  style={{ borderTopWidth: `${thBorderTopWidth}`,  }} >
  <Typography noWrap textAlign="right" {...props}>
    {children ? children : ""}
  </Typography>
  // </th>
);
