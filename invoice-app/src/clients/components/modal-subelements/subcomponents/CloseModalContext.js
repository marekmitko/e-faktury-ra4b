import * as React from "react";

const CloseModalContext = React.createContext(undefined);

if (process.env.NODE_ENV !== "production") {
    CloseModalContext.displayName = "CloseModalContext";
}

export default CloseModalContext;
