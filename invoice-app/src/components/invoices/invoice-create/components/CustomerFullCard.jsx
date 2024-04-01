import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Divider from "@mui/material/Divider";

import {
    AutocompleteInput,
    EditButton,
    NumberField,
    ReferenceInput,
    useRecordContext,
    useResourceDefinitions,
    useResourceDefinition,
    useTranslate,
    useResourceContext,
    useChoicesContext,
} from "react-admin";
import AvatarField from "../../../../clients/visitors/Mobile/AvatarField";
import {
    Box,
    CardHeader,
    InputAdornment,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ItemsRendererOption } from "./subcomponents/ItemsRendererOption";
import { red } from "@mui/material/colors";
import { MyOutlinedBox } from "./subcomponents/MyLabelCustom";
import { G_Path, MQ_Breakpoint } from "../../../../constant";
import { CustomerAutoLabel } from "./subcomponents/CustomerAutoLabel";
import { CreateClientModal } from "../../../../clients/components/xCreateClientModal";
import { ClientCreateButton } from "../../new-invoice/invoice-create/efa-invoice-form/personal-cards/show/buyer-invoice-form/create-client-subform/ClientCreateButton";
import { ClientCreateModalButton } from "../../../../clients/components/subcomponents/ClientCreateModalButton";
import { CreateCustomerModal } from "../../../../clients/components/subcomponents/CreateCustomerModal";
import { PersonalCardWrapper } from "../../../../reusable-components/wrapper/PersonalCardWrapper";
import DataDetailsWrapper from "../../../../reusable-components/wrapper/components/DataDetailsWrapper";
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

const choices = [
    { id: 123, first_name: "Leo", last_name: "Tolstoi", avatar: "/penguin" },
    { id: 456, first_name: "Jane", last_name: "Austen", avatar: "/panda" },
];

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

    return (
        <>
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
                    />{" "}
                    <Divider
                        sx={{
                            borderColor:
                                "var(--mui-palette-background-level1, #fafafa)",
                        }}
                    />
                    <MainPartCustomerCard>
                        <AutocompleteInput
                            // size="large"
                            // create={<CreateClientModal />}
                            // create={<ClientCreateModalButton />}
                            create={<CreateCustomerModal />}
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

                            // onCreate={() => {
                            //     const newCategoryName = prompt(
                            //         "Enter a new category"
                            //     );
                            //     const newCategory = {
                            //         id: newCategoryName.toLowerCase(),
                            //         name: newCategoryName,
                            //     };
                            //     categories.push(newCategory);
                            //     return newCategory;
                            // }}
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
