import { memo } from "react";
import { useGetOne, RecordContextProvider } from "react-admin";

const RecordFetcher = ({ id, resource, children }) => {
    const { data, isLoading, error } = useGetOne(resource, { id });
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    return (
        <RecordContextProvider value={data}>{children}</RecordContextProvider>
    );
};

export default memo(RecordFetcher);
