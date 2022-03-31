// in src/Layout.js
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from 'react-admin';
import { AppbarMenu } from './navbars/AppbarMenu';

export const AdminLayout = (props) => (
    <>
        <Layout {...props} menu={AppbarMenu} appBar={AppbarMenu}  />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);
