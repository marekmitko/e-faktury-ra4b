import * as React from "react";
import { Card, Stack, Grid } from '@mui/material';
import { useTranslate } from "react-admin";
import PaymantSwitch from "./subcomponent/PaymantSwitch";
import PaymentChannelSwitcher from "./subcomponent/PaymentChannelSwitcher";
import SendInvoiceCheckbox from "./subcomponent/SendInvoiceCheckbox";
import { useFormContext } from 'react-hook-form';

export default function InvoiceAdditionalCheckbox() {
    const { register } = useFormContext();
    // const [members, setMembers] = React.useState([false, true, false]);
    // const toggleMember = (index) => (event) => {
    //         const newMembers = [...members];
    //     newMembers[index] = event.target.checked;
    //     setMembers(newMembers);
    // };

    // // console.log("members", ....members);
    // console.log("members", members[1]);
    const translate = useTranslate();

    return (
        <Grid item xs={12} sm={9}>
            <PaymentChannelSwitcher register={register} />
            
                 
                    {/* </RadioGroup> */}
            {/* </Sheet> */}
        </Grid>
    );
}


// <Sheet
// variant="neutral"
// sx={{
//     bgcolor: "background.body",
//     borderRadius: "sm",
//     // width: 360,
//     maxWidth: "100%",
//     display: "flex"
// }}
// >
// <Box role="group" aria-labelledby="member">
//     <List
//         sx={{
//                 minWidth: 360,
//                 "--List-gap": "0.5rem",
//                 "--List-item-paddingY": "1rem",
//                 "--List-item-radius": "8px",
//                 "--List-decorator-size": "32px",

//                 [`& .${checkboxClasses.root}`]: {
//                     mr: "auto",
//                     flexGrow: 1,
//                     alignItems: "center",
//                     flexDirection: "row-reverse",
//                     gap: 1.5
//                 }
//         }}
//     >
//         {[translate('myroot.form.label.checkbox.payment_invoice'), translate('myroot.form.label.checkbox.send_invoice'),].map((item, index) => (
//                 <ListItem
//                     variant="outlined"
//                     key={item}
//                     sx={{
//                         boxShadow: "sm",
//                         bgcolor: "background.body"
//                     }}
//                     // sx={{ boxShadow: "sm", bgcolor: "blue" }}
//                     {...(members[1] && {
//                         variant: "soft",
//                                 color: "primary"
//                     })}
//                 >
//                     <ListItemDecorator>
//                         {[<PaymentIcon />, <Apartment />][index]}
//                     </ListItemDecorator>
//                     <PaymantSwitch value={item} label={item} />

//                     {/* <Sheet variant="outlined" sx={{ bgcolor: "background.body" }}> */}

//                     <Checkbox
//                         overlay
//                         // Force the outline to appear in the demo. Usually, you don't need this in your project.
//                         slotProps={{
//                             action: ({ checked }) => ({
//                                     sx: (theme) => ({
//                                         ...(members[1] && {
//                                             inset: -1,
//                                             border: "2px solid",
//                                             borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
//                                             bgcolor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.05)`
//                                             // backgroundColor: theme.vars.palette.primary[500]
//                                         })
//                                     })
//                             })
//                         }}
//                         // slotProps={
//                         //      {
//                         //           // action: { className: checkboxClasses.focusVisible }
//                         //      }
//                         // }
//                         label={
//                             <React.Fragment>
//                                     POST &nbsp; MAIL{" "}
//                                     {members[1] && (
//                                         <Typography
//                                             aria-hidden="true"
//                                             sx={{
//                                                 display: "block",
//                                                 fontSize: "sm",
//                                                 color: "neutral.500"
//                                             }}
//                                         >
//                                             mail
//                                         </Typography>
//                                     )}
//                             </React.Fragment>
//                         }
//                         checked={members[1]}
//                         onChange={toggleMember(1)}
//                         sx={{ color: "inherit" }}
//                     />
//                     {/* </Sheet> */}
//                 </ListItem>
//         ))}
//     </List>
// </Box>
// </Sheet>
