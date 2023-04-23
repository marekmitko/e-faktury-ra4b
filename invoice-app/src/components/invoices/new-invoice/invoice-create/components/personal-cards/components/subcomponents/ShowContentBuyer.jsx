import * as React from 'react';
import {
    ShowBase,
    TextField,
    ReferenceField,
    ReferenceManyField,
    useShowContext, useGetOne,
    useNotify, useRefresh, useRedirect, useShowController, RecordContextProvider, useRecordContext, ResourceContextProvider, ShowContextProvider
} from 'react-admin';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useFormContext, useWatch } from 'react-hook-form';

// import { Avatar } from './Avatar';
// import { ContactAside } from './ContactAside';
// import { LogoField } from '../companies/LogoField';
// import { NotesIterator } from '../notes';
// import { Contact } from '../types';





// const BuyerListContainer = () => {
//     const { data, isLoading } = useGetList(
//             'buyersEfaktury',
//             {
//                 pagination: { page: 1, perPage: 10 },
//                 sort: { field: 'company', order: 'DESC' },
//             }
//         );
//         console.log("DATA", {...data});
//     return isLoading ? null: <PostListDetail data={data} />
// };


// const PostListDetail = ({ data } ) => {
//         return <>{data.map(record => <span key={record.id}>{record.title}</span>)}</>;
// };




{/* <ShowContentBuyer /> */}
// Om
// Om? Tutaj jest coś najebane a wiem to po lini nr: 117
export const ContactShow = (props) => {
    

    
    const record = useRecordContext();
    console.log('ContactShow', record);
    
    
    if ( !record) return <p>error</p>;
    return(<ContactShow2   resource={props.resource} id={props.id}>
                {/* <ShowContentBuyer /> */}
                {props.children}
            </ContactShow2>
        );
};

export const ContactShow2 = ({children, ...props}) => {
    // const notify = useNotify();
    // const refresh = useRefresh();
    // const redirect = useRedirect();

    // const controllerProps = useShowController(props);

    const {resource, id, queryOptions, error } = props;
    
    
        // const { id } = useParams(); // this component is rendered in the /books/:id path
        // const redirect = useRedirect();
        const { data, 
            isLoading 
        } = useGetOne(
            resource,
            { id: id },
            // redirect to the list if the book is not found
            { onError: () => <p>Error</p> }
        );
    
        



    // const onError = (error) => { <p>Error</p>
    //     // notify(`Could not load post: ${error.message}`, { type: 'error' });
    //     // redirect('/posts');
    //     // refresh();
    // };

    const { setValue, control } = useFormContext();
    // const record2 = useRecordContext(); //BUG // toDo ? Nawet nie wiem po co to tu jest 
    // console.log('ContactShow@@', record2);

    const changeBuyerId = useWatch( {control, name: 'buyer_id' } );
//Om Obczaj w consol.log
    // console.log("🔘changeBuyer", changeBuyerId);
//*edu nie wiem czy to dobrze robie // https://react-hook-form.com/api/useform/setvalue/
        React.useEffect(() => {         
            setValue('dataBuyer', data)
            // console.log("💠💎changeBuyer", changeBuyerId)
            // console.log("💠💎changeBuyer", getValues())
            }, [changeBuyerId]);



















    const body = (
        <RecordContextProvider  value={data}>
        {/* <ShowContextProvider value={controllerProps}> */}
            {children}
        {/* </ShowContextProvider> */}
        </RecordContextProvider>
    );


    // return props.resource ? (
    //     <ResourceContextProvider value={ resource } >
    //     {/* // queryOptions={...props}
    //         version={id} 
    //         resource={resource} id={id}
    //         queryOptions={onError()}
    //     > */}
    //     {body}
    //     </ResourceContextProvider>) 
    //     : (body); 






    
    // if (isLoading) { return <p>Loading...</p>; }
    return body
};
