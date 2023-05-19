import React, { Children, ReactElement } from 'react';
import PropTypes from 'prop-types';
import {
    ChoicesContextProvider,
    useReferenceInputController,
    // ResourceContextProvider,
} from 'ra-core';
import { ResourceContextProvider, SimpleShowLayout, useGetOne } from 'react-admin';

// https://stackoverflow.com/questions/66097155/react-admin-resourcecontextprovider-is-not-injecting-feteched-data-in-list-compo

export const CompanyReferenceContext = (props) => {
    const { children, reference, id, resource} = props;

    const controllerProps = useReferenceInputController(props);

    // if (Children.count(children) !== 1) {
    //     throw new Error('<ReferenceInput> only accepts a single child');
    // }

    const { data } = useGetOne(
        resource,
        { id },
    );

    return (
        <ResourceContextProvider value={resource}>
            {/* <ChoicesContextProvider value={controllerProps}> */}
            <SimpleShowLayout record={data} sx={{ p: 0, my: -2, mx: -3 }}>
                {children}
            </SimpleShowLayout>
            {/* </ChoicesContextProvider> */}
        </ResourceContextProvider>
    );
};

// ReferenceInput.propTypes = {
//     children: PropTypes.element,
//     filter: PropTypes.object,
//     label: PropTypes.string,
//     page: PropTypes.number,
//     perPage: PropTypes.number,
//     record: PropTypes.object,
//     reference: PropTypes.string.isRequired,
//     resource: PropTypes.string,
//     sort: PropTypes.shape({
//         field: PropTypes.string,
//         order: PropTypes.oneOf(['ASC', 'DESC']),
//     }),
//     source: PropTypes.string,
// };

// ReferenceInput.defaultProps = {
//     filter: {},
//     page: 1,
//     perPage: 25,
//     sort: { field: 'id', order: 'DESC' },
//     children: <AutocompleteInput />,
// };

// export interface ReferenceInputProps
//     extends InputProps,
//         UseReferenceInputControllerParams {
//     children?: ReactElement;
//     label?: string;
//     [key: string]: any;
// }