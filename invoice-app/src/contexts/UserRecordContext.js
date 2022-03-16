import { useGetOne, RecordContextProvider } from 'react-admin';

const RecordFetcher = ({ id, resource, children }) => {
    const { data, isLoading, error } = useGetOne(resource, { id });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <RecordContextProvider record={data}>
            {children}
        </RecordContextProvider>
    );
};