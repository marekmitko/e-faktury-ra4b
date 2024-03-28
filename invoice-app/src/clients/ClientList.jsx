import "../../src/style/styleClientList.css";
import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    ReferenceInput,
    AutocompleteInput,
    TextInput,
    InfiniteList,
    SearchInput,
    useTranslate,
    DateInput,
} from "react-admin";
import { Stack, Chip, useMediaQuery } from "@mui/material";

// reCSS ClientListIcon
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { EfaDeleteActionButton } from "../reusable-components/button/confirm-action/EfaDeleteActionButton";
import EfaEditButton from "../reusable-components/button/EfaEditButton";
import ListBulkActionButtons from "../reusable-components/button/bulk-action/ListBulkActionButtonBox";
import ClientMobileGrid from "./ClientMobileGrid";
import { MQ_Breakpoint } from "../constant";
export const IconToClientList = SupervisorAccountIcon;

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

const UserListFilter = [
    <TextInput source="company" defaultValue="Hello, World!" alwaysOn />,
    <ReferenceInput
        alwaysOn
        source="company"
        reference="dbclientlist"
        filter={{ company: true }}
        // enableGetChoices={({ q }) => q.length >= 2}
    >
        <AutocompleteInput filterToQuery={(search) => ({ company: search })} />
    </ReferenceInput>,
];

// const UserListFilter = [
//     <TextInput
//         label="Company" source="company"
//         // defaultValue="Hello, World!"
//         alwaysOn
//     />,
//     <ReferenceInput  alwaysOn
//         source="company"
//         reference='dbclientlist'
//         filter={{ company: true }}
//         // enableGetChoices={({ q }) => q.length >= 2}

//     >
//         <AutocompleteInput filterToQuery={search => ({ company: search })} />
//     </ReferenceInput>
// ]

const buyerFilters = [<SearchInput source="q" alwaysOn />];

const clientFilters = [
    <SearchInput source="q" alwaysOn sx={{ ml: { xs: 1 }, mr: { xs: -1 } }} />,
    // <TextInput source="last_company" />,
    // <NullableBooleanInput source="has_ordered" />,
    // <NullableBooleanInput source="has_newsletter" defaultValue />,
    // <SegmentInput source="groups" />,
];

const ClientList = () => {
    const isSmall = useMediaQuery(`${MQ_Breakpoint.isSmall}`);
    return (
        <InfiniteList
            // filters={isSmall ? clientFilters : undefined}
            filters={clientFilters}
            // filters={buyerFilters}
            sort={{ field: "last_company", order: "DESC" }}
            // <List
            // filters={UserListFilter}
            // {...props}
            sx={{
                "& .RaList-main": {
                    borderRadius: "15px",
                    pt: 0,
                    mt: 0,
                    maxWidth: "900px",
                },
                "& .MuiPaper-root": {
                    borderTopLeftRadius: isSmall ? "" : "20px",
                    borderTopRightRadius: isSmall ? "" : "20px",
                },
                "& .RaDatagrid-table": {
                    flexWrap: "nowrap!important",
                },
            }}
        >
            {isSmall ? (
                <ClientMobileGrid />
            ) : (
                <Datagrid
                    className="client-list-table"
                    bulkActionButtons={<ListBulkActionButtons />}
                    sx={{
                        "& .MuiTableHead-root .RaDatagrid-headerCell": {
                            padding: { sx: "4px", md: "4px" },
                            backgroundColor:
                                "var(--mui-palette-background-level1, #fafafa)",
                            borderColor: "neutral.300",
                            "&:first-child": {
                                pl: 1.25,
                                pr: 0.75,
                                borderTopLeftRadius: "20px",
                                // borderTopRightRadius: '200px',
                            },
                            "&:last-child": {
                                pl: 2,
                                borderTopRightRadius: "20px",
                                // borderTopRightRadius: '200px',
                            },
                        },
                        "& .RaDatagrid-root .RaDatagrid-tbody.MuiTableBody-root ":
                            {
                                // backgroundColor: 'blue',
                                flexWrap: "nowrap",
                            },
                        "& .RaDatagrid-rowCell": {
                            padding: { sx: "5px", md: "5px" },
                        },
                        "& td.RaDatagrid-rowCell span": {
                            alignVertical: "bottom",
                            paddingTop: "4px",
                        },
                        "& .MuiTableCell-paddingCheckbox": {
                            pl: 1.25,
                            pr: 0.75,
                        },
                        "& .column-company": {
                            maxWidth: {
                                sx: "50px",
                                sm: "70px",
                                md: "80px",
                                lg: "100px",
                                xl: "100px",
                            },
                            // maxWidth: "75px",
                            // whiteSpace: "nowrap",
                            // overflow: "hidden",
                            // textOverflow: "ellipsis",

                            "& .MuiTypography-root": {
                                overflow: "hidden",
                                display: "inline-block",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            },
                        },
                        "& .column-org_nr": {
                            maxWidth: "90px",
                            minWidth: "70px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",

                            "& .MuiTypography-root": {
                                overflow: "hidden",
                                display: "inline-block",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            },
                        },
                        "& .column-email": {
                            display: {
                                xs: "none",
                                md: "none",
                                lg: "table-cell",
                            },
                        },
                        "& .column-phone": {
                            display: {
                                xs: "none",
                                md: "table-cell",
                                lg: "table-cell",
                            },
                        },
                        "& .column-action ": {
                            width: "50px",
                            padding: 0,
                            paddingLeft: "8px",
                        },
                    }}
                >
                    <TextField
                        source="company"
                        sx={{
                            display: "inline-block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            wrap: "nowrap",
                            maxWidth: "inherit",
                            color: "primary.900",
                            fontWeight: "500",
                        }}
                    />
                    <TextField source="org_nr" label="Nr. org." />
                    <TextField source="phone" />
                    <EmailField source="email" />
                    <tr
                        source="action"
                        label=""
                        style={{ textAlign: "center" }}
                    >
                        <td>
                            <EfaEditButton />
                        </td>
                        <td>
                            <EfaDeleteActionButton />
                        </td>
                    </tr>
                </Datagrid>
            )}
            {/* </List> */}
        </InfiniteList>
    );
};

export default ClientList;
