import * as React from 'react';
import { useForm, Controller } from "react-hook-form";
// import "./styles.css";










//   const methods = useForm();
// const [localAddress, setLocalAddress] = useState([]);

// const [localAddress, setLocalAddress] = useState([]);
// const addLocalAddress = function () {
//     let l = localAddress.length;
//     const d = [
//     ...localAddress,
//     {
//         street1: "street1",
//         street2: "street2",
//         city: "city"
//     }
//     ];
//     setLocalAddress(d);
// };

// const removeLocalAddress = function () {
//     let l = [...localAddress];
//     l.splice(-1, 1);
//     setLocalAddress(l);
// };

interface Data {
    name: string;
    type: string;
    vat: number;
    quantity: number;
    price: number;
    net_sum: number;
    gross_sum: number;
    item_id: string;
    item_idx: number;
  }


interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

// export const headCells = [
export const headCells: readonly HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Przedmiot sprzedaży"
    },
    {
      id: "type",
      numeric: true,
      disablePadding: false,
      label: "Type"
    },
    {
      id: "vat",
      numeric: true,
      disablePadding: false,
      label: "VAT (%)"
    },
    {
      id: "quantity",
      numeric: true,
      disablePadding: false,
      label: "Quantity"
    },
    {
      id: "price",
      numeric: true,
      disablePadding: false,
      label: "Price"
    },
    {
      id: "net_sum",
      numeric: true,
      disablePadding: false,
      label: "Net"
    },
    {
      id: "gross_sum",
      numeric: true,
      disablePadding: false,
      label: "Gross"
    } 
  ];



export const columns = [
    {
    Header: "street1",
    accessor: "street1"
    },
    {
    Header: "street2",
    accessor: "street2"
    },
    {
    Header: "city",
    accessor: "city"
    }
];
