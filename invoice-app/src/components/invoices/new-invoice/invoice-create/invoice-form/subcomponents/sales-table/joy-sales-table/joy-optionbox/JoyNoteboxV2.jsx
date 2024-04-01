import * as React from "react";
import { useTranslate } from "react-admin";
import { Card, Stack, Grid, Paper } from "@mui/material";
import JoyTypography from "@mui/joy/Typography";
import JoyTextarea from "@mui/joy/Textarea";
import { useFormContext } from "react-hook-form";
import { CardOverflow } from "@mui/joy";
import Divider from "@mui/material/Divider";

// TODO Added props sx + spacing
{
    /* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{   border: '1px dashed grey' }}> */
}

// *see <NewInvoiceHeader />
export const JoyNoteboxV2 = (props) => {
    const { sxCSS } = props;
    const { register } = useFormContext();
    const translate = useTranslate();
    // const { onChange, onBlur, name, ref } = register('comments');
    return (
        <Card
            sx={{
                p: 0,
                m: 0,
                borderRadius: "20px",
                height: "100%",
                // boxShadow:
                //     "0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)",
                ...sxCSS,
            }}
            variant="solid"
        >
            <CardOverflow
                variant="soft"
                sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1,
                    px: "var(--Card-padding)",
                    bgcolor: "var(--mui-palette-background-level1, #fafafa)",
                }}
            >
                <JoyTypography
                    textColor="neutral.700"
                    level="body2"
                    fontWeight="400"
                    sx={{ px: 1 }}
                >
                    {translate("myroot.form.label.header.additional_note")}
                </JoyTypography>
            </CardOverflow>
            <Divider />
            <JoyTextarea
                placeholder={translate(
                    "myroot.form.placeholder.notebox_invoice"
                )}
                minRows={3}
                color="text.level3"
                sx={{
                    p: 1,
                    pb: 0,
                    m: 0,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    backgroundColor: "backgrund.paper",
                    color: "neutral.600",
                }}
                {...register("comments")}
            />
        </Card>
        // </Grid>
    );
};

export default JoyNoteboxV2;
