import * as React from 'react';
import { Fragment, useState, ReactElement } from 'react';
import PropTypes from 'prop-types';
import ActionUpdate from '@mui/icons-material/Update';
import inflection from 'inflection';
import { alpha, styled } from '@mui/material/styles';
import {
    useTranslate,
    useNotify,
    useResourceContext,
    MutationMode,
    RaRecord,
    useRecordContext,
    useUpdate,
    UpdateParams,
} from 'ra-core';

import { Button, Confirm } from 'react-admin';
// import { UseMutationOptions } from 'react-query';

export const UpdateActionButton = (  props ) => {
    const notify = useNotify();
    const translate = useTranslate();
    const resource = useResourceContext(props);
    const [isOpen, setOpen] = useState(false);
    const record = useRecordContext(props);

    const {
        confirmTitle, //= 'ra.message.bulk_update_title',
        confirmContent, //= 'ra.message.bulk_update_content',
        confirmContentElement,
        data,
        icon = defaultIcon,
        label = "", //'ra.action.update',
        mutationMode = 'pessimistic',
        onClick,
        mutationOptions = {},
        ...rest
    } = props;
    const {
        meta: mutationMeta,
        onSuccess = () => {
            notify('ra.notification.updated', {
                type: 'info',
                messageArgs: { smart_count: 1 },
                undoable: mutationMode === 'undoable',
            });
        },
        onError = (error ) => {
            notify(
                typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error',
                {
                    type: 'error',
                    messageArgs: {
                        _:
                            typeof error === 'string'
                                ? error
                                : error && error.message
                                ? error.message
                                : undefined,
                    },
                }
            );
        },
        onSettled = () => {
            setOpen(false);
        },
        ...otherMutationOptions
    } = mutationOptions;

    const [updateMany, { isLoading }] = useUpdate();

    const handleClick = e => {
        setOpen(true);
        e.stopPropagation();
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleUpdate = e => {
        updateMany(
            resource,
            { id: record.id, data, meta: mutationMeta, previousData: record },
            {
                onSuccess,
                onError,
                onSettled,
                mutationMode,
                ...otherMutationOptions,
            }
        );

        if (typeof onClick === 'function') {
            onClick(e);
        }
    };

    return (
        <Fragment>
            <StyledButton
                onClick={handleClick}
                label={label}
                {...sanitizeRestProps(rest)}
            >
                {icon}
            </StyledButton>
            <Confirm
                isOpen={isOpen}
                loading={isLoading}
                title={confirmTitle ? translate(`resources.${resource}.${confirmTitle}`) : null }
                content={confirmContent ? (<><div>{translate(`resources.${resource}.${confirmContent}`)}</div><div>{confirmContentElement}</div></>) 
                                        : null }
                // translateOptions={{
                //     smart_count: 1,
                //     name: translate(`resources.${resource}.forcedCaseName`, {
                //         smart_count: 1,
                //         _: inflection.humanize(
                //             translate(`resources.${resource}.name`, {
                //                 smart_count: 1,
                //                 _: inflection.inflect(resource, 1),
                //             }),
                //             true
                //         ),
                //     }),
                // }}
                onConfirm={handleUpdate}
                onClose={handleDialogClose}
            />
        </Fragment>
    );
};

const sanitizeRestProps = ({
    filterValues,
    label,
    ...rest
}  ) => rest;

// export interface UpdateWithConfirmButtonProps<
//     RecordType extends RaRecord = any,
//     MutationOptionsError = unknown
// > extends BulkActionProps,
//         ButtonProps {
//     confirmContent?: React.ReactNode;
//     confirmTitle?: React.ReactNode;
//     icon?: ReactElement;
//     data: any;
//     mutationMode?: MutationMode;
//     mutationOptions?: UseMutationOptions<
//         RecordType,
//         MutationOptionsError,
//         UpdateParams<RecordType>
//     > & { meta?: any };
// }

UpdateActionButton.propTypes = {
    confirmTitle: PropTypes.node,
    confirmContent: PropTypes.node,
    label: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    icon: PropTypes.element,
    data: PropTypes.any.isRequired,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
};

const PREFIX = 'RaUpdateWithConfirmButton';

const StyledButton = styled(Button, {
    name: PREFIX,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
            backgroundColor: 'transparent',
        },
    },
}));

const defaultIcon = <ActionUpdate />;