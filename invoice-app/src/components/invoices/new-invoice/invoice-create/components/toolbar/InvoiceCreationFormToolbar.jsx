import { Toolbar, SaveButton, useRedirect, useNotify } from 'react-admin';
import { useFormContext } from 'react-hook-form';

export default function InvoiceCreationFormToolbar({children}) {
    const { reset } = useFormContext();
    const notify = useNotify();
    return (
        <Toolbar sx={{ gap: '10px', justifyContent: 'flex-end'}}>
            { children ? children : null }
            <SaveButton  label="SaveTable" 
                form="sales_table_form"
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
            />
            
        </Toolbar>
    );
}