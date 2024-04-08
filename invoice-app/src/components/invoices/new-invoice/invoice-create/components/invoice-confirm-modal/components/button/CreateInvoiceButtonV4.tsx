import * as React from "react";
import JoyButton from "@mui/joy/Button";
import { IconButtonWithTooltip, useTranslate } from "react-admin";
import JoyChip from "@mui/joy/Chip";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useWatch } from "react-hook-form";
// import EditNoteIcon from '@mui/icons-material/EditNote'; //toDo zrobić akutalizację do mui-v5
//*

export const CreateInvoiceButtonV4 = (props: any) => {
    const buyer_id = useWatch({ name: "buyer_id" });
    const { onClick } = props;
    const translate = useTranslate();
    const [buttonState, setButtonState] = React.useState<{
        status: "initial" | "loading" | "failure" | "compiled";
    }>({
        status: "initial",
    });

    //     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //         event.preventDefault();
    //         setData((current) => ({ ...current, status: 'loading' }));
    //         try {
    //         // Replace timeout with real backend operation
    //         setTimeout(() => {
    //             setData({ email: '', status: 'sent' });
    //         }, 1500);
    //         } catch (error) {
    //         setData((current) => ({ ...current, status: 'failure' }));
    //         }
    //   };

    // https://codesandbox.io/s/createinvoicebutton-ip1q02?file=/demo.tsx:1716-1739

    const handleOnPrepared =
        (onClick: any) => (event: React.FormEvent<HTMLFormElement>) => {
            // event.preventDefault();
            setButtonState((current) => ({ ...current, status: "loading" }));
            try {
                // Replace timeout with real backend operation
                try {
                    setTimeout(() => {
                        setButtonState({ status: "compiled" });
                        onClick(event);
                    }, 1500);
                    // throw new Error("oops");
                    //   } catch (ex) {
                    //     console.error("inner", ex.message);
                    //     throw ex;
                } finally {
                }
                console.log("finally");
            } catch (error) {
                setButtonState((current) => ({
                    ...current,
                    status: "failure",
                }));
            }
        };

    return (
        <>
            {/* <IconButtonWithTooltip
            // label="ra.action.clear_array_input"
            size="small"
            // color="warning"
            {...props}
        > */}
            <JoyButton //toDo Add LoadingIcon - async
                disabled={buyer_id === null ? true : false}
                // disabled={loading}
                // onClick={handleConfirm}
                // className={clsx('ra-confirm', {
                //     [ConfirmClasses.confirmWarning]:
                //         confirmColor === 'warning',
                //     [ConfirmClasses.confirmPrimary]:
                //         confirmColor === 'primary',
                // })}
                autoFocus // toDo sprawdź co to robi
                startDecorator={<NoteAddOutlinedIcon />}
                variant="outlined"
                loadingPosition="start"
                // loadingIndicator="Loading…"
                loading={buttonState.status === "loading"}
                // color={props.color ? `${props.color}` : ''}
                // size="md"
                sx={{
                    pl: 1,
                    "--Button-gap": "5px",
                    lineHeight: 0.5,
                    textTransform: "uppercase",
                }}
                {...props}
                onClick={handleOnPrepared(onClick)}
            >
                {buttonState.status === "loading"
                    ? translate(
                          "myroot.custom_ra.action.button.invoicePreparation"
                      )
                    : translate("myroot.custom_ra.action.button.createInvoice")}
            </JoyButton>
            {/* </IconButtonWithTooltip> */}
        </>
    );
};

// export default null;

// export const AddItemRowButton = (props) => {
//     const { add } = useSimpleFormIterator();
//     const translate = useTranslate() ;
//     const { label } = props;
//     return (
//         <IconButtonWithTooltip
//         label={translate("myroot.custom_ra.action.tooltip.addSalesItem")}
//         size="small"
//         onClick={() => add()}
//         color="primary"
//         variant='outlined'
//         sx={{  backgroundColor: 'transparent',
//             ":hover, --focusVisible":  {   backgroundColor: 'transparent', border: 'none'     },
//         }}
//         {...props}
//         >
//             <JoyChip startDecorator={<AddCircleIcon fontSize="small" />}	>
//                 {label ? label : translate('myroot.custom_ra.action.button.addSalesItem')}
//             </JoyChip>
//         </IconButtonWithTooltip>
//     );
// };
