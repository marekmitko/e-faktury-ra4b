import { Toolbar, useNotify } from "react-admin";
import { useFormContext } from "react-hook-form";

export default function InvoiceCreationFormToolbar({ children }) {
    const { reset } = useFormContext();
    const notify = useNotify();
    return (
        <Toolbar sx={{ gap: "10px", justifyContent: "flex-end" }}>
            {/* <SaveButton  label="SaveTable" 
                // form="new-invoice-form"
            />
            <SaveButton 
                label="Save and add"
                mutationOptions={{
                    onSuccess: () => {
                        notify('Element created');
                        reset();
                    }}
                }
                type="button"
                variant="text"
            /> */}

            {children}
        </Toolbar>
    );
}
