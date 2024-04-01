import * as React from "react";
import { useRef, useState } from "react";
import {
    Container,
    GlobalStyles,
    TableContainer,
    TableFooter,
    TablePagination,
    TableCell,
    useMediaQuery,
    Grid,
} from "@mui/material";

import {
    MQ_isMinimal,
    MQ_isSmall,
    MQ_isMedium,
    MQ_isXSmall,
    MQ_isLarge,
} from "../../efa-invoice-form/components/new-sales-table/components/sales-form-iterator/useSalesFormIteratorStyles";
import JoyBox from "@mui/joy/Box";
import { Box, Card, Divider } from "@mui/joy";
import { lineLayout } from "../../efa-invoice-form/components/mobile/spanning-sales-table/mobile-form-iterator/styledLineLayout";
import {
    BorderLinebox,
    FlexboxContainer,
    FullwidthWraper,
    InnerLinebox,
} from "../../efa-invoice-form/components/layout/RowLineLayout";
import SwitchNetOrGross from "../../efa-invoice-form/components/new-sales-table/components/sales-table-header/components/SwitchNetOrGross";
import { AdditionalBoxV2 } from "../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/AdditionalBox V2";
import OptionCard from "../../invoice-form/subcomponents/sales-table/joy-sales-table/joy-optionbox/OptionCard";
import { useFormContext } from "react-hook-form";
import AdditionalSendOptionBox from "../../efa-invoice-form/components/additional-sending-options/AdditionalSendOptionBox";
import LabelOptionCard from "../../efa-invoice-form/components/additional-sending-options/subcomponents/LabelOptionCard";
import PaymentMethodRadioGroup from "../../efa-invoice-form/components/additional-sending-options/subcomponents/payment-method-item/PaymentMethodRadioGroup";
import {
    DateInput,
    NumberInput,
    ReferenceInput,
    useTranslate,
} from "react-admin";
import CardSubcaption from "../../efa-invoice-form/components/additional-sending-options/subcomponents/payment-method-item/components/CardSubcaption";
import CardSubcaptionV2 from "../../efa-invoice-form/components/additional-sending-options/subcomponents/payment-method-item/components/CardSubcaptionV2";
import resource from "../../../../../../clients";
import CardSubcaptionField from "../../efa-invoice-form/components/additional-sending-options/subcomponents/payment-method-item/components/CardSubcaptionField";
import { G_Path } from "../../../../../../constant";

export const AdditionalTableV5 = (props) => {
    const { register, control, getValues, setValue } = useFormContext();
    const translate = useTranslate();
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra-large: 1536px

    // const isMinimal = useMediaQuery(`${MQ_isMinimal}`);
    // const isXSmall = useMediaQuery(`${MQ_isXSmall}`);
    // const isSmall = useMediaQuery(`${MQ_isSmall}`);
    // const isMedium = useMediaQuery(`${MQ_isMedium}`);
    // const isLarge = useMediaQuery(`${MQ_isLarge}`);
    const is650px = useMediaQuery("(max-width:650px)");

    return (
        <>
            <TableContainer className="tableContainer" sx={{ width: "100%" }}>
                <FullwidthWraper // bgcolor: isLarge ? 'background.paper' : 'transparent',    // borderRadius: 1, flexDirection: 'column'
                >
                    <FlexboxContainer
                        component="tr"
                        sxCSS={{
                            //display: 'flex',
                            // flexDirection: isXSmall ? 'column' : 'row',
                            bgcolor: "transparent",
                            borderRadius: 1, //sxItemRow
                        }}
                    >
                        <InnerLinebox sxCSS={{ order: 1 }}>
                            <div style={{ width: "100%" }}>
                                <JoyBox
                                    sx={{
                                        // boxShadow: 'none',
                                        bgcolor: "transparent",
                                        flexGrow: 1,
                                        boxShadow: "none",
                                        display: "flex",
                                        m: 1, //BUG <- to było przez to ale dlaczego tak się dzieje to nie wiem
                                        //ToDo - Edu - sprawdzic - bo było tylko my bez mx
                                        mx: 0.5,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div style={{ width: "100%" }}>
                                        <JoyBox
                                            sx={{
                                                display: "flex",
                                                gap: "10px",
                                                flexDirection: {
                                                    xs: "column",
                                                    sm: is650px
                                                        ? "column"
                                                        : "row",
                                                    md: "row",
                                                },
                                                //flexWrap: "wrap",
                                            }}
                                        >
                                            <JoyBox
                                                sx={{
                                                    // display: "flex",
                                                    // alignItems: "stretch",
                                                    // maxHeight: "164.41px",
                                                    flex: is650px
                                                        ? ""
                                                        : "1 160px",
                                                    maxWidth: {
                                                        md: "35%",
                                                        lg: "25%",
                                                    },
                                                    minWidth: {
                                                        xs: "200px",
                                                        sm: "220px",
                                                        md: "220px",
                                                        lg: "220px",
                                                    },
                                                }}
                                            >
                                                {/* <JoyNoteboxV2 sxCSS={{   order: { xs: 1, sm: 1, md: -1, lg: -1 } , boxShadow: 1 }} /> */}
                                                <LabelOptionCard
                                                    label={translate(
                                                        "myroot.form.label.header.payment_channel"
                                                    )}
                                                >
                                                    <PaymentMethodRadioGroup
                                                        register={register}
                                                    />
                                                    <Box //sx={{ transform: 'scale(0.9)', }}
                                                    >
                                                        {/* <ReferenceInput
                                                            label={false}
                                                            source="user_id"
                                                            reference={
                                                                G_Path.profile
                                                                    .admin
                                                            }
                                                        > */}
                                                        <CardSubcaptionField
                                                            watchName="user_noBank"
                                                            show="user_noBank"
                                                            label={
                                                                "resources.e_faktury.create.label.account_number"
                                                            }
                                                        />
                                                        {/* </ReferenceInput> */}
                                                        {/* <CardSubcaption
                                                            name="date_payment"
                                                            label={
                                                                "resources.e_faktury.create.label.payment_method_date"
                                                            }
                                                        /> */}
                                                        {/* <DateInput
                                                            source="date_submit"
                                                            label={false}
                                                            size="small"
                                                            textHelper={false}
                                                        /> */}
                                                        {/* <CardSubcaptionV2 /> */}
                                                    </Box>
                                                </LabelOptionCard>
                                            </JoyBox>
                                            <JoyBox
                                                sx={{
                                                    flex: is650px
                                                        ? ""
                                                        : "1 250px",
                                                    maxWidth: {
                                                        md: "50%",
                                                        lg: "30%",
                                                    },
                                                    minWidth: {
                                                        xs: "200px",
                                                        sm: "200px",
                                                        md: "200px",
                                                        lg: "200px",
                                                    },
                                                }}
                                            >
                                                <LabelOptionCard
                                                    label={translate(
                                                        "myroot.form.label.header.send_invoice"
                                                    )}
                                                >
                                                    <AdditionalSendOptionBox
                                                        control={control}
                                                        register={register}
                                                        setValue={setValue}
                                                    />
                                                </LabelOptionCard>
                                            </JoyBox>
                                        </JoyBox>
                                    </div>
                                </JoyBox>
                            </div>
                        </InnerLinebox>
                    </FlexboxContainer>
                </FullwidthWraper>
            </TableContainer>
        </>
    );
};
