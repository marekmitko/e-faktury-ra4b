    import * as React from "react";
    import Table from "@mui/joy/Table";
    import Divider from "@mui/material/Divider";
import { useRecordContext, useResourceContext, useTranslate } from "react-admin";

    // function createData(
    // name: string,
    // calories: number,
    // fat: number,
    // carbs: number,
    // protein: number
    // ) {
    // return { name, calories, fat, carbs, protein };
    // }

   

const  SaleItemsTableShow = () => {
        const { products } = useRecordContext();
        const translate = useTranslate();
        const resource = useResourceContext();
        // const title = name ? `resources.${resource}.show.header.${name}` : "" ;
        // console.log("rows", rows);

        if (!products ) return null;
        return (
            <Table
            sx={{
                "& thead th:nth-child(1)": { width: "40%" },
                "--Table-headerUnderlineThickness": "3px",
                "--TableCell-paddingY": "3px",
                "--TableCell-height": "27px"
            }}
            >
            <thead>
                <tr>
                <th>{translate(`resources.${resource}.show.header.sales_table.item_name`)}</th>
                <th
                    style={{
                    // width: "7%"
                    paddingRight: "25px",
                    textAlign: "right"
                    }}
                >
                    {translate(`resources.${resource}.show.header.sales_table.quantity`)}
                </th>
                <th
                    style={{
                    // width: "7%"
                    paddingRight: "25px",
                    textAlign: "right"
                    }}
                >
                    {translate(`resources.${resource}.show.header.sales_table.tax_value`)}
                </th>
                <th
                    style={{
                        // width: "7%"
                        paddingRight: "25px",
                        textAlign: "right"
                    }}
                >
                    {translate(`resources.${resource}.show.header.sales_table.net_value`)}
                </th>
                <th
                    style={{
                        // width: "7%"
                        paddingRight: "25px",
                        textAlign: "right"
                    }}
                >
                    {translate(`resources.${resource}.show.header.sales_table.gross_value`)}
                </th>
                </tr>
            </thead>
            <tbody>
                {true? products.map(( row, idx ) => {
                    // if(products.length  === (idx+1 )) return (null);
                    return(
                <tr key={`_${idx}_${row.product_name}`}>
                    <td>{row.product_name}</td>
                    <td
                    style={{
                        // width: "7%"
                        paddingRight: "25px",
                        textAlign: "right"
                    }}
                    >
                    {/* //Om? Co z tym zrobić? Jak to zabezpieczyć?  */}
                    { (+row.count).toFixed(2) }
                    </td>
                    <td
                    style={{
                        // width: "7%"
                        paddingRight: "25px",
                        textAlign: "right"
                    }}
                    >
                        {/* //BUG //Om? Ujednolicić i poprawić  */}
                    {`${(row.product_vat >= 100) ? row.product_vat-100 : row.product_vat }%`}
                    </td>
                    <td
                    style={{
                        // width: "7%"
                        // paddingRight: "25px",
                        textAlign: "right"
                    }}
                    >
                        {/* //infO count | value_netto //Om? Ujednolicić i poprawić  */}
                    {(row.count * row.value_netto).toFixed(2) }
                    </td>
                    <td
                    style={{
                        // width: "7%"
                        textAlign: "right"
                    }}
                    >
                    {(row.count * row.value_brutto).toFixed(2) }
                    </td>
                </tr>
                ); }) : "" }
            </tbody>
            </Table>
        );
};


export default SaleItemsTableShow;