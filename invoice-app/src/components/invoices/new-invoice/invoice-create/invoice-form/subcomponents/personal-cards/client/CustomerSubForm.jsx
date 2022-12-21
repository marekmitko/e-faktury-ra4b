import React from 'react';
import {
    useRegisterMutationMiddleware,
    useCreate,
    TextInput,
} from 'react-admin';
import { ClientCreateButton } from './create-client-subform/ClientCreateButton';

const CustomerSubForm = props => {
    const [createCustomer] = useCreate();

    const middleware = React.useCallback(
        async (resource, params, options, next) => {
            //params to dane do wysłania do dataProvider.update()
            const { data } = params;
            // all user fields are in the `user` key
            // wszystkie pola użytkownika znajdują się w
            // extract the user data from the main data
            // wyodrębnienie danych klienta 
            const { user, ...orderData } = data;
            // create the customer resource before saving the order
            // utwórz zasób klienta przed zapisaniem zamówienia
            await createCustomer(
                'dbclientlist',
                { data: user },
                {
                    onSuccess: newCustomer => {
                        // update the order data with the new customer id
                        // aktualizacja danych nowego klienta 
                        const orderDataWithCustomer = {
                            ...orderData,
                            customerId: newCustomer.id,
                        };
                        // and call the next middleware to save the modified order
                        // wywołaj następne oprogramowanie pośredniczące, aby zapisać zmodyfikowane zamówienie
                        next(
                            resource,
                            { data: orderDataWithCustomer },
                            options,
                        );
                    },
                },
            );
        },
        [createCustomer],
    );

    useRegisterMutationMiddleware(middleware);

    return (
        <>
            <TextInput source="user.email" />
            <TextInput source="user.firstName" />
            <TextInput source="user.lastName" />
        </>
    );
};

export default CustomerSubForm;