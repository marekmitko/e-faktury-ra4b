import * as React from 'react';
import  {  cloneElement,
    useCallback,
    useMemo,
    useState, } from "react";
import "./styleTableFormIterator.css";
import { data, data2 } from "../table-form-iterator/dataTableFormIterator";
import { EfaRemoveItemButton } from "../../../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/subcomponent/button/RemoveItemButton";
import { AddItemRowButton } from "../subcomponent/button/AddItemRowButton";
import { ReOrderButtons, SimpleFormIteratorContext } from "react-admin";
import useProductFormIterator from "../logic/useProductFormField";
import { TableFormIteratorItem2 } from "./TableFormIteratorItem";
// import ResponsiveTable from "../table-form/ResposiveTable";
import { useFormContext } from "react-hook-form";
import { TabFormIteratorItemRow } from "./TableFormIteratorItem";

const required = () => (value) => (
    value
        ? undefined
        : 'myroot.validation.required'
);
const data_table = data;
const nameSalesIteratorForm = 'products';



export const TabFormIterator = React.forwardRef((props, ref ) => {
   

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

    const { records, record, fields, translate,  removeField, addField, move, replace 
    } = useProductFormIterator(props);
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
       

        console.log("!!1️⃣fields", fields);

    return fields ? (
            <SimpleFormIteratorContext.Provider value={context}>  
                {/* <ResponsiveTable columns={data2.columns} data={data2.data} /> */}
                <div class="sales__table container">
                    <table class="sales__table ">
                    <thead>
                        <tr>
                        {data_table.fields
                            .filter(item => item.show)
                            .map(item => <th>{item.description}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {/* {data_table.fields.map((item, index) => {
          return (
            <tr key={index}>
              <td data-th="First name">{item.first_name}</td>
              <td data-th="Last name">{item.last_name}</td>
              <td data-th="E-mail">{item.email}</td>
              <td data-th="Company">{item.company}</td>
              <td data-th="IP Address">{item.ip_address}</td>
              <td data-th="Country">{item.country_code}</td>
            </tr>
          );
        })}      */}

                        {/* {data_table.items.map((item, index) => { */}
                        {/* {fields.map((item, index) => {
                            console.log("🟢Field", fields);
                          <div>  
                        return ( */}
                    <div>
                        {/* // .filter(field => field.show)
                            {data_table.items
                                .map(field => {
                                        return(
                                    <td data-th={"fds"}>{'item[field.id]'}</td>
                                    )}
                            )} */}

                        </div>
                             {fields.map((member, index) => {
                                console.log("memeber", member);
                                console.log("🟢Field", fields);
                        return(
                        <>
                                <tr key={index}   >
                                <TabFormIteratorItemRow
                                    // sx={ itemSx } 
                                    setValue={setValue}
                                    // wraperSectionItem={wraperSectionItem}
                                    // sxItemRow={ sxItemRow }
                                    // sxItemContent={ sxItemContent }
                                    // sxInputContent={ sxInputContent }
                                    // sxSumPriceBox={ sxSumPriceBox }
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
                                    // entryPriceIsGross={entryPriceIsGross} 
                                > 
                                    {children} 
                                </TabFormIteratorItemRow>
                            </tr>
                                {/* <td data-th={field.description}>{item[field.id]}</td> */}
                                </>
                            )}
                            )}
                        {/* <TableFormIteratorRow /> */}
                    </tbody>
                    </table>
                </div>
            </SimpleFormIteratorContext.Provider>
    ) : null;
});


