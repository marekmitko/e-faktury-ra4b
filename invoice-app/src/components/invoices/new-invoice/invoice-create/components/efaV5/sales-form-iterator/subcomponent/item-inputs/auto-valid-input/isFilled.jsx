import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";


export function IsFilld() {
    const { filled } = useFormControl() || {};
    const Color = React.useMemo(() => {
        if (filled) {
            return "red";
        }
    
        return "blue";
        }, [filled]);
    
    return Color;
}