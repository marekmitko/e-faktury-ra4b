import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Person from "@mui/icons-material/Person";
import People from "@mui/icons-material/People";
import Apartment from "@mui/icons-material/Apartment";
import JoyCheckbox, { checkboxClasses } from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import InvoiceEHFPersonalIcon from "@mui/icons-material/ContactPageRounded";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InvoiceEHFRounded from "@mui/icons-material/SummarizeRounded";
import InvoiceEHFOutlined from "@mui/icons-material/SummarizeOutlined";
import IssuedTextInput from "../IssuedTextInput";
import Chip from "@mui/joy/Chip";
import JoyListItemContent from '@mui/joy/ListItemContent';
import NumberInvoiceIcon from "@mui/icons-material/Pin";
import TextFieldDecorator from "./TextFieldDecorator";
import Close from '@mui/icons-material/Close';
import { useFormContext, Controller, useWatch, useController } from "react-hook-form";
import { useTranslate } from "react-admin";
import { FormControlLabel } from "@mui/material";







export const EfaInputBox = ({checked}) => {
    const translate = useTranslate();
    const [members, setMembers] = React.useState([false, true, false]);
    const toggleMember = (index) => (event) => {
        const newMembers = [...members];
        newMembers[index] = event.target.checked;
        setMembers(newMembers);
    };

    return( 
        <Box role="group" aria-labelledby="member">
                        <List
                            sx={{
                                minWidth: 360,
                                "--List-gap": "0.5rem",
                                "--List-item-paddingY": "1rem",
                                "--List-item-radius": "8px",
                                "--List-decorator-size": "32px",

                                [`& .${checkboxClasses.root}`]: {
                                        mr: "auto",
                                        flexGrow: 1,
                                        alignItems: "center",
                                        flexDirection: "row-reverse",
                                        gap: 0.5
                                }
                            }}
                        >
                                <ListItem
                                        variant="standard"
                                        sx={{ boxShadow: "sm", bgcolor: "aliceblue" }}
                                        {...(!checked && {
                                            variant: "soft",
                                            color: "primary"
                                        })}
                                >
                                        <ListItemDecorator>
                                            <InvoiceEHFOutlined />
                                        </ListItemDecorator>
                                        <JoyListItemContent htmlFor="ehf" component="label" >
                                            <Typography
                                                // aria-hidden="true"
                                                sx={{
                                                    display: "block",
                                                    fontSize: "sm",
                                                    color: "neutral.500"
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        ml: 1,
                                                        // mr: ,
                                                        alignContent: "flex-end",
                                                        alignItems: "center",
                                                        justifyContent: "flex-end",
                                                        mb: "-45px"
                                                    }}
                                                >
                                                    <Typography
                                                        id="example-payment-channel-label"
                                                        // level="body5"
                                                        textTransform="uppercase"
                                                        // fontWeight="xl"
                                                        sx={{ 
                                                            fontSize: "xs2",
                                                            letterSpacing: "xs",
                                                            fontWeight: "lg",
                                                            color: "text.secondary",
                                                            mt: '-10'
                                                        }}
                                                    >
                                                    {"ZAMÓWIENIE NR:"}
                                                    {/* {translate('myroot.form.label.header.send_invoice')} */}
                                                    </Typography>
                                                    <Chip
                                                        size="sm"
                                                        // variant="solid"
                                                        variant="solid"
                                                        color="primary"
                                                        startDecorator={<NumberInvoiceIcon />}
                                                    >
                                                        <b> 01/12/2022 </b>
                                                    </Chip>
                                                </Box>
                                                <br />
                                                {/* This user is your friend. */}
                                                {/* <IssuedTextInput /> */}
                                                <TextFieldDecorator />
                                            </Typography>
                                        </JoyListItemContent>
                                </ListItem>
                        </List>
                    </Box>
    );
};