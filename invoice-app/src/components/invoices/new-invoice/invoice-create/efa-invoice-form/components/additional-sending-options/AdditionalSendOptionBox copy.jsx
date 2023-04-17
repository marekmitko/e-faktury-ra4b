import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import PictureInPictureAltOutlinedIcon from "@mui/icons-material/PictureInPictureAltOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SendEhfCheckbox  from "./subcomponents/SendEhfCheckbox";
import OptionSendItem from "./subcomponents/OptionSendItem";
import FocusTrap from "@mui/base/FocusTrap";
import { Input, Stack } from "@mui/joy";
import EhfDetailsTrapModal from "./subcomponents/EhfDetailsTrapModal";



export default function AdditionalSendOptionBox() {
    const [status, setStatus] = React.useState({
        postmail: false,
        inv_email: false,
        ehf: false
    });
    console.log("status", status);
    return (
        <List sx={{ p: 0 }}>
            <ListItem   sx={{ my: 0, borderRadius: "sm", alignItems: "flex-end" }} >
                <OptionSendItem  cssIcon={{ ml: "auto", mb: -0.5, pb: 0, alignItems: "flex-end" }}
                    label="Wysłać pocztą" checked={status.postmail}  
                    onChange={(event) => setStatus({ ...status, postmail: event.target.checked })  }
                    defaultIcon={<PictureInPictureAltOutlinedIcon />}  iconChecked={<MarkunreadMailboxOutlinedIcon />} 
                />
            </ListItem>
            <ListItem sx={{ borderRadius: "sm" }}>
                <OptionSendItem  cssIcon={{ ml: "auto", mb: 0, pb: 0, mt: -0.5 }}
                    label="Wysłać na adres email" checked={status.inv_email}
                    onChange={ (event) => setStatus({ ...status, inv_email: event.target.checked }) }
                    defaultIcon={ <MailOutlineIcon /> }  iconChecked={<ForwardToInboxOutlinedIcon />} 
                />
            </ListItem>
            <ListItem sx={{ borderRadius: "sm",  alignItems: "flex-start" }}>
                <OptionSendItem  cssIcon={{ ml: "auto",  mr: 0.25,  pb: 0,  alignItems: "center",  transform: "rotate(90deg)", mt: -1 }}
                    label="EHF Faktura" checked={status.ehf}
                    onChange={ (event) =>  setStatus({ ...status, ehf: event.target.checked }) }
                    defaultIcon={ <AnalyticsOutlinedIcon /> }  iconChecked={<AddchartOutlinedIcon />} 
                />
            </ListItem>   
            <FocusTrap open={status.ehf} disableRestoreFocus disableAutoFocus>
                <>
                    {(status.ehf) && (
                        <ListItem sx={{ borderRadius: "sm", alignItems: "flex-start" , mt: -1 }}    >
                            <Stack alignItems="left" sx={{ p: 0  }}>
                            <div>
                                <label>
                                Wystawca: <input type="text" />
                                </label>
                                <label>
                                Nabywca: <input type="text" />
                                </label>
                                <label>
                                {" "}
                                <Input size="sm" />
                                Numer: <input type="text" />
                                </label>
                            </div>
                        </Stack>
                    </ListItem>   
                    )}
                </>
            </FocusTrap>
            {/* <ListItem sx={{ borderRadius: "sm", alignItems: "flex-start" }}>

                <SendEhfCheckbox
                label="EHF Faktura"
                open={status.ehf}
                checked={status.ehf}
                onChange={(event) =>
                    setStatus({ ...status, ehf: event.target.checked })
                }
                />
                <Typography
                color={status?.ehf ? "primary" : "neutral"}
                sx={{
                    ml: "auto",
                    mr: 0.25,
                    pb: 0,
                    alignItems: "center",
                    transform: "rotate(90deg)",
                    mt: -1
                }}
                >
                {status?.ehf ? (
                    <AddchartOutlinedIcon />
                    ) : (
                        <AnalyticsOutlinedIcon />
                        )}
                </Typography>
            </ListItem>  */}
        </List>
    );
}
