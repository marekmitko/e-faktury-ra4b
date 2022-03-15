import React from "react";
import { storiesOf } from "@storybook/react";
import { PersonalDataCard } from "../../../app/components/invoice-form/PersonalDataCard";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


storiesOf("invoice-form", module).add("PersonalDataCard", () => (
    <PersonalDataCard headerIcon={<ManageAccountsIcon />} headerTitle="Sprzedawca">
        <p>dupa </p>
    </PersonalDataCard>
  ));