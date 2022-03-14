import { useGetOne } from 'react-admin';
// import { Loading, Error } from './MyComponents';

export const UserProfile = ({ userId }) => {
    const { data: profile,
        //  isLoading, error 
        } = useGetOne('profile', { id: userId });

    // if (isLoading) return <Loading />;
    // if (error) return <Error />;
    if (!profile) return null;

    // cLog // control dataUser console.log("dataUser", {...profile});
    return (
        <ul>
            <li>Name: {profile.nickname}</li>
            <li>Email: {profile.email}</li>
        </ul>
    )
};