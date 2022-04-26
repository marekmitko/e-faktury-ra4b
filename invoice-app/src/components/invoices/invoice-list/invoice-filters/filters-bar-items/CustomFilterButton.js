import React from 'react';
import { useListContext } from 'react-admin';
import { Button } from '@mui/material';
import ContentFilter from '@mui/icons-material/FilterList';


export const CustomFilterButton = () => {
    const { showFilter } = useListContext();
    return (
        <Button
            size="small"
            color="primary"
            onClick={() => showFilter("main")}
            startIcon={<ContentFilter />}
        >
            Filter
        </Button>
    );
};