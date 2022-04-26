import React from "react";
import { FilterForm, TextInput } from "react-admin";

// </> FilterFormInvoiceList


https://marmelab.com/react-admin/FilteringTutorial.html#the-filter-buttonform-combo


// mega ładne ! https://mui.com/x/react-data-grid/filtering/

const filters = [<TextInput label="Search" source="q" size="small" alwaysOn />];


const FilterFormInvoiceList = () => {

    return(
        <div>
            <FilterForm filters={filters} />
        </div>
    );
};
