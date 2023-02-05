import { useState, useRef, Fragment} from "react";
import JoyDivider from "@mui/joy/Divider";
import JoyInput from "@mui/joy/Input";
import JoySelect from "@mui/joy/Select";
import JoyOption from "@mui/joy/Option";



// https://codesandbox.io/s/select-field-input-combo--efa-186svs?file=/demo.js:0-1268

export default function JoyComboInputSelect() {
const [currency, setCurrency] =  useState("dollar");
const textRef =  useRef();
const showRefContent = () => {
    console.log(textRef.current.value);
};
return (
    <JoyInput
    placeholder="Amount"
    // endDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
    value={currency}
    // onChange={(_, value) => setCurrency(value)}
    startDecorator={
        < >
        <JoySelect
            // class="MYSELEC"
            variant="plain"
            value={currency}
            onChange={(_, value) => setCurrency(value)}
            sx={{
            mr: 2,
            ml: -3,
            "&:hover": { bgcolor: "transparent" },
            width: 50
            }}
        >
            <JoyOption value="Jeden"> 1</JoyOption>
            <JoyOption value="Dwa">2 </JoyOption>
            <JoyOption value="Trzy">3 </JoyOption>
        </JoySelect>
        <JoyDivider orientation="vertical" />
        </>
    }
    sx={{ width: 300 }}
    />
);
}
