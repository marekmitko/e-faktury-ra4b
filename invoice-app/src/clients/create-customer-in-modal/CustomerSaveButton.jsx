import {
    SaveButton,
    Toolbar,
    Edit,
    SimpleForm,
    useNotify,
    useRedirect,
    useUpdate,
    useRefresh,
    useRecordContext,
    useCreate,
    useSaveContext,
} from "react-admin";
import { useFormContext, useWatch } from "react-hook-form";

export const CustomerSaveButton = ({
    setLayout,
    handleLayout,
    onCancel,
    onCreate,
    hendlerFocus,
    setValue,
}) => {
    // const notify = useNotify();
    // const redirect = useRedirect();
    const buyer_id = useWatch({ name: "buyer_id" });
    const onSuccess = (data) => {
        console.log("💠CustomerData", data);
        // notify(`Post "${data.title}" saved!`);
        // redirect("/posts");
    };

    const {
        getValues,
        formState, //setValue
    } = useFormContext();
    const { isValid } = formState;
    const contextForm = useFormContext();
    const saveContextModal = useSaveContext();
    console.log("❌CustomerData", contextForm);
    const [update] = useUpdate();
    const redirect = useRedirect();
    const refresh = useRefresh();
    // const record = useRecordContext();
    // const notify = useNotify();
    const [create, { isLoading, error }] = useCreate();

    console.log("saveContext❌❌❌", saveContextModal);
    const handleClick = (e) => {
        e.preventDefault(); // necessary to prevent default SaveButton submit logic

        console.log("saveContext💠💠💠", saveContextModal);

        const customerData = getValues();
        const { id, ...data } = getValues();
        // console.log("CustomerData💠💠💠", customerData);
        console.log("isValid💠❌💠", isValid);
        // if (isValid)
        create(
            "buyersEfaktury",
            {
                data: customerData,
            },
            {
                onSuccess: () => {
                    setValue("customerData.company");
                    onCreate(customerData);
                    hendlerFocus("products.0.product_count");
                    handleLayout(undefined);
                },
            }
        );
    };

    return (
        <>
            <SaveButton //type="button"
                mutationOptions={{ onSuccess }}
                type="button"
                // onSubmit={handleClick}
                onClick={handleClick}
                form="client_create_form"
            />
        </>
    );
};
