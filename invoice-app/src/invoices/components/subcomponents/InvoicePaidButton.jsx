import * as React from 'react';
import { Avatar, SxProps } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

// interface Props extends FieldProps<Customer> {
//     sx?: SxProps;
//     size?: string;
// }

const InvoicePaidButton = ({ size = '25', sx } ) => {
    const record = useRecordContext();
    if (!record) return null
    return (
        <div  label="$" >
            <CurrencyExchangeIcon />
            <td class="buttons">
          <ul>
            <li><a href="#"><i className="fa fa-pencil-square-o"></i><span>update</span></a>
            </li>
            <li><a href="#"><i className="fa fa-times"></i><span>delete</span></a>
            </li>
          </ul>
        </td>
        </div>
    );
};

export default InvoicePaidButton;