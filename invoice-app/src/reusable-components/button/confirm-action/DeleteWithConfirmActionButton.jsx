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


export const DeleteWithConfirmActionButton = (props) => {
    const {
        className,
        confirmTitle = 'ra.message.delete_title',
        confirmContent = 'ra.message.delete_content',
        icon = defaultIcon,
        label = 'ra.action.delete',
        mutationMode = 'pessimistic',
        onClick,
        redirect = 'list',
        translateOptions = {},
        mutationOptions,
        color = 'error',
        ...rest
    } = props;
    const translate = useTranslate();
    const record = useRecordContext(props);
    const resource = useResourceContext(props);

    const {
        open,
        isLoading,
        handleDialogOpen,
        handleDialogClose,
        handleDelete,
    } = useDeleteWithConfirmController({
        record,
        redirect,
        mutationMode,
        onClick,
        mutationOptions,
        resource,
        
    });

    return (
        <Fragment>
                        <IconButton 
                color="danger"
                   sx={{ 
                    "--IconButton-size": "30px",
                    backgroundColor: 'transparent', //color: 'danger.900', 
                    // borderRadius: '25px', 
                    padding: 0,
                    '&:hover': {
                            // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                            // backgroundColor: 'danger.400',
                            // color: '#fff'
                        },
                }} 

                // onClick={(event) => handlerCallbackAction(event, copies)}  
                onClick={handleDialogOpen}
                {...props}
            >
                {icon} 
            </IconButton>

            {/* <Button
                onClick={handleDialogOpen}
                // label={label}
                className={clsx('ra-delete-button', className)}
                key="button"
                color={color}
                {...rest}
            >
                {icon} 
            </Button> */}
            <Confirm
                isOpen={open}
                loading={isLoading}
                title={confirmTitle}
                content={confirmContent}
                translateOptions={{
                    name: translate(`resources.${resource}.forcedCaseName`, {
                        smart_count: 1,
                        _: inflection.humanize(
                            translate(`resources.${resource}.name`, {
                                smart_count: 1,
                                _: inflection.singularize(resource),
                            }),
                            true
                        ),
                    }) + ` ${record.company}`,
                    id: record.id,
                    ...translateOptions,
                }}
                onConfirm={handleDelete}
                onClose={handleDialogClose}
            />
        </Fragment>
    );
};

const defaultIcon = <ActionDelete />;

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

DeleteWithConfirmActionButton.propTypes = {
    className: PropTypes.string,
    confirmTitle: PropTypes.string,
    confirmContent: PropTypes.string,
    label: PropTypes.string,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: PropTypes.any,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    icon: PropTypes.element,
    translateOptions: PropTypes.object,
};