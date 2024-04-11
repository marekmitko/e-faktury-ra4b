import React, { useContext, useMemo } from "react";
import {
    Edit,
    TextInput,
    SimpleForm,
    // required,
    // useTranslate,
    Toolbar,
    SaveButton,
    useEditContext,
} from "react-admin";
import { G_Admin, G_Path, MQ_Breakpoint } from "../../constant";
import ContentForm from "../../clients/components/ContentForm";
import HeaderSimpleForm from "../../clients/components/subcomponents/HeaderSimpleForm";
import { ListItemButton } from "@mui/joy";
import { Box, Stack, useMediaQuery } from "@mui/material";
import CircleIconChip from "../../reusable-components/CircleIconChip";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
// import Button from "@mui/material/Button";
import { pick } from "lodash";
// import { ResetTvRounded } from "@mui/icons-material";

export const usePickSaveContext = (context) => {
    const value = useMemo(
        () =>
            pick(context, [
                "save",
                "saving",
                "setOnFailure",
                "setOnSuccess",
                "setTransform",
                "onSuccessRef",
                "onFailureRef",
                "transformRef",
            ]),
        /* eslint-disable react-hooks/exhaustive-deps */
        [
            context.save,
            context.saving,
            context.setOnFailure,
            context.setOnSuccess,
            context.setTransform,
            context.setTransform,
            context.onFailureRef,
            context.onSuccessRef,
            context.transformRef,
        ]
        /* eslint-enable react-hooks/exhaustive-deps */
    );

    return value;
};

const MyPix = () => {
    const context = useContext();
    const { record, isLoading } = useEditContext();
    if (!record) return null;
    if (record) return <div>usePickSaveContext(record)</div>;
};

const Separator = (props) => <Box sx={{ pt: "1em" }} {...props} />;
// https://codesandbox.io/p/sandbox/snowy-wildflower-2mk5xw?file=%2FApp.tsx
// https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/profile-dashboard

// const AdminProfileEdit = ({ staticContext, ...props }) => {

const AdminToolbar = () => (
    <Toolbar>
        <SaveButton label="Save" />
    </Toolbar>
);

const AdminProfileEdit = ({ ...props }) => {
    const admin_id = `${G_Admin.id}`;
    const basePath = `/${G_Path.profile.admin}`;
    const resource = `${G_Path.profile.admin}`;
    // const translate = useTranslate();
    const isSmall = useMediaQuery(`${MQ_Breakpoint.isSmall}`);

    return (
        <>
            <Edit
                // actions={<AdminPEditActions />}
                // mutationMode="optimistic"
                redirect={false} // I don't need any redirection here, there's no list page
                basePath={basePath}
                resource={resource}
                title="resources.profile.admin.header.top_header"
                sx={{
                    maxWidth: 500,
                    "&  .RaCreate-card": {
                        borderRadius: "15px",
                        pt: 0,
                        mt: 0,
                        maxWidth: 500,
                    },
                    "& .MuiToolbar-root ": {
                        "& button": {
                            borderRadius: "50px",
                        },
                        "& button:enabled": {
                            bgcolor: "primary.900",
                        },
                    },
                }}
                // resource={resource}
                // id={id}
                // mutationMode={mutationMode}
                // mutationOptions={mutationOptions}
                // queryOptions={queryOptions}
                // redirect={redirect}
                // transform={transform}
                // disableAuthentication={disableAuthentication}
                {...props}
                id={admin_id} //Tak naprawdę nie mam idprofilu, ponieważ przechowuję profil w pamięci lokalnej, a gdybym go miał (z bazy danych), mój interfejs API mógłby go nie ujawnić i po prostu oczekiwać, że żądanie ładowania ( GET) i aktualizacji ( POSTlub PATCH) zostanie wykonane na serwerze https://api.com/metrasa np. Oznacza to, że mogę przekazać to, co mi się podoba, my-profilenp.
            >
                <SimpleForm
                    sx={{ pt: 0, mt: 0, maxWidth: 500 }}
                    toolbar={<AdminToolbar />}
                >
                    <HeaderSimpleForm
                        label="resources.profile.admin.header.edit"
                        toolbar={<ListItemButton />}
                    />
                    {/* <ImageInput source="avatar" validate={required()}>
                        <ImageField />
                    </ImageInput> */}
                    <ContentForm />
                    <Stack
                        direction="row"
                        gap={1}
                        width="100%"
                        sx={{ mb: isSmall ? -0.5 : "" }}
                    >
                        <CircleIconChip
                            icon={<LocalAtmIcon />}
                            iconSize="xl2"
                            circleSize="sm"
                            boxSx={{ mt: -1.5, pr: 1 }}
                        />
                        <TextInput
                            // isRequired
                            source="noBank"
                            variant="standard"
                            fullWidth
                        />
                    </Stack>
                    {/* <MyPix /> */}
                </SimpleForm>
            </Edit>
        </>
    );
};

export default AdminProfileEdit;

// // in profile/index.js
// import ProfileEdit from './ProfileEdit';

// export default {
//     edit: AdminProfileEdit
// };
