import React from "react";
import { Card, Box } from "@mui/material";
import { SimpleForm, Create, Edit } from "react-admin";
import form from "../db/default-values/form";
import { IconBuyer } from ".";
import ContentForm from "./components/ContentForm";
import HeaderSimpleForm from "./components/subcomponents/HeaderSimpleForm";
import { ListButton } from "react-admin";

// "id": "2125",
// "buyer_id": "2125",
// ?? "user_id": "319",
// ?? "kunde_nr": "1",
// "company": "firma 1",
// "address": "Kolorowa",  | address.street
// "place": "34-567",      | place.zip_code   place.name

// note Omówić różnice  "orgId.orgNumber" "orgId.MVA"
// "org_nr": "12345698",
// "mva": "1",

// Oki  "email": "",
// Oki "phone": "",
// BUG "fax": "",
//Issues? Omwić te brakujące wartości.
// ?? "main_kunde_nr": "0",
// ?? "lang": "",
// ?? "debt": "126188.10",
// ??"remainder": "0",
// ??"inkasso": "0",
// ?? // note "is_company": "1

const Separator = () => <Box sx={{ pt: "1em" }} />;

export const ClientEdit = (props) => {
    return (
        <>
            <Edit // {...props}
                actions=""
                sx={{
                    maxWidth: 500,
                    "&  .RaCreate-card": {
                        borderRadius: "15px",
                        pt: 0,
                        mt: 0,
                        maxWidth: 500,
                    },
                }}
            >
                <SimpleForm sx={{ pt: 0, mt: 0, maxWidth: 500 }}>
                    <HeaderSimpleForm title="edit" toolbar={<ListButton />} />
                    <ContentForm />
                </SimpleForm>
            </Edit>
        </>
    );
};
