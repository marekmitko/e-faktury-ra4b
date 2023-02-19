import * as React from "react";
import { ControlDataInputBuyerShow } from "./ControlDataInputBuyerShow";
export default function ClientDataAutomaticDisplay({resourceBuyer, buyerId}) {
    return (
        <ControlDataInputBuyerShow 
            resourceBuyer={resourceBuyer} 
            buyerId={buyerId} 
        />
  );
}

