import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { headCells } from "./accessoryJoySalesTable";
// import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';


            // sx={{
            //     fontWeight: "bold",
            //     backgroundColor: 'theme.palette.primary.dark',
            //     color: 'theme.palette.getContrastText(theme.palette.primary.dark)'
            // }}

// STYLE 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontWeight: '450',
      }
    }));


























interface Data {
    name: string;
    type: number;
    vat: number;
    quantity: number;
    price: number;
    gross_sum: number;
    net_sum: number;
    item_id: string;
    item_idx: number;
  }


function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
        return order;
    }
    return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}



type Order = "asc" | "desc";

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
  }

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof Data
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

export function EnhancedTableHead(props: EnhancedTableProps) {
    const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
    } = props;
    const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
    ) => {
    onRequestSort(event, property);
    };


// // <TableHead>
// <TableRow>
// <TableCell>{Object.keys(usefxTable.data[0])[4]}</TableCell>
// <TableCell align="right">
//   {Object.keys(usefxTable.data[0])[0]}
// </TableCell>

// </TableRow>
// </TableHead>



    return (
    <TableHead sx={{ width: '100%', px: 0, mx: 0  }} >
        <TableRow sx={{ width: '100%', px: 0, mx: 0  }} >
        <StyledTableCell padding="checkbox"   
            // sx={{ borderRadius: '25px 0% 0% 0%' }} 
        >
            <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
                "aria-label": "select all desserts"
            }}
            />
        </StyledTableCell>
        {headCells.map((headCell) => (
            <StyledTableCell 
            // sx={{
            //     fontWeight: "bold",
            //     backgroundColor: 'theme.palette.primary.dark',
            //     color: 'theme.palette.getContrastText(theme.palette.primary.dark)'
            // }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            >
            <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
            >
                {headCell.label}
                {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
                ) : null}
            </TableSortLabel>
            </StyledTableCell>
        ))}
        </TableRow>
    </TableHead>
    );
}
