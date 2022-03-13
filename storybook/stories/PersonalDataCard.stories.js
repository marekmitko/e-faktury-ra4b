import React from "react";
import { storiesOf } from "@storybook/react";
import  PersonalDataCard  from "../../app/components/personal-data-card/PersonalDataCard";

storiesOf("reusable", module).add("PersonalDataCard", () => (
    <PersonalDataCard />
  ));