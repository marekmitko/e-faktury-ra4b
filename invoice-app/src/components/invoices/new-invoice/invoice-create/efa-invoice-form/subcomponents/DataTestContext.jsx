import { useForm, FormProvider, useFormContext, useFormState } from "react-hook-form";

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151
export const DataTestContext = () => {
    const myMethods = useFormContext();
    const myState = useFormState();
    return (<>
        <input {...myMethods.register("TestSTContext")} />;
        <input style={{ padding: "25px", backgroundColor: "#40E0D0" }} value="db TEST" type="button" onClick={ () => console.log(myMethods.getValues())} />
        <input value="state" type="button" onClick={ () => console.log(myState.getValues())} />
    </>)
};
