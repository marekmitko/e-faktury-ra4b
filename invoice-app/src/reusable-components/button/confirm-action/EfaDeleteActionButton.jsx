import React, { Fragment, ReactEventHandler, ReactElement } from 'react';
import PropTypes from 'prop-types';
import ActionDelete from '@mui/icons-material/Delete';
import clsx from 'clsx';
import inflection from 'inflection';
import { UseMutationOptions } from 'react-query';
import {
    MutationMode,
    RaRecord,
    DeleteParams,
    useDeleteWithConfirmController,
    useRecordContext,
    useResourceContext,
    useTranslate,
    RedirectionSideEffect,
} from 'ra-core';
import { IconButton } from '@mui/joy';

import { Button, Confirm } from 'react-admin';
import { ActionWithConfirmButton } from './ActionWithConfirmButton';

export const EfaDeleteActionButton = (props) => {
    const {
        // className,
        // confirmTitle = 'ra.message.delete_title',
        // confirmContent = 'ra.message.delete_content',
        // icon = defaultIcon,
        // label = 'ra.action.delete',
        // mutationMode = 'pessimistic',
        // onClick,
        // redirect = 'list',
        // translateOptions = {},
        // mutationOptions,
        color = 'error',
        // ...rest
    } = props;
    const translate = useTranslate();
    const record = useRecordContext(props);
    const resource = useResourceContext(props);
        

    return (
        <ActionWithConfirmButton
        // confirmContent="You will not be able to recover this record. Are you sure?"
        translateOptions={{ name: record.company }}
        confirmTitle={
            translate(`resources.${resource}.massage.delete_record.title`) + ` ${record.company}`
        }
        icon={<ActionDelete />}
    />
    );
};


// export interface DeleteWithConfirmButtonProps<
//     RecordType extends RaRecord = any,
//     MutationOptionsError = unknown
// > extends ButtonProps {
//     confirmTitle?: string;
//     confirmContent?: React.ReactNode;
//     icon?: ReactElement;
//     mutationMode?: MutationMode;
//     onClick?: ReactEventHandler<any>;
//     // May be injected by Toolbar - sanitized in Button
//     translateOptions?: object;
//     mutationOptions?: UseMutationOptions<
//         RecordType,
//         MutationOptionsError,
//         DeleteParams<RecordType>
//     >;
//     record?: RecordType;
//     redirect?: RedirectionSideEffect;
//     resource?: string;
// }

// ActionWithConfirmButton.propTypes = {
//     className: PropTypes.string,
//     confirmTitle: PropTypes.string,
//     confirmContent: PropTypes.string,
//     label: PropTypes.string,
//     mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
//     record: PropTypes.any,
//     redirect: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.bool,
//         PropTypes.func,
//     ]),
//     resource: PropTypes.string,
//     icon: PropTypes.element,
//     translateOptions: PropTypes.object,
// };