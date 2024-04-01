import * as React from "react";
import {
    useGetOne,
    SimpleShowLayout,
    TextField,
    ResourceContextProvider,
    Identifier,
    RaRecord,
    useTranslate,
} from "react-admin";
import { SubHeaderBuyer } from "./subcomponents/SubHeaderBuyer";
import { AddressDetailsBuyer } from "./subcomponents/AddressDetailsBuyer";
import { ContactDetailsBuyer } from "./subcomponents/ContactDetailsBuyer";

const BuyerPreview = <RecordType extends RaRecord = any>({
    id,
    resource,
}: {
    id: Identifier;
    resource: string;
}) => {
    // const queryClient = useQueryClient();

    // const record = queryClient.getQueryData<RecordType>([
    //     resource,
    //     'getOne',
    //     { id: String(id) },
    // ]);

    const { data } = useGetOne(resource, { id: String(id) });

    const translate = useTranslate();
    return (
        <ResourceContextProvider value={resource}>
            <SimpleShowLayout record={data}>
                <SubHeaderBuyer />
                {/* <AddressDetailsBuyer prefixFirstRow="ul. " capitionLabel={translate('myroot.form.label.header.address')}   /> */}
                {/* <ContactDetailsBuyer
                    capitionLabel={translate(
                        "myroot.form.label.header.contact"
                    )}
                /> */}
            </SimpleShowLayout>
        </ResourceContextProvider>
    );
};

export default BuyerPreview;
