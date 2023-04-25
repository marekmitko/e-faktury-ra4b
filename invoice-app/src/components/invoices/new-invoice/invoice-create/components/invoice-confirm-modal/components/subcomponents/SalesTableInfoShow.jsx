    import * as React from "react";
    import Table from "@mui/joy/Table";
    import Divider from "@mui/material/Divider";

    // function createData(
    // name: string,
    // calories: number,
    // fat: number,
    // carbs: number,
    // protein: number
    // ) {
    // return { name, calories, fat, carbs, protein };
    // }

   

    export  const  SalesTableInfoShow = ({rows}) => {

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
            <th>Produkt sprzedaży</th>
            <th
                style={{
                // width: "7%"
                paddingRight: "25px",
                textAlign: "right"
                }}
            >
                Ilość
            </th>
            <th
                style={{
                // width: "7%"
                paddingRight: "25px",
                textAlign: "right"
                }}
            >
                Suma
            </th>
            </tr>
        </thead>
        <tbody>
            {true? rows.map(( row, idx ) => {
                // if(rows.length  === (idx+1 )) return (null);
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
                {row.product_count}
                </td>
                <td
                style={{
                    // width: "7%"
                    paddingRight: "25px",
                    textAlign: "right"
                }}
                >
                {(row.product_count * row.product_price_brutto).toFixed(2) }
                </td>
            </tr>
            ); }) : "" }
        </tbody>
        </Table>
    );
};
