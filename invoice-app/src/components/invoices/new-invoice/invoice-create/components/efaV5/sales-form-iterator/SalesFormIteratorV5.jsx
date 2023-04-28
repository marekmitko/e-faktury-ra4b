import * as React from 'react';
import {
    cloneElement,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { Button, Card, styled, Box,  Table, TableBody, TableContainer, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import {
    SalesFormIteratorClasses,
    SalesFormIteratorPrefix,
    MQ_isSmall
} from './useSalesFormIteratorStyles';
import { Confirm, ReOrderButtons, SimpleFormIteratorContext, RemoveItemButton, AddItemButton } from 'react-admin';
import { SalesFormIteratorRowV5 } from './SalesFormIteratorRowV5';
import useProductFormIterator from './logic/useProductFormField';
// import TableContainerIterator from './subcomponent/form-iterator/TableContainerIterator';
import { AddItemRowButton } from './subcomponent/button/AddItemRowButton';
import JoyDivider from '@mui/joy/Divider';
import { useFormContext } from 'react-hook-form';
import { FlexboxContainer, BorderLinebox } from '../../../efa-invoice-form/components/layout/RowLineLayout';
import { EfaRemoveBtnIcon, EfaRemoveItemButton } from '../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/button/RemoveItemButton';
import { ClearArrayButton } from '../../invoice-confirm-modal/components/button/bin/ClearArrayButton';
import LabelOptionCard from '../../../efa-invoice-form/components/additional-sending-options/subcomponents/LabelOptionCard';

// export const MobileFormIterator = (props) => {
export const SalesFormIteratorV5 = React.forwardRef((props, ref ) => {

    const {  
        addButton = <AddItemRowButton />,               
        removeButton = <EfaRemoveItemButton />, //<RemoveItemButton/>,          
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
        inline=false,
        getItemLabel = false,
        fullWidth,
        wraperSectionItem,
        sx,
        itemSx,
        sxTableBody,
        sxItemRow,
        sxItemContent,
        sxInputContent,
        sxSumPriceBox,
        tableHeader, 
        totalCostTable,
        entryPriceIsGross,
        isXSmall
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




    // *edu Jak to zoptymalizować 
    const { getValues,  setValue  } = useFormContext();
    // // console.log("fromContextMy", getValues(`${source}`) );
    // console.log( "getValues", getValues);


    // czy to tez tam dodać? 
    const context = useMemo(
        () => ({
            total: fields.length,
            add: addField,
            remove: removeField,
            reOrder: handleReorder,
            source,
            // to dodałem
            getValues
        }),
        [addField, fields.length, handleReorder, removeField, source]
        );
        
        
    
        // const userMyRef = React.useRef({});
        
    return  fields ? (
        <SimpleFormIteratorContext.Provider value={context}>    {/*  https://mui.com/material-ui/react-table/#custom-pagination-actions */}
            <table  style={{ margin: '0', padding: '0', width: '100%' }} >
            {/* <Root sx={sx} */}
            {/* <Root sx={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch',}}
                className={clsx(
                    className,
                    fullWidth && 'fullwidth',
                    disabled && 'disabled'
                )}
            > */}
                <thead  style={{width: '100%' }}>
                    <FlexboxContainer component='tr' sxCSS={{ //display: 'flex', 
                        flexDirection: isXSmall ? 'column' : 'row',
                        bgcolor: 'primary.900', borderRadius: 1, pt: 0.6,   
                    }}
                    > 
                        <BorderLinebox sxCSS={{ order: -1 }} /> 
                        {tableHeader}
                        <BorderLinebox  sxCSS={{ order: 3 }} />
                    </FlexboxContainer>
                </thead>
                <tbody  style={{   display: 'inline-flex', width: '100%' }}  >  
        {/* <Box
            sx={ sxTableBody }
            > */}
                <FlexboxContainer component='tr' sxCSS={{  
                        display: 'flex', 
                        flexFlow: 'column nowrap',
                        bgcolor: 'transparent', borderRadius: 1, //...sxTableBody  
                        ...sxTableBody  
                    }}
                    > 
                    {fields.map((member, index) => {
                        return(
                        <>
                        <Box sx={{ mt: 1, bgcolor:  'background.paper', borderRadius: 2, boxShadow: 1 }}>
                            <LabelOptionCard label={ 
                                <span> {`${index +1 }. `}
                                {translate('myroot.form.mobile.salesItemTitle')}
                                </span>} 
                            >
                            <SalesFormIteratorRowV5
                                sx={ itemSx } setValue={setValue}
                                wraperSectionItem={wraperSectionItem}
                                sxItemRow={ sxItemRow }
                                sxItemContent={ sxItemContent }
                                sxInputContent={ sxInputContent }
                                sxSumPriceBox={ sxSumPriceBox }
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
                                entryPriceIsGross={entryPriceIsGross}
                            >
                                {children} 
                            
                            </SalesFormIteratorRowV5>
                        </LabelOptionCard>
                                            </Box>

                    </>
                    )}
                )}
                </FlexboxContainer>
                </tbody>
                <JoyDivider light sx={{ p: "2px", my: 2, mr: 5, bgcolor: 'primary.900'}} />
            <tfoot style={{ 
                // border: "8px pink solid", display: 'flex', color: 'black',  backgroundColor: 'orange', 
                width: '100%'}}>  
                {!disabled && !(disableAdd && (disableClear || disableRemove)) && (
                    <Box
                    sx={{ display: 'flex',  
                    bgcolor: 'transparent', 
                    borderRadius: 1, flexDirection: 'column' }}
                    >

                    <tr style={{ marginTop: '-42px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}
                        className={SalesFormIteratorClasses.buttons}
                        >  
                        <td/>
                            {!disableAdd && ( 
                            <td>
                                <div style={{ margin: 'auto' }}>
                                    {cloneElement(addButton, {
                                        className: clsx(
                                            '-button-add',
                                            `button-add-${source}`
                                        ),
                                        onClick: handleAddButtonClick(
                                            addButton.props.onClick
                                        ),
                                    })}
                                </div>
                                </td>
                            )}
                                <td>
                                    {fields.length > 0 && !disableClear && !disableRemove && (
                                        <div style={{ margin: 'auto', padding: 0 }} // className={SalesFormIteratorClasses.clear}
                                        >
                                            <Confirm
                                                isOpen={confirmIsOpen}
                                                title={translate('ra.action.clear_array_input')}
                                                content={translate('ra.message.clear_array_input')}
                                                onConfirm={handleArrayClear}
                                                onClose={() => setConfirmIsOpen(false)}
                                            />
                                            <ClearArrayButton color="error" sx={{ mt: 0.7, mr: 1  }}
                                                onClick={() => setConfirmIsOpen(true)}
                                            />
                                        </div>
                                    )}
                                </td>
                            </tr>
                        </Box>
                )}
                </tfoot>
            {/* </Root> */}
            </table>
            {/* </TableContainerIterator>
            </TableContainer> */}
        </SimpleFormIteratorContext.Provider>
    ) : null  
});
// };

SalesFormIteratorV5.defaultProps = {
    disableAdd: false,
    disableRemove: false,
    disableReordering: true
};


const Root = styled('div', {
        name: SalesFormIteratorPrefix,
    overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
    // '& > ul': {
    //     padding: 0,
    //     marginTop: 0,
    //     marginBottom: 0,
    //     width: '100%',
    // },
    // '& > ul > li:last-child': {
    //     // hide the last separator
    //     borderBottom: 'none',
    // },
    [`& .${SalesFormIteratorClasses.line}`]: {
        display: 'flex',
        listStyleType: 'none',
        borderBottom: `solid 1px ${theme.palette.divider}`,
        [theme.breakpoints.down('sm')]: { display: 'block' },
    },
    [`& .${SalesFormIteratorClasses.index}`]: {
        display: 'flex',
        alignItems: 'top',
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        [theme.breakpoints.down('md')]: { display: 'none' },
    },
    [`& .${SalesFormIteratorClasses.form}`]: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
    },
    [`&.fullwidth > ul > li > .${SalesFormIteratorClasses.form}`]: {
        flex: 2,
    },
    [`& .${SalesFormIteratorClasses.inline}`]: {
        flexDirection: 'row',
        columnGap: '1em',
        flexWrap: 'wrap',
    },
    [`& .${SalesFormIteratorClasses.action}`]: {
        marginTop: theme.spacing(0.5),
        visibility: 'hidden',
        '@media(hover:none)': {
            visibility: 'visible',
        },
    },
    [`& .${SalesFormIteratorClasses.buttons}`]: {
        display: 'flex',
    },
    [`& .${SalesFormIteratorClasses.add}`]: {
        borderBottom: 'none',
    },
    [`& .${SalesFormIteratorClasses.clear}`]: {
        borderBottom: 'none',
    },
    [`& .${SalesFormIteratorClasses.line}:hover > .${SalesFormIteratorClasses.action}`]: {
        visibility: 'visible',
    },
}));