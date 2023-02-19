import {useRef, useState }  from "react";
import JoyDivider from "@mui/joy/Divider";
import JoyInput from "@mui/joy/Input";
import JoySelect from "@mui/joy/Select";
import JoyOption from "@mui/joy/Option";

    export default function NEWSelectOrInputText() {
    const [currency, setCurrency] = useState("");
    const textRef = useRef();
    const showRefContent = () => {
        console.log(textRef.current.value);
    };



    const [selectValue, setSelectValue] = useState("");
    const selectRef =  useRef();
  
    const handleChange = (selectValue) => {
      setSelectValue(selectValue);
    };
    const onClick = () => {
      if (selectRef.current) {
        selectRef.current.focus();
      }
    };




    return (
        <>
        <button onClick={onClick}>Will open select</button>
        {/* <JoyInput
            placeholder="Nazwa produktu "
            // endDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
            value={currency}
            onClick={(_, value) => setCurrency(value)}
            startDecorator={
            <> */}
                <JoySelect
                // openMenuOnFocus={true}
                ref={selectRef}
                // value={() => {
                //     "0";
                // }}
                class="MYSELEC"
                variant="plain"
                onChange={(_, value) => setCurrency(value)}
                sx={{
                    mr: 2,
                    ml: 2,
                    p: 0,
                //     pr: 4,
                //     "&:hover": { bgcolor: "transparent" },
                    width: 20
                }}
                >
                    <JoyOption value="Råd/råd">1fdsfdsfds</JoyOption>
                    <JoyOption value="Maleri">2sdfdsf</JoyOption>
                    <JoyOption value="Bilreparasjon">3</JoyOption>
                </JoySelect>
                <JoyDivider orientation="vertical" />
                </>
); }

