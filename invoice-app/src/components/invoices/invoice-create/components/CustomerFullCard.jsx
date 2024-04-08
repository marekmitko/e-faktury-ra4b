import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import Divider from "@mui/material/Divider";

import {
    AutocompleteInput,
    ReferenceInput,
    useRecordContext,
    useTranslate,
} from "react-admin";

import { useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ItemsRendererOption } from "./subcomponents/ItemsRendererOption";

import { G_Path, MQ_Breakpoint } from "../../../../constant";
import { CustomerAutoLabel } from "./subcomponents/CustomerAutoLabel";
import { CreateCustomerModal } from "../../../../clients/create-customer-in-modal/CreateCustomerModal";
import { PersonalCardWrapper } from "../../../../reusable-components/wrapper/PersonalCardWrapper";
import { CollapsePartCustomerCard } from "../../../../reusable-components/wrapper/customer-personal-card/CollapsePartCustomerCard";
import { MainPartCustomerCard } from "../../../../reusable-components/wrapper/customer-personal-card/MainPartCustomerCard";
import SelectedChoiceContext from "../../new-invoice/invoice-create/efa-invoice-form/personal-cards/card-profile/SelectedChoiceContext";
import { AddressDetailsBuyer } from "../../../../reusable-components/wrapper/components/seller-personal-card/AddressDetailsBuyer";
import { ContactDetailsBuyer } from "../../../../reusable-components/wrapper/components/seller-personal-card/ContactDetailsBuyer";
import { HeaderPartCustomerCard } from "../../../../reusable-components/wrapper/customer-personal-card/HeaderPartCustomerCard";

const initStyle = {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
            "& fieldset legend.css-14lo706": {
                width: "calc(auto - 30px)",
                marginLeft: "-40px!important",
            },
        },
    },
};

const optionText = <ItemsRendererOption />;
// const inputText = (choice) => `${choice.company} ${choice.org_nr}`;
const inputText = (choice) => `${choice.company}`;
const matchSuggestion = (filter, choice) => {
    return (
        choice.company.toLowerCase().includes(filter.toLowerCase()) ||
        choice.org_nr.toLowerCase().includes(filter.toLowerCase())
    );
};
export const CustomerFullCard = (props) => {
    const [open, setOpen] = React.useState(false); // Controls modal
    const [layout, setLayout] = React.useState(undefined);
    const isSmall = useMediaQuery(MQ_Breakpoint.isSmall);

    const record = useRecordContext(props);
    const translate = useTranslate();

    const categories = [
        { name: "Tech", id: "tech" },
        { name: "Lifestyle", id: "lifestyle" },
    ];

    if (!record || !props.source) {
        return null;
    }
    const { source, helperText, sx } = props;

    // const hendlerClosedList = (value) => {
    //     return false;
    // };

    return (
        <>
            {/* <input type="button" onChange={hendlerClosedList(true)} /> */}

            <ReferenceInput
                label={false}
                source={source}
                reference={G_Path.customers}
                enableGetChoices={({ q }) => q && q.length >= 3}
            >
                <Card className="parsonal-card wrapper ">
                    <HeaderPartCustomerCard
                        open={open}
                        setOpen={setOpen}
                        layout={layout}
                        setLayout={setLayout}
                    />
                    <Divider
                        sx={{
                            borderColor:
                                "var(--mui-palette-background-level1, #fafafa)",
                        }}
                    />
                    <MainPartCustomerCard>
                        <AutocompleteInput
                            // size="large"
                            create={
                                <CreateCustomerModal />
                                // <CreateCategory />
                            }
                            // onCreate={(filter) => {
                            //     const newCategoryName = window.prompt(
                            //         "Enter a new category",
                            //         filter
                            //     );
                            //     const newCategory = {
                            //         id: categories.length + 1,
                            //         name: newCategoryName,
                            //     };
                            //     categories.push(newCategory);
                            //     return newCategory;
                            // }}
                            // create={<ClientCreateButton />}
                            className="autocomplete-input-customers"
                            source="buyer_id"
                            variant="outlined"
                            // choices={choices}
                            label={
                                <CustomerAutoLabel
                                    label={`resources.${G_Path.invoices}.create.label.customer_autocomplete`}
                                />
                            }
                            optionText={optionText}
                            inputText={inputText}
                            matchSuggestion={matchSuggestion}
                            // defaultValue="szuk"

                            helperText={helperText}
                            sx={sx}
                            fullWidth
                        />
                    </MainPartCustomerCard>
                    <Divider />
                    <SelectedChoiceContext>
                        <CollapsePartCustomerCard>
                            {/* <DataDetailsWrapper> */}
                            <AddressDetailsBuyer
                                prefixFirstRow={`${translate(
                                    "myroot.form.label.header.street_prefix"
                                )} `}
                                capitionLabel={translate(
                                    "myroot.form.label.header.address"
                                )}
                            />
                            <ContactDetailsBuyer
                                capitionLabel={translate(
                                    "myroot.form.label.header.contact"
                                )}
                            />
                            {/* </DataDetailsWrapper> */}
                        </CollapsePartCustomerCard>
                    </SelectedChoiceContext>
                </Card>
            </ReferenceInput>
        </>
    );
};
