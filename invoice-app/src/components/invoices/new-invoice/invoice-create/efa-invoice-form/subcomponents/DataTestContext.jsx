import { useForm, FormProvider, useFormContext, useFormState } from "react-hook-form";
import { removePrefixObjectKeys, transformArrayProducts } from '../../../../../../db/fnInvoiceForm'

// https://codesandbox.io/s/o1jmj4lwv9?file=/src/profile/ProfileEdit.js:97-151
export const DataTestContext = () => {
    const myMethods = useFormContext();
    const myState = useFormState();
    const prevDataForm = myMethods.getValues();
    const strDataForm = JSON.stringify(prevDataForm.products).replace('"_', '"Ok');
    const objStrForm =strDataForm;
    const regex = /Dog/i;
    // \b([0-9]|[1-9][0-9])\b
    // const deletePrefix = prevDataForm.replace('"_', '"Ok');
    // const myDBok = deletePrefix(prevDataForm);
    let objprevDataForm = prevDataForm ? prevDataForm.products[1] : null;
    let removePrixInObj = objprevDataForm ? removePrefixObjectKeys(objprevDataForm) : null;

    let newArraProducts = transformArrayProducts(prevDataForm.products);

    

    console.log("objprevDataForm", objprevDataForm);
    return (<>
        <input {...myMethods.register("TestSTContext")} />;
        <input style={{ padding: "25px", backgroundColor: "#40E0D0" }} value="db TEST" type="button" onClick={ () => console.log('dbPref',myMethods.getValues(), 'dbTrans', removePrixInObj, "newArr", newArraProducts)} />
        <input value="state" type="button" onClick={ () => console.log(myState.getValues())} />
    </>)
};
