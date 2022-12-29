    import React from "react";
import JoyTableContainer from "./JoyTableContainer";
    // import { useTable } from "react-table";
    // import { Input } from "reactstrap";
import {TableHead, TableBody, TableRow, TableCell, TextField} from "@mui/material";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { FieldTitle } from "react-admin";
import EnhancedRow from "./EnhancedRow";
import Sheet from "@mui/joy/Sheet";





export const JoySalesTable = React.forwardRef(({ columns, data, methods }, ref) => {

    // Use the state and functions returned from useTable to build your UI
    const usefxTable = {columns: columns, data: data};

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = {...usefxTable};

        




    
console.log("usefxTable", usefxTable);
    // Render the UI for your table
    return (


        <JoyTableContainer >
            {/* <Sheet
                variant="outlined"
                sx={{
                    p: 0,
                    // bgcolor: "background.body",
                    // borderRadius: "sm",
                    border: 0,
                    // width: 460,
                    maxWidth: "100%"
        }} 
        > */}
                <EnhancedTableHead />
            <TableBody>
            {usefxTable.data
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                // .filter((item) => item.subtotal > 0)
                // .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((item) => {
                return (
                    <>
                    <EnhancedRow item={item} />
                </>
                );
                })}

                {/* {usefxTable.data.map((row, i) => {
                        // prepareRow(row);
                        return (
                            <tr 
                            // {...row.getRowProps()}
                            >
                            {usefxTable.data.row.cells.map((cell, j) => {
                            {usefxTable.data.map((cell, j) => {
                                return (
                                <td 
                                // {...cell.getCellProps()}
                                >
                                    <TextField
                                    type="text"
                                    name={`localAddress[${i}][${columns[j]["accessor"]}]`}
                                    placeholder={columns[j]["accessor"]}
                                    innerRef={methods.register}
                                    />
                                </td>
                                );
                            })}
                            <TextField />
                            </tr>
                        );
                        })} */}
            <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                <strong>Total Amount in EUR</strong>
                </TableCell>
                <TableCell align="right">
                {/* {usefxTable.data
                    .map((item) => item.subtotal * 0.84)
                    .reduce((acc, value) => acc + value)
                    .toFixed(2)}{" "} */}
                </TableCell>
            </TableRow>


            </TableBody>
            {/* </Sheet> */}

        <table
        //  {...getTableProps()}
        >
        <thead>
            {/* {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
            </tr>
        ))} */}
            <tr>
                <th>Test Joy</th>
                <th><input type="button" onClick={ () => console.log("usefxTable", usefxTable) } />LOG</th>
                <th>{usefxTable.columns['1']['Header']}</th>
            </tr>
        </thead>
        <tbody 
        // {...getTableBodyProps()}
        >
            {/* {rows.map((row, i) => {
            prepareRow(row); */}
            {/* return (
                <tr {...row.getRowProps()}>
                {row.cells.map((cell, j) => {
                    return (
                    <td {...cell.getCellProps()}>
                    <Input
                        type="text"
                        name={`localAddress[${i}][${columns[j]["accessor"]}]`}
                        placeholder={columns[j]["accessor"]}
                        innerRef={methods.register}
                        />
                        </td>
                        );
                    })}
                </tr>
            );
            })} */}
        </tbody>
        </table>







        </JoyTableContainer>





        
    );

    });





/** 

    // export default function Table({ columns, data, ...rest }) {
    // // Use the state and functions returned from useTable to build your UI
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow
    // } = useTable({
    //     columns,
    //     data
    // });

    // // Render the UI for your table
    // return (
    //     <table {...getTableProps()}>
    //     <thead>
    //         {headerGroups.map(headerGroup => (
    //         <tr {...headerGroup.getHeaderGroupProps()}>
    //             {headerGroup.headers.map(column => (
    //             <th {...column.getHeaderProps()}>{column.render("Header")}</th>
    //             ))}
    //         </tr>
    //         ))}
    //     </thead>
    //     <tbody {...getTableBodyProps()}>
    //         {rows.map((row, i) => {
    //         prepareRow(row);
    //         return (
    //             <tr {...row.getRowProps()}>
    //             {row.cells.map(cell => {
    //                 return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
    //             })}
    //             </tr>
    //         );
    //         })}
    //     </tbody>
    //     </table>
    // );
    // };
*/