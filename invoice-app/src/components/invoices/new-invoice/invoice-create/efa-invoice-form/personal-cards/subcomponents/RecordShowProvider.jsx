



import * as React from 'react';
import { useNotify, useShowController, useRefresh, useRedirect, ShowBase, SimpleShowLayout, RecordContextProvider, Resource } from 'react-admin';

// import ShowView from './ShowView';

export const MyShow = ({resource, id, children}) => {


            // const {
            //     basePath, // deduced from the location, useful for action buttons
            //     defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
            //     loaded, // boolean that is false until the record is available
            //     loading, // boolean that is true on mount, and false once the record was fetched
            //     record, // record fetched via dataProvider.getOne() based on the id from the location
            //     resource, // the resource name, deduced from the location. e.g. 'posts'
            //     version, // integer used by the refresh feature
            // // } = useShowController(props);
            // } = useShowController({ resource: resource, id: id });

    // const controllerProps = useShowController({ resource: resource, id });
    // const notify = useNotify();
    // const refresh = useRefresh();
    // const redirect = useRedirect();


    // const onError = (error) => {
    //     console.log('ERROR');
    //     // notify(`Could not load post: ${error.message}`, { type: 'error' });
    //     // redirect('/posts');
    //     // refresh();
    // };




    // const {
    //     defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
    //     error,  // error returned by dataProvider when it failed to fetch the record. Useful if you want to adapt the view instead of just showing a notification using the `onError` side effect.
    //     isFetching, // boolean that is true while the record is being fetched, and false once the record is fetched
    //     isLoading, // boolean that is true until the record is available for the first time
    //     record, // record fetched via dataProvider.getOne() based on the id from the location
    //     refetch, // callback to refetch the record via dataProvider.getOne()
    //     // resource, // the resource name, deduced from the location. e.g. 'posts'
    // } = useShowController({resource, id});

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    // if (error) {
    //     return <div>Error!</div>;
    // }

    const propsControl = useShowController();



//    console.log( 'controllerProps', {...controllerProps} );
console.log("myRecor", propsControl.record );
        return( 
       <div {...propsControl} >
    <RecordContextProvider value={propsControl.data } >  
            {/* <h1>{defaultTitle}</h1> */}
            {/* {record ? 
            <>
            <span>{record.company} </span> <br/>
            <span>{record.org_nr} </span> <br/>
            <span>{record.place} </span> <br/>
            </> : "" */}
                {/* {React.cloneElement(props.children, {
                basePath,
                record,
                resource,
                version,
            })} */}
           {  children ? children : "" }
  </RecordContextProvider> 
        </div>
        );
};