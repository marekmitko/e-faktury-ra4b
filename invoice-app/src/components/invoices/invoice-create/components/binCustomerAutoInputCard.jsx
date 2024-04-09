// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// import {
//     AutocompleteInput,
//     EditButton,
//     NumberField,
//     ReferenceInput,
//     useRecordContext,
//     useResourceDefinitions,
//     useResourceDefinition,
//     useTranslate,
//     useResourceContext,
// } from "react-admin";
// import AvatarField from "../../../../clients/visitors/Mobile/AvatarField";
// import {
//     Box,
//     CardHeader,
//     InputAdornment,
//     TextField,
//     Typography,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { red } from "@mui/material/colors";
// import { MyOutlinedBox } from "./subcomponents/MyLabelCustom";
// import { G_Path } from "../../../../constant";
// import { CustomerAutoLabel } from "./subcomponents/CustomerAutoLabel";
// import { CreateClientModal } from "../../../../clients/components/xCreateClientModal";
// import { ClientCreateButton } from "../../new-invoice/invoice-create/efa-invoice-form/personal-cards/show/buyer-invoice-form/create-client-subform/ClientCreateButton";
// import { ClientCreateModalButton } from "../../../../clients/components/subcomponents/ClientCreateModalButton";
// import { CreateCustomerModal } from "../../../../clients/create-customer-in-modal/CreateCustomerModal";
// import { PersonalCardWrapper } from "../../../../reusable-components/wrapper/PersonalCardWrapper";
// import DataDetailsWrapper from "../../../../reusable-components/wrapper/components/DataDetailsWrapper";
// import { ItemsRendererOption } from "./subcomponents/ItemsRendererOption";

// const initStyle = {
//     "& .MuiInputBase-root.MuiOutlinedInput-root": {
//         "& .MuiOutlinedInput-notchedOutline": {
//             "& fieldset legend.css-14lo706": {
//                 width: "calc(auto - 30px)",
//                 marginLeft: "-40px!important",
//                 backgroundColor: "red",
//             },
//         },
//     },
// };

// const choices = [
//     { id: 123, first_name: "Leo", last_name: "Tolstoi", avatar: "/penguin" },
//     { id: 456, first_name: "Jane", last_name: "Austen", avatar: "/panda" },
// ];

// const optionText = <ItemsRendererOption />;
// const inputText = (choice) => `${choice.company} ${choice.org_nr}`;
// const matchSuggestion = (filter, choice) => {
//     return (
//         choice.company.toLowerCase().includes(filter.toLowerCase()) ||
//         choice.org_nr.toLowerCase().includes(filter.toLowerCase())
//     );
// };
// export const CustomerAutoInputCard = (props) => {
//     const record = useRecordContext(props);
//     if (!record || !props.source) {
//         return null;
//     }
//     // let number = "tel:" + record[`${props.source}`];
//     const { source, helperText, sx } = props;
//     const categories = [
//         { name: "Tech", id: "tech" },
//         { name: "Lifestyle", id: "lifestyle" },
//     ];
//     const { firstname, lastname, phone, email, zip_code, place, address } =
//         record;
//     const CustomerCardContent = () => (
//         <>
//             <DataDetailsWrapper capitionLabel="dsad">
//                 <>
//                     {firstname && lastname ? `${firstname} ${lastname}` : ""}
//                     <br />
//                     {phone ? phone : ""}
//                     <br />
//                     {email ? email : ""}
//                 </>
//             </DataDetailsWrapper>

//             <DataDetailsWrapper capitionLabel="adres">
//                 {/* {prefixFirstRow ? prefixFirstRow : ""}{" "} */}
//                 <>
//                     {address ? address : ""}
//                     <br />
//                     {zip_code ? zip_code : ""} {place ? place : ""}
//                     <br />
//                     {/* {prefixThirdRow && thirdRow
//                                 ? prefixThirdRow
//                                 : ""}{" "}
//                             {thirdRow ? thirdRow : ""} */}
//                 </>
//             </DataDetailsWrapper>
//         </>
//     );

//     return (
//         <>
//             <ReferenceInput
//                 label={false}
//                 source={source}
//                 reference={G_Path.customers}
//                 enableGetChoices={({ q }) => q && q.length >= 3}
//             >
//                 <PersonalCardWrapper cardContent={<CustomerCardContent />}>
//                     {firstname}
//                     <AutocompleteInput
//                         openOnFocus={false}
//                         // create={<CreateClientModal />}
//                         // create={<ClientCreateModalButton />}
//                         create={<CreateCustomerModal />}
//                         // create={<ClientCreateButton />}
//                         className="autocomplete-input-customers"
//                         source="buyer_id"
//                         variant="outlined"
//                         // choices={choices}
//                         label={
//                             <CustomerAutoLabel
//                                 label={`resources.${G_Path.invoices}.create.label.customer_autocomplete`}
//                             />
//                         }
//                         optionText={optionText}
//                         inputText={inputText}
//                         matchSuggestion={matchSuggestion}
//                         // defaultValue="szuk"

//                         onCreate={() => {
//                             const newCategoryName = prompt(
//                                 "Enter a new category"
//                             );
//                             const newCategory = {
//                                 id: newCategoryName.toLowerCase(),
//                                 name: newCategoryName,
//                             };
//                             categories.push(newCategory);
//                             return newCategory;
//                         }}
//                         helperText={helperText}
//                         sx={sx}
//                         fullWidth
//                     />
//                 </PersonalCardWrapper>
//             </ReferenceInput>
//         </>
//     );
// };
