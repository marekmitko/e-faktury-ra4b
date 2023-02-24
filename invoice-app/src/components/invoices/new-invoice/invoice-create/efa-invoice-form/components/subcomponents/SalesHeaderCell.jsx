import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TableCell, TableSortLabel, Tooltip } from '@mui/material';
import { 
    FieldTitle,
    useTranslate
} from 'react-admin';

export const SalesHeaderCell = ( { field, resource } ) => {

    return (
        <StyledTableCell
            align={field.props.textAlign}
            variant="head"
        >
                <FieldTitle
                    label={field.props.label}
                    source={field.props.source}
                    resource={resource}
                />
        </StyledTableCell>
    );
};

const PREFIX = 'MySalesHeaderCell';

export const DatagridHeaderCellClasses = {
    icon: `${PREFIX}-icon`,
};

// Remove the sort icons when not active
const StyledTableCell = styled(TableCell, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    [`& .MuiTableSortLabel-icon`]: {
        display: 'none',
    },
    [`& .Mui-active .MuiTableSortLabel-icon`]: {
        display: 'inline',
    },
}));