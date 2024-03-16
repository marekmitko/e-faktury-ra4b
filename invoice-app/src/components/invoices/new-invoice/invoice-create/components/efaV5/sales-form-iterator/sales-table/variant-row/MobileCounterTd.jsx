import { any } from "prop-types";
import * as React from "react";

export const MobileCounterTd  = (props) => {
  const { indexChip, removeButton, itemName } = props;
  return (
    <td class="counter-td">
      <div class="counter-container">
        <div>{indexChip}</div>
        <div>
          <span>{itemName}</span>
        </div>
        <div class="remove-button-container">{removeButton}</div>
      </div>
    </td>
  );
};
