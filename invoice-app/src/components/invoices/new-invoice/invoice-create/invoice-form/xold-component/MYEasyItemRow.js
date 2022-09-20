import {useRef, useState, useEffect} from "react";




export default function MYEasyItemRow() {

    
    const initialValue = 0;
    const priceItem = useRef(1);
    const qtyItem = useRef(1);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        setTotalCost(priceItem*qtyItem)
    }, [totalCost])


    // aaa nie mogę robić wyliczeń na return 
    return(
        <div>
            <h5>{"MY CUSTOM: input->calc->output display"}</h5> 
            <label for="price-item">Price:</label>
            <input name="price-item" id="price-item" ref={priceItem} type="number" onChange={() =>{
                return setTotalCost(priceItem*qtyItem);
            }}/>
            <label for="qty-item">Quantity:</label>
            <input name="qty-item" id="qty-item" ref={qtyItem} type="number" />

            <input type="button" onClick={( )=>{  console.log("clicked", priceItem.current.value)}  } value="Show calc"/>
            <h4>{totalCost}</h4>
            <div>
                {priceItem.current.value*qtyItem.current.value}
            </div>
        </div>
    );

};