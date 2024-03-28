// in profile.js
import React, { useCallback, useMemo, useState } from "react";
import {
    FileInput,
    TextInput,
    SimpleForm,
    required,
    SaveContextProvider,
    useDataProvider,
    useNotify,
    useGetIdentity,
    useGetOne,
} from "react-admin";

export const RaV3_ProfileEdit = ({ staticContext, ...props }) => {
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const [saving, setSaving] = useState();
    const refresh = {};
    const myId = "Profile12356x";
    const { identity, isLoading } = useGetOne("userProfile", {
        myId,
    });
    const datarecrd = identity;
    // const { loaded, identity } = useGetIdentity();
    // const { data: identity, isLoading, error } = useGetIdentity();

    const handleSave = useCallback(
        (values) => {
            setSaving(true);
            dataProvider.updateUserProfile(
                { data: values },
                {
                    onSuccess: ({ data }) => {
                        setSaving(false);
                        notify("Your profile has been updated", "info", {
                            _: "Your profile has been updated",
                        });
                    },
                    onFailure: () => {
                        setSaving(false);
                        notify(
                            "A technical error occured while updating your profile. Please try later.",
                            "warning",
                            {
                                _: "A technical error occured while updating your profile. Please try later.",
                            }
                        );
                    },
                }
            );
        },
        [dataProvider, notify, refresh]
    );

    const saveContext = useMemo(
        () => ({
            save: handleSave,
            saving,
        }),
        [saving, handleSave]
    );

    // if (!user.loaded) {
    //     return null;
    // }

    return (
        <SaveContextProvider value={saveContext}>
            {/* <SimpleForm save={handleSave} record={identity ? identity : {}}> */}
            <SimpleForm
                save={handleSave}
                record={datarecrd}
                resource="userProfile"
            >
                <TextInput source="fullName" validate={required()} />
                <TextInput source="company" validate={required()} />
                <TextInput source="myStreet" validate={required()} />
                <TextInput source="myCity" validate={required()} />
                <TextInput source="myEmail" validate={required()} />
                <FileInput source="avatar" validate={required()} />
            </SimpleForm>
        </SaveContextProvider>
    );
};
