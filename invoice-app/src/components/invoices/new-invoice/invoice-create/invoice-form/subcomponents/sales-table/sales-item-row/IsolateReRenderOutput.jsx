import React from "react";
import { useWatch } from "react-hook-form";

export function IsolateReRender({ control, nameInputPrice, nameInputQty, nameInputVat} ) {
    const outputDataItem = useWatch({ control,
        name: [`${nameInputPrice}`, `${nameInputQty}`, `${nameInputVat}`],
    });

    // if(nameInputVat){let sumItem = +outputDataItem[0] * +outputDataItem[1];
    let sumItem = +outputDataItem[0] * +outputDataItem[1];
        return <div>{sumItem}</div>;
    
}