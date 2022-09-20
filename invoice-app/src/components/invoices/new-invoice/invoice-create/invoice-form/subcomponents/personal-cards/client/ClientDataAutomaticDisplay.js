import * as React from "react";
import { ControlDataInputBuyerShow } from "../buyer/buyer-part-form/ControlDataInputBuyerShow";
export default function ClientDataAutomaticDisplay({resourceBuyer, buyerId}) {
    return (
        <ControlDataInputBuyerShow 
            resourceBuyer={resourceBuyer} 
            buyerId={buyerId} 
        />
  );
}

