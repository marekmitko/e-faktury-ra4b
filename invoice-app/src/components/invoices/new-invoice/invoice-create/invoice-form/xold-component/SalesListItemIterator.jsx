import React from 'react';
import { ArrayInput, NumberInput, SimpleFormIterator, TextInput } from "react-admin";



const MyInputTextRef = (props) => {
    const textRef = React.useRef();
    const [valueMyRef, seValueMyRef] = React.useState(0);
    const showRefContent = () => {
        // console.log("myREF", textRef.current.value);
    };
    // const {source} = props;
    return(
        <span>

        <TextInput source="dasds" inputRef={textRef} onChange={e => seValueMyRef(textRef.current.value) } />
        {/* <input type="text" value={valueMyRef} /> */}
        <button onClick={showRefContent}>Click {valueMyRef}</button>
      
        </span>
    );
};



export default function SalesListItemIterator(){
    return(
        // <ArrayInput source="sales_list" >
            <SimpleFormIterator inline disableReordering>
                <MyInputTextRef source="myfrea" />
                <TextInput source="item_name" resettable helperText={false}/>
                <TextInput source="sale_type" resettable helperText={false}/>
                <NumberInput source="item_qty" resettable helperText={false}/>
                <NumberInput source="net_price" resettable helperText={false}/>
                <NumberInput source="tax_value" resettable helperText={false}/>
                <NumberInput source="net_amount" resettable helperText={false}/>
                <NumberInput source="gross_amount" resettable helperText={false}/>
            </SimpleFormIterator>
        // </ArrayInput>
    );
}