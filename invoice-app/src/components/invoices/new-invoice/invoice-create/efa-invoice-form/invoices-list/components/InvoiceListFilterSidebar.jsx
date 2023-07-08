import * as React from 'react';
import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';
import { LinkToRelatedBuyerCompany } from './filters-sidebar/invoiceListFilters';

export const InvoiceListFilterSidebar = () => (
    <Card sx={{ order: 0, ml: 2, mt: 8, width: 250 }}>
        <CardContent>
            <SavedQueriesList label="custom" />
            <FilterLiveSearch />
            {/* <LinkToRelatedBuyerCompany /> */}
            <FilterList label="MVA" //icon={<MailOutlineIcon />}
            >
                <FilterListItem label="Yes" value={{ buyer_mva: true }} />
                <FilterListItem label="No" value={{ buyer_mva: false }} />
            </FilterList>
            {/* <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="Tests" value={{ category: 'tests' }} />
                <FilterListItem label="News" value={{ category: 'news' }} />
                <FilterListItem label="Deals" value={{ category: 'deals' }} />
                <FilterListItem label="Tutorials" value={{ category: 'tutorials' }} />
            </FilterList> */}
        </CardContent>
    </Card>
);