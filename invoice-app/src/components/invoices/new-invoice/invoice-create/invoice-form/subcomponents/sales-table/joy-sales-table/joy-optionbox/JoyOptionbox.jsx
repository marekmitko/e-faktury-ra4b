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
import PaymentIcon from "@mui/icons-material/Payment";
import EhfCheckbox from "./component/EhfCheckbox";
import { Card, Stack, Grid } from '@mui/material';

export default function JoyOptionbox() {

    const [members, setMembers] = React.useState([false, true, false]);
    const toggleMember = (index) => (event) => {
            const newMembers = [...members];
        newMembers[index] = event.target.checked;
        setMembers(newMembers);
    };

    // console.log("members", ....members);
    console.log("members", members[1]);

    return (
        <Grid item xs={12} sm={8}>

                    <Typography
                        id="member"
                        sx={{
                            textTransform: "uppercase",
                            fontSize: "xs2",
                            letterSpacing: "lg",
                            fontWeight: "lg",
                            color: "text.secondary",
                        }}
                    >
                        OPCJE DODATKOWE 
                    </Typography>
            
                    <Sheet
                        variant="neutral"
                        sx={{
                            p: 1,
                            bgcolor: "background.body",
                            borderRadius: "sm",
                            // width: 360,
                            maxWidth: "100%",
                            display: "flex"
                        }}
                    >
                        <Box role="group" aria-labelledby="member">
                            <List
                                sx={{
                                        minWidth: 240,
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
                                {["Send", "Payments"].map((item, index) => (
                                        <ListItem
                                            variant="outlined"
                                            key={item}
                                            sx={{
                                                boxShadow: "sm",
                                                // bgcolor: "green"
                                                bgcolor: "background.body"
                                            }}
                                            // sx={{ boxShadow: "sm", bgcolor: "blue" }}
                                            {...(members[1] && {
                                                variant: "soft",
                                                        color: "primary"
                                            })}
                                        >
                                            <ListItemDecorator>
                                                {[<Apartment />, <PaymentIcon />][index]}
                                            </ListItemDecorator>
                                            <Radio
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
                                            />
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
                                                                    borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
                                                                    bgcolor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`
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
                                                            POST &nbsp; MAIL{" "}
                                                            {members[1] && (
                                                                <Typography
                                                                    aria-hidden="true"
                                                                    sx={{
                                                                        display: "block",
                                                                        fontSize: "sm",
                                                                        color: "neutral.500"
                                                                    }}
                                                                >
                                                                    mail
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
                    <EhfCheckbox />
                    </Sheet>
                    {/* </RadioGroup> */}
            {/* </Sheet> */}
        </Grid>
    );
}
