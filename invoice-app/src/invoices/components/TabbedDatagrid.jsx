import * as React from "react";
import { Fragment, useCallback } from "react";
import {
    AutocompleteInput,
    BooleanField,
    Count,
    DatagridConfigurable,
    DateField,
    DateInput,
    ExportButton,
    FilterButton,
    List,
    NullableBooleanInput,
    NumberField,
    ReferenceField,
    ReferenceInput,
    SearchInput,
    SelectColumnsButton,
    TextField,
    TextInput,
    TopToolbar,
    useListContext,
    useTranslate,
} from "react-admin";
import { useMediaQuery, Divider, Tabs, Tab, Theme } from "@mui/material";
import MobileGrid from "./MobileGrid";
import CustomDataField from "./CustomDataField";
import ValuePaidField from "./ValuePaidField";
import OptionRow from "./OptionRow";
import InvoicePaidButton from "./subcomponents/InvoicePaidButton";
import TransitionGroupExample from "./subcomponents/TestPaidButton";
import HGroupExample from "./subcomponents/HTestPaidButton";
import { PurringItemButton } from "./button/PurrignItemButton";
import InvoiceShow from "../../components/invoices/new-invoice/invoice-create/efa-invoice-form/invoices-list/invoice-show/InvoiceShow";

const tabs = [
    { id: "ordered", name: "all" },
    { id: "delivered", name: "to_pay" },
    { id: "cancelled", name: "settled" },
];

const TabbedDatagrid = () => {
    const listContext = useListContext();
    const { filterValues, setFilters, displayedFilters } = listContext;
    const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const handleChange = useCallback(
        (event, value) => {
            setFilters &&
                setFilters(
                    { ...filterValues, status: value },
                    console.log(
                        "filterValues",
                        filterValues,
                        filterValues.status
                    ),
                    displayedFilters,
                    false // no debounce, we want the filter to fire immediately
                );
        },
        [displayedFilters, filterValues, setFilters]
    );
    const translate = useTranslate();
    return (
        <Fragment>
            <Tabs
                variant="fullWidth"
                centered
                value={filterValues.status}
                indicatorColor="primary"
                onChange={handleChange}
            >
                {tabs.map((choice) => {
                    const { name } = choice;
                    return (
                        <Tab
                            key={choice.id}
                            label={
                                <span>
                                    {translate(
                                        `resources.e_faktury.list.tab.header.${name}`
                                    )}
                                    (
                                    <Count
                                        filter={{
                                            ...filterValues,
                                            status: choice.name,
                                        }}
                                        sx={{ lineHeight: "inherit" }}
                                    />
                                    )
                                </span>
                            }
                            value={choice.id}
                        />
                    );
                })}
            </Tabs>
            <Divider />
            {isXSmall ? (
                <MobileGrid />
            ) : (
                <>
                    {filterValues.status === "ordered" && (
                        <DatagridConfigurable
                            // rowClick="edit"
                            omit={["invoice_id", "delivery_fees", "taxes"]}
                            expand={<InvoiceShow />}
                            rowClick="expand"
                        >
                            <TextField source="invoice_id" label="invoice_id" />
                            <PurringItemButton label="PUR" />
                            <TextField
                                sx={{
                                    display: "inline-block",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    wrap: "nowrap",
                                    maxWidth: "80px",
                                }}
                                color="primary.800"
                                fontWeight="500"
                                source="buyer_company"
                            />
                            <DateField source="date_submit" />
                            <CustomDataField source="date_payment" />
                            <NumberField
                                source="payment_amount"
                                options={{ minimumFractionDigits: 2 }}
                            />
                            {/* <InvoicePaidButton />
                            <TransitionGroupExample />
                            <HGroupExample /> */}
                            <CustomDataField source="date_paid" />
                            <ValuePaidField source="paid_amount" />
                            <OptionRow label="Operacje" />
                            {/* <TextField source="reference" />
                            {/* <CustomerReferenceField /> */}
                            {/* <ReferenceField
                                source="customer_id"
                                reference="customers"
                                link={false}
                                label="resources.commands.fields.address"
                            > */}
                            {/* <AddressField /> */}
                            {/* </ReferenceField> */}
                            {/* <NbItemsField /> */}
                            {/* <NumberField
                                source="total_ex_taxes"
                                options={{
                                    style: 'currency',
                                    currency: 'USD',
                                }}
                            /> */}
                            {/* <NumberField
                                source="delivery_fees"
                                options={{
                                    style: 'currency',
                                    currency: 'USD',
                                }}
                            />
                            <NumberField
                                source="taxes"
                                options={{
                                    style: 'currency',
                                    currency: 'USD',
                                }}
                            />
                            <NumberField
                                source="total"
                                options={{
                                    style: 'currency',
                                    currency: 'USD',
                                }}
                                sx={{ fontWeight: 'bold' }}
                            />  */}
                        </DatagridConfigurable>
                    )}
                    {filterValues.status === "delivered" && (
                        <DatagridConfigurable
                            rowClick="edit"
                            omit={["total_ex_taxes", "delivery_fees", "taxes"]}
                        >
                            <DateField source="date" showTime />
                            <TextField source="reference" />
                            {/* <CustomerReferenceField /> */}
                            <ReferenceField
                                source="customer_id"
                                reference="customers"
                                link={false}
                                label="resources.commands.fields.address"
                            >
                                {/* <AddressField /> */}
                            </ReferenceField>
                            {/* <NbItemsField /> */}
                            <NumberField
                                source="total_ex_taxes"
                                options={{
                                    style: "currency",
                                }}
                            />
                            <NumberField
                                source="delivery_fees"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                            <NumberField
                                source="taxes"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                            <NumberField
                                source="total"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                                sx={{ fontWeight: "bold" }}
                            />
                            <BooleanField
                                source="returned"
                                sx={{ mt: -0.5, mb: -0.5 }}
                            />
                        </DatagridConfigurable>
                    )}
                    {filterValues.status === "cancelled" && (
                        <DatagridConfigurable
                            rowClick="edit"
                            omit={["total_ex_taxes", "delivery_fees", "taxes"]}
                        >
                            <DateField source="date" showTime />
                            <TextField source="reference" />
                            {/* <CustomerReferenceField /> */}
                            <ReferenceField
                                source="customer_id"
                                reference="customers"
                                link={false}
                                label="resources.commands.fields.address"
                            >
                                {/* <AddressField /> */}
                            </ReferenceField>
                            {/* <NbItemsField /> */}
                            <NumberField
                                source="total_ex_taxes"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                            <NumberField
                                source="delivery_fees"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                            <NumberField
                                source="taxes"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                            />
                            <NumberField
                                source="total"
                                options={{
                                    style: "currency",
                                    currency: "USD",
                                }}
                                sx={{ fontWeight: "bold" }}
                            />
                        </DatagridConfigurable>
                    )}
                </>
            )}
        </Fragment>
    );
};

export default TabbedDatagrid;
