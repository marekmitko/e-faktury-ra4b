import { Controller } from "react-hook-form";
import ControlInput from "./ControlInput.ksx";
// import "./styles.css";
import MuiInput from "@mui/material/Input";

export function MyOptionalControlledComponent({ name, control, onChange }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <ControlInput
                    type="number"
                    onChange={onChange || field.onChange}
                />
            )}
        />
    );
}

export default function MyFormControlledComponent() {
    return (
        <div className="App">
            <h1>My optional controlledComponent</h1>
            <MyOptionalControlledComponent
                name="tatoForm"
                onChange={(event) => console.log(event.target.value)}
            />
        </div>
    );
}
