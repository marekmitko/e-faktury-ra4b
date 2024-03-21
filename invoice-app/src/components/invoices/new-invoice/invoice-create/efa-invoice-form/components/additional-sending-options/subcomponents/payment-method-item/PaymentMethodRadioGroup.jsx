import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { useTranslate } from "react-admin";
import Apartment from "@mui/icons-material/Apartment";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payments";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import OrientationSwitch from "./components/OrientationSwitch";
import { CardOverflow, Chip, Grid } from "@mui/joy";
import { Controller, useWatch } from "react-hook-form";
import PaymentDueDateField from "./components/PaymentDueDateField";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import WalletIcon from "@mui/icons-material/Wallet";

const PaymentIconTransfer = () => {
    const paymentWatch = useWatch({ name: "payment_form" });
    if (paymentWatch === "transfer")
        return (
            <AddCardIcon
                sx={{
                    color: "rgba(var(--mui-palette-primary-mainChannel) / 1)",
                }}
            />
        );
    return <CreditCardIcon />;
};
const PaymentIconCash = () => {
    const paymentWatch = useWatch({ name: "payment_form" });
    if (paymentWatch === "cash")
        return (
            <PaymentsIcon
                sx={{
                    color: "rgba(var(--mui-palette-primary-mainChannel) / 1)",
                }}
            />
        );
    return <WalletIcon />;
};

export default function PaymentMethodRadioGroup({ register }) {
    // const [orientation, setOrientation] = React.useState("vertical");

    const [form, setForm] = React.useState({ payment_form: "" });

    const translate = useTranslate();
    const { onChange, onBlur, name, ref } = register("payment_form");

    let color_cash = false;
    let color_transfer = false;
    if (form.payment_form === "cash" && form.payment_form !== null)
        color_cash = true;
    if (form.payment_form === "transfer" && form.payment_form !== null)
        color_transfer = true;
    //toDO Added Default Values to PaymentMethod
    return (
        <Box sx={{ minWidth: 160, pb: -1 }}>
            {/* <OrientationSwitch orientation={orientation} setOrientation={setOrientation} /> */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            ></Box>
            <RadioGroup
                aria-labelledby="example-payment-channel-label"
                overlay
                name="example-payment-channel"
                defaultValue="Paypal"
            >
                <List
                    component="div"
                    variant="solid"
                    // orientation={orientation}
                    orientation={{
                        xs: "horizontal",
                        sm: "horizontal",
                        md: "vertical",
                    }}
                    // orientation={"horizontal"}
                    row={form}
                    sx={{
                        mb: -0.5,
                        // orientation: {xs: 'horizontal', sm: 'horizontal', md: 'vertical'},
                        borderRadius: "sm",
                        boxShadow: "sm",
                        bgcolor: "background.body",
                        border: "none",
                        justifyContent: "space-between",
                    }}
                >
                    {[
                        {
                            id: "transfer",
                            value: "transfer",
                            label: translate(
                                "myroot.form.label.checkbox.transfer"
                            ),
                        },
                        {
                            id: "cash",
                            value: "cash",
                            label: translate("myroot.form.label.checkbox.cash"),
                        },
                    ].map((item, index) => {
                        return (
                            <ListItem
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    //  width: 'fr',
                                    borderRadius: "sm",
                                    m: 0,
                                    py: 0,
                                    pt: 0,
                                    mt: -1,
                                    mb: index === 1 ? -1 : "",
                                }}
                            >
                                <React.Fragment key={item.id}>
                                    {/* {index !== 0 && <ListDivider />} */}
                                    <Radio
                                        color="primary" //color="neutral"
                                        sx={{
                                            display: "flex",
                                            ml: 0,
                                            mr: "auto",
                                        }}
                                        // size="sm"
                                        variant="outlined"
                                        id={item.id}
                                        value={item.value}
                                        label={item.label}
                                        {...register("payment_form")}
                                    />
                                </React.Fragment>
                                <ListItemDecorator
                                    ExamplePaymentChannels
                                    sx={
                                        {
                                            // p: 1
                                        }
                                    }
                                >
                                    <Typography
                                        color="neutral"
                                        //color={checked ? "primary" : "neutral"}
                                        sx={{
                                            ml: "auto",
                                            mb: -0.5,
                                            pb: 0,
                                            alignItems: "flex-end",
                                        }}

                                        // sx={cssIcon}
                                    >
                                        {/* {item.value ? {iconChecked} : defaultIcon} */}
                                        {
                                            [
                                                <PaymentIconTransfer />,
                                                <PaymentIconCash />,
                                            ][index]
                                        }
                                    </Typography>
                                </ListItemDecorator>
                            </ListItem>
                        );
                    })}
                </List>
            </RadioGroup>
        </Box>
    );
}
