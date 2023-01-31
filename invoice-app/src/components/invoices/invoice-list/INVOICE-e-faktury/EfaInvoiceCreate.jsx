import { Create, Form, useCreate, CreateBase, useCreateContext, SimpleForm, TextInput, useRecordContext } from 'react-admin';
import { useForm, FormProvider, useFormContext, Controller} from "react-hook-form";
// export const PostCreate = ({ id, record }) => { 
    
//     return(
//     <Create     >
//     {/* <CreateBase resource="posts" id={id} aside={<Aside />}> */}
//        <PostCreateForm />
//        <input value="wyślij" type="button" onClick={ () => console.log(record)} />
//     {/* </CreateBase> */}
//     </Create>
// );
//     };

// const PostCreateForm = () => {
//     const context = useCreateContext();
//     return (
//          <SimpleForm   >
//             <TextInput source="title" />
//             <TextInput source="views" />
//             <input value="wyślij" type="button" onClick={ () => console.log({...context })} />
//         </SimpleForm>
//     );
// };
const NewInvoiceContext = () => {
    const myMethods = useFormContext();
    return <input {...myMethods.register("bill")} />;
};



export const PostCreate = (props) => {
    const record = useRecordContext();
    const myMethods = useForm();
const [create] = useCreate();
const postSave = (data) => {
    create('invoicesEfaktury', { data }
    );
    console.log(data);
};
return (
    <Create  >
        {/* <FormProvider {...myMethods}> */}

        <Form onSubmit={postSave}    >
                <TextInput source="title" />
                <TextInput source="views" />
                <input value="wyślij" type="submit" onClick={ postSave} />
                {/* <input value="wyśsadslij" type="button" onClick={ () => console.log(myMethods.handleSubmit((data) => console.log(data)))} /> */}

{/* <NewInvoiceContext/> */}
        </Form>

        
        {/* </FormProvider> */}
    </Create>
);};




// import * as React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// // -import { useGetOne, useUpdate, Title, SimpleForm, TextInput, SelectInput } from "react-admin";
// import { useGetOne, useUpdate, Title, EditContextProvider, SimpleForm, TextInput, SelectInput } from "react-admin";
// import { Card } from "@mui/material";

// export const PostCreate = () => {
//   const { id } = useParams();
//   const { isLoading, data } = useGetOne("invoicesEfaktury", { id });
//   const [update, { isLoading: isSubmitting }] = useUpdate();
//   const navigate = useNavigate();
//   const onSubmit = (data) => {
//     update(
//         "invoicesEfaktury",
//         { id, data },
//         { onSuccess: () => { navigate('/invoicesEfaktury'); } }
//     );
//   };
//   if (isLoading) return null;
//   return (
//     <EditContextProvider value={{
//         record: data,
//         isLoading,
//         save: onSubmit,
//         saving: isSubmitting,
//     }}>
//       <div>
//         <Title title="Book Edition" />
//         <Card>
// {/* -         <SimpleForm record={data} onSubmit={onSubmit}> */}
//         <SimpleForm>
//             <TextInput source="title" />
//             <TextInput source="author" />
//             <SelectInput source="availability" choices={[
//               { id: "in_stock", name: "In stock" },
//               { id: "out_of_stock", name: "Out of stock" },
//               { id: "out_of_print", name: "Out of print" },
//             ]} />
//         </SimpleForm>
//         </Card>
//       </div>
//             <input value="wyślij" type="button" onClick={ () => console.log(data)} />
//     </EditContextProvider>
//   );
// };