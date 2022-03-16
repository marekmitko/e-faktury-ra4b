import React from 'react';
import { useGetOne, RecordContextProvider } from 'react-admin';
import GCV  from '../config/GLOBAL_CONFIG_CONST';

// UserRecordFetcher
export const UserRecordFetcher = ({ id, resource, children }) => {
    const { data, isLoading, error } = useGetOne(resource, { id });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <RecordContextProvider record={data}>
            {children}
        </RecordContextProvider>
    );
};
// Global Configuration Constans  GCC
export const UserRecordWithGCC =  () => (<UserRecordFetcher id={GCV.USER_ID} resource={GCV.USER_RESOURCE} />);

