import * as React from 'react';
import {
    cloneElement,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { Button, Card, styled, Table, TableContainer, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import {
    SimpleFormIteratorClasses,
    SimpleFormIteratorPrefix,
} from '../../mobile/spanning-sales-table/subcomponents/useSimpleFormIteratorStyles';
import { Confirm, ReOrderButtons, SimpleFormIteratorContext, RemoveItemButton, AddItemButton } from 'react-admin';
import { SalesTableFormIteratorRow } from '../../mobile/spanning-sales-table/subcomponents/SalesTableFormIteratorRow';
import { ClearArrayButton } from '../../mobile/spanning-sales-table/subcomponents/ClearArrayButton';
import useProductFormIterator from '../../mobile/spanning-sales-table/logic/useProductFormField';
import { MQ_isSmall } from '../../../../../../../../config/GLOBAL_CONFIG_CONST';
import TableContainerFormIterator from './sales-table/TableContainerFormIterator';

// in ra-core/form/getDefaultValues.js
// const getDefaultValues = (data = {}, defaultValue = {}, defaultValues = {}) => {
//     const globalDefaultValue =
//         typeof defaultValue === 'function' ? defaultValue() : defaultValue;
//     return { ...globalDefaultValue, ...defaultValues, ...data };
// };


// export const MobileFormIterator = (props) => {
export const SalesTableFormIterator = React.forwardRef((props, ref ) => {

    const {  
        addButton = <AddItemButton/>,               
        removeButton = <RemoveItemButton/>,          
        reOrderButtons = <ReOrderButtons/>,                               
        children,
        className,
        resource,
        source,
        disabled,
        disableAdd,
        disableClear,
        disableRemove,
        disableReordering,
        inline,
        getItemLabel = false,
        fullWidth,
        sx,
    } = props;
    const [confirmIsOpen, setConfirmIsOpen] = useState(false);

    const { records, record, fields, translate,  removeField, addField, move, replace } = useProductFormIterator(props)
    // removeField

    // add field and call the onClick event of the button passed as addButton prop
    const handleAddButtonClick = ( 
        originalOnClickHandler        // : MouseEventHandler
    ) => (event) => {               //: MouseEvent
        addField();
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    };

    const handleReorder = useCallback(
        (origin, destination) => {
            move(origin, destination);
        },
        [move]
    );

    const handleArrayClear = useCallback(() => {
        replace([]);
        setConfirmIsOpen(false);
    }, [replace]);

    // czy to tez tam dodać? 
    const context = useMemo(
        () => ({
            total: fields.length,
            add: addField,
            remove: removeField,
            reOrder: handleReorder,
            source,
        }),
        [addField, fields.length, handleReorder, removeField, source]
    );



        const isSmall = useMediaQuery(`${MQ_isSmall}`);
    
        // const userMyRef = React.useRef({});

    return  fields ? (
        <SimpleFormIteratorContext.Provider value={context}>    {/*  https://mui.com/material-ui/react-table/#custom-pagination-actions */}
            <TableContainer sx={{border: "3px orange solid", p: 1}}>
                <TableContainerFormIterator />

                <span>Table Container</span>
            <Root sx={sx} >
                <Table sx={{border: "5px pink solid", padding: "10px" }}>  {/* //<ul /> </ul> */}
                    <span>Table  </span>
                <hr />
                <span><small>HEADER</small></span>
                    {fields.map((member, index) => {
                        return(
                        <SalesTableFormIteratorRow
                            key={member.id}
                            disabled={disabled}
                            disableRemove={disableRemove}
                            disableReordering={disableReordering}
                            fields={fields}
                            getItemLabel={getItemLabel}
                            index={index}
                            member={`${source}.${index}`}
                            onRemoveField={removeField}
                            onReorder={handleReorder}
                            record={(records && records[index]) || {}}
                            removeButton={removeButton}
                            reOrderButtons={reOrderButtons}
                            resource={resource}
                            source={source}
                            // ref={userMyRef}
                            inline={inline}
                        >
                            <p>Header in input</p>
                            <Table  sx={{border: "2px blue solid", p: 1}} >"SubTable in FormIterator"</Table>
                            {children} 
                            {/* https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component */}
                        </SalesTableFormIteratorRow>
                    )}
                )}
                </Table>
                                                {/* <Card sx={{}}>
                                                                <center>
                                                                    <p>Header in input</p>
                                                                    {children} 
                                                                    {/* https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component 
                                                                </center>
                                                            </Card>  */}
                {!disabled && !(disableAdd && (disableClear || disableRemove)) && (
                    <div 
                    className={SimpleFormIteratorClasses.buttons}
                    >
                        {!disableAdd && ( <>
                           <span>Create Item</span> <div  // className={SimpleFormIteratorClasses.add}
                            >
                                {cloneElement(addButton, {
                                    className: clsx(
                                        'button-add',
                                        `button-add-${source}`
                                    ),
                                    onClick: handleAddButtonClick(
                                        addButton.props.onClick
                                    ),
                                })}
                            </div>
                        </>
                        )}
                        <br/><hr/>
                        {fields.length > 0 && !disableClear && !disableRemove && (
                            <div 
                            // className={SimpleFormIteratorClasses.clear}
                            >
                                <Confirm
                                    isOpen={confirmIsOpen}
                                    title={translate(
                                        'ra.action.clear_array_input'
                                    )}
                                    content={translate(
                                        'ra.message.clear_array_input'
                                        )}
                                    onConfirm={handleArrayClear}
                                    onClose={() => setConfirmIsOpen(false)}
                                />
                                <ClearArrayButton
                                    onClick={() => setConfirmIsOpen(true)}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Root>
            </TableContainer>
        </SimpleFormIteratorContext.Provider>
    ) : null  
});
// };

SalesTableFormIterator.defaultProps = {
    disableAdd: false,
    disableRemove: false,
    disableReordering: true
};


const Root = styled('div', {
    // name: SimpleFormIteratorPrefix,
    name: SalesTableFormIterator,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    '& > ul': {
        padding: 0,
        marginTop: 0,
        marginBottom: 0,
    },
    '& > ul > li:last-child': {
        // hide the last separator
        borderBottom: 'none',
    },
    [`& .${SimpleFormIteratorClasses.line}`]: {
        display: 'flex',
        listStyleType: 'none',
        borderBottom: `solid 1px ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: { display: 'block' },
    },
    [`& .${SimpleFormIteratorClasses.index}`]: {
        display: 'flex',
        alignItems: 'top',
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        [theme.breakpoints.down('md')]: { display: 'none' },
    },
    [`& .${SimpleFormIteratorClasses.form}`]: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
    },
    [`&.fullwidth > ul > li > .${SimpleFormIteratorClasses.form}`]: {
        flex: 2,
    },
    [`& .${SimpleFormIteratorClasses.inline}`]: {
        flexDirection: 'row',
        columnGap: '1em',
        flexWrap: 'wrap',
    },
    [`& .${SimpleFormIteratorClasses.action}`]: {
        marginTop: theme.spacing(0.5),
        visibility: 'hidden',
        '@media(hover:none)': {
            visibility: 'visible',
        },
    },
    [`& .${SimpleFormIteratorClasses.buttons}`]: {
        display: 'flex',
    },
    [`& .${SimpleFormIteratorClasses.add}`]: {
        borderBottom: 'none',
    },
    [`& .${SimpleFormIteratorClasses.clear}`]: {
        borderBottom: 'none',
    },
    [`& .${SimpleFormIteratorClasses.line}:hover > .${SimpleFormIteratorClasses.action}`]: {
        visibility: 'visible',
    },
}));