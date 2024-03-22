import React, { Children, ReactElement } from "react";
import PropTypes from "prop-types";
import {
    ChoicesContextProvider,
    useReferenceInputController,
    // ResourceContextProvider,
} from "ra-core";
import {
    ResourceContextProvider,
    SimpleShowLayout,
    useGetOne,
} from "react-admin";

// https://stackoverflow.com/questions/66097155/react-admin-resourcecontextprovider-is-not-injecting-feteched-data-in-list-compo

export const CompanyReferenceContext = (props) => {
    const { children, reference, id, resource } = props;

    const controllerProps = useReferenceInputController(props);

    // if (Children.count(children) !== 1) {
    //     throw new Error('<ReferenceInput> only accepts a single child');
    // }

    const { data } = useGetOne(resource, { id });

    return (
        <ResourceContextProvider value={resource}>
            <ChoicesContextProvider value={controllerProps}>
                <SimpleShowLayout record={data} sx={{ p: 0, m: 0 }}>
                    {children}
                </SimpleShowLayout>
            </ChoicesContextProvider>
        </ResourceContextProvider>
    );
};
