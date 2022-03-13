import React from "react";
import { storiesOf } from "@storybook/react";
import  RecipeDataCard  from "../../app/components/personal-data-card/RecipeDataCard";

storiesOf("reusable", module).add("RecipeDataCard", () => (
    <RecipeDataCard />
  ));