import * as React from "react";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";


export const ModalTitle = ({title}) => (
<>
<Box sx={{ display: "flex", alignItems: "center", pb: 1, gap: 1 }}>

<Box
            sx={{
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                m: "-2px",
                borderRadius: "50%"
              }
            }}
          >
<LibraryBooksIcon
              sx={{
                fontSize: 40,
                p: 0.5,
                // border: "2px solid",
                // color: "primary"
                color: "neutral.400"
              }}
              />
        </Box>
          <Typography level="h4" >
          {title}
          </Typography>


</Box>
    </>
); 
    // <Typography
    //     id="alert-dialog-modal-title"
    //     component="h2"
    //     startDecorator={<WarningRoundedIcon />}
    // >
    //     {title}
    // </Typography>