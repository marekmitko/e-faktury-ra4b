import React from "react";

// The storiesOf API is used to display stories in storybook
import { storiesOf } from "@storybook/react";

// Importing our react component
import {Welcome} from "../../app/components/Welcome";
// import Welcome from "@app/components";

// Displaying the component
storiesOf("Welcome", module).add("Welcome component", () => (
  <Welcome name="Olek"></Welcome>
));