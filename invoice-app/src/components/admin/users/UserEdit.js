import React from "react";
import {
    Title,
    useRecordContext,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    TextField,
} from "react-admin";
import Typography from "@mui/material/Typography";
import { UserCard } from "./users-cards/UserCard";
import { PersonalDataCard } from "../../../custom/invoice/parsonal-cards/PersonalDataCard";

const UserEdit = (props) => {
    return (
        <Edit
            component={"div"}
            title="Edit My Profile"
            id="user_123"
            resource="data_user"
            basePath="user_123"
            redirect="/"
            {...props}
        >
            <SimpleForm component="div">
                <UserCard headerTitle={<TextField source="company" />} />
            </SimpleForm>
        </Edit>
    );
};
export default UserEdit;
