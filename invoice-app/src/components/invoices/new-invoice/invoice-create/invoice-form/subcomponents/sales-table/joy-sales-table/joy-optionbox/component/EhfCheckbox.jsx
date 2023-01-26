import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Person from "@mui/icons-material/Person";
import People from "@mui/icons-material/People";
import Apartment from "@mui/icons-material/Apartment";
import Checkbox, { checkboxClasses } from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import InvoiceEHFPersonalIcon from "@mui/icons-material/ContactPageRounded";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InvoiceEHFRounded from "@mui/icons-material/SummarizeRounded";
import InvoiceEHFOutlined from "@mui/icons-material/SummarizeOutlined";
import IssuedTextInput from "./IssuedTextInput";
import Chip from "@mui/joy/Chip";
import NumberInvoiceIcon from "@mui/icons-material/Pin";
import TextFieldDecorator from "./subcomponent/TextFieldDecorator";

export default function EhfCheckbox() {
    const [members, setMembers] = React.useState([false, true, false]);
    const toggleMember = (index) => (event) => {
        const newMembers = [...members];
        newMembers[index] = event.target.checked;
        setMembers(newMembers);
    };

    // console.log("members", ....members);
    console.log("members", members[1]);

    return (
        <>
            <Sheet
                    variant="neutral"
                    sx={{
                        p: 2,
                        bgcolor: "background.body",
                        borderRadius: "sm",
                        width: 660,
                        maxWidth: "100%"
                    }}
            >
                    <Box role="group" aria-labelledby="member">
                        <List
                            sx={{
                                minWidth: 560,
                                "--List-gap": "0.5rem",
                                "--List-item-paddingY": "1rem",
                                "--List-item-radius": "8px",
                                "--List-decorator-size": "32px",

                                [`& .${checkboxClasses.root}`]: {
                                        mr: "auto",
                                        flexGrow: 1,
                                        alignItems: "center",
                                        flexDirection: "row-reverse",
                                        gap: 1.5
                                }
                            }}
                        >
                            {/* {["Send", "Team", "Enterprise"].map((item, index) => ( */}
                            {["Faktura EHF"].map((item, index) => (
                                <ListItem
                                        variant="outlined"
                                        key={item}
                                        sx={{
                                            boxShadow: "sm",
                                            bgcolor: "background.body"
                                        }}
                                        // sx={{ boxShadow: "sm", bgcolor: "blue" }}
                                        {...(members[1] && {
                                            variant: "soft",
                                            color: "primary"
                                        })}
                                >
                                        <ListItemDecorator>
                                            {
                                                [
                                                    <InvoiceEHFOutlined />
                                                    // <InvoiceEHFRounded />
                                                    // <People />,
                                                    // <Apartment />
                                                ][index]
                                            }
                                        </ListItemDecorator>
                                        {/* <Radio
                                            overlay
                                            value={item}
                                            label={item}
                                            sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
                                            slotProps={{
                                                action: ({ checked }) => ({
                                                    sx: (theme) => ({
                                                            ...(checked && {
                                                                inset: -1,
                                                                border: "2px solid",
                                                                borderColor: theme.vars.palette.primary[500]
                                                            })
                                                    })
                                                })
                                            }}
                                        /> */}
                                        {/* <Sheet variant="outlined" sx={{ bgcolor: "background.body" }}> */}

                                        <Checkbox
                                            overlay
                                            // Force the outline to appear in the demo. Usually, you don't need this in your project.
                                            slotProps={{
                                                action: ({ checked }) => ({
                                                    sx: (theme) => ({
                                                            ...(members[1] && {
                                                                inset: -1,
                                                                border: "2px solid",
                                                                borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`
                                                                // bgcolor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`
                                                                // backgroundColor: theme.vars.palette.primary[500]
                                                            })
                                                    })
                                                })
                                            }}
                                            // slotProps={
                                            //      {
                                            //           // action: { className: checkboxClasses.focusVisible }
                                            //      }
                                            // }
                                            label={
                                                <React.Fragment>
                                                    {/* Adeline O&apos;Reilly{" "} */}
                                                    Faktura EHF
                                                    {members[1] && (
                                                            <Typography
                                                                aria-hidden="true"
                                                                sx={{
                                                                    // display: "block",
                                                                    fontSize: "sm",
                                                                    color: "neutral.500"
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        display: "inline-block",
                                                                        ml: 1
                                                                        // mr: ,
                                                                        // alignText: "right",
                                                                        // gap: 1
                                                                        // alignItems: "center"
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
                    mt: '-10',
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
                                                    )}
                                                </React.Fragment>
                                            }
                                            checked={members[1]}
                                            onChange={toggleMember(1)}
                                            sx={{ color: "inherit" }}
                                        />
                                        {/* </Sheet> */}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
            </Sheet>
        </>
    );
}
