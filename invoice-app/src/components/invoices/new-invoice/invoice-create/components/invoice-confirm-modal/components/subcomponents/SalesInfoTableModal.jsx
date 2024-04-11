import * as React from "react";
// import "./styleSalesInfoTableModal.css";
import Table from "@mui/joy/Table";
// import Divider from "@mui/material/Divider";
import { useTranslate } from "react-admin";
import { formatCurrency } from "../../../../efa-invoice-form/components/new-sales-table/components/total-cost-result-table/logic/getCostResult ";

// function createData(
// name: string,
// calories: number,
// fat: number,
// carbs: number,
// protein: number
// ) {
// return { name, calories, fat, carbs, protein };
// }

export const SalesInfoTableModal = ({ rows }) => {
    const translate = useTranslate();

    return Object.entries(rows).length ? (
        <div className="info-table-container">
            <Table
                className="sales-info-table-modal"
                sx={{
                    "& thead th:nth-child(1)": {
                        width: "auto",
                        // minWidth: "150px",
                        // maxWidth: "auto",
                    },
                    "& thead th:nth-child(2)": { width: "50px" },
                    "--Table-headerUnderlineThickness": "2px",
                    "--TableCell-paddingY": "3px",
                    "--TableCell-height": "27px",
                }}
            >
                <thead className="table-head">
                    <tr className="head-row">
                        <th className="header-cell sales-item">
                            {translate(
                                "resources.e_faktury.create.modal.table_info.header.sales_item"
                            )}
                        </th>
                        <th className="header-cell sales-quantity">
                            {translate(
                                "resources.e_faktury.create.modal.table_info.header.sales_quantity"
                            )}
                        </th>
                        <th
                            className="header-cell sales-value"
                            style={{
                                // width: "7%"
                                paddingRight: "25px",
                                textAlign: "right",
                            }}
                        >
                            {translate(
                                "resources.e_faktury.create.modal.table_info.header.sales_value"
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {rows.map((row, idx) => {
                        // if(rows.length  === (idx+1 )) return (null);
                        return (
                            <tr
                                className="body-row"
                                key={`_${idx}_${row.product_name}`}
                            >
                                <td className="body-cell item-name">
                                    {row.product_name}
                                </td>
                                <td className="body-cell item-quantity">
                                    {row.product_count}
                                    {/* {translate(
                                              "resources.e_faktury.create.modal.table_info.quantity_unit_name"
                                      )} */}
                                </td>
                                <td className="body-cell item-value">
                                    {formatCurrency(
                                        row.product_count *
                                            row.product_price_brutto
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    ) : (
        ""
    );
};
