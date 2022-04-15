import * as React from 'react';
import { useGetList, useRecordContext } from 'react-admin';

const CustomOption = props => {
    const record = useRecordContext();

    return (
        <div {...props}>
            {record?.fullName}&nbsp;<i>({record?.language})</i>
        </div>
    );
};

export const PostListContainer = () => {
    
    const { data, isLoading } = useGetList(
        'dbclientlist',
        {
            pagination: { page: 1, perPage: 10 },
            sort: { field: 'company', order: 'DESC' },
        }
    );
    return (isLoading ? null : <PostListDetail data={data} />);
}



    const PostListDetail = ({ data }  ) => {
        return(
        <>{data.map(record => <span key={record.id}>{record.company}</span>)}</>
        );
    };