import React from "react";
import { Edit, TextInput, SimpleForm, required } from "react-admin";
import { G_Admin, G_Path } from "../../constant";

const AdminProfileEdit = ({ staticContext, ...props }) => {
    return (
        <Edit
            redirect={false} // I don't need any redirection here, there's no list page
            id={`${G_Admin.id}`} //Tak naprawdę nie mam idprofilu, ponieważ przechowuję profil w pamięci lokalnej, a gdybym go miał (z bazy danych), mój interfejs API mógłby go nie ujawnić i po prostu oczekiwać, że żądanie ładowania ( GET) i aktualizacji ( POSTlub PATCH) zostanie wykonane na serwerze https://api.com/metrasa np. Oznacza to, że mogę przekazać to, co mi się podoba, my-profilenp.
            basePath={`/${G_Path.profile.admin}`}
            resource={`${G_Path.profile.admin}`}
            title="My admin profile"
            // resource={resource}
            // id={id}
            // mutationMode={mutationMode}
            // mutationOptions={mutationOptions}
            // queryOptions={queryOptions}
            // redirect={redirect}
            // transform={transform}
            // disableAuthentication={disableAuthentication}
            {...props}
        >
            <SimpleForm>
                <TextInput source="nickname" validate={required()} />
                <TextInput source="compant" validate={required()} />
                <TextInput source="id" validate={required()} />
            </SimpleForm>
        </Edit>
    );
};

export default AdminProfileEdit;

// // in profile/index.js
// import ProfileEdit from './ProfileEdit';

// export default {
//     edit: AdminProfileEdit
// };
