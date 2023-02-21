    import * as React from "react";
    import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
    import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
    import Typography from "@mui/joy/Typography";
    import Box from "@mui/joy/Box";
    import AspectRatio from "@mui/joy/AspectRatio";
    import IconButton from "@mui/joy/IconButton";


    export const TitleCardShow = ({title, icon}) => (
    <>
    <Box sx={{ display: "flex", alignItems: "center", pt: 1, mb: -3, pb: 1}}>
  

    {/* <IconButton 
            size="md"
            variant="solid"
            color="primary"
            aria-label="Like minimal photography"
            sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                left: 0,
                top: 0,
                transform: "translateY(30%)",
                borderBottomRightRadius: "15%"
            }}
                // sx={{
                // position: "relative",
                // "&:before": {
                //     content: '""',
                //     position: "absolute",
                //     top: 0,
                //     left: 0,
                //     bottom: 0,
                //     right: 0,
                //     m: "-2px",
                // },
                // borderRadius: "50%",
                //     left: 0,
                //     bottom: 0,
                //     transform: "translateY(-15%)",
                //     borderBottomRightRadius: "15%"
                // }}
            >
                {icon? icon : ""}
            </IconButton> */}
            <Box
                sx={{
                display: "flex",
                alignItems: "left",
                mt: 0,
                pt: 0,
                pb: 1, 
                ml: 7,
                mb: 1 
                }}
            >
                <Typography
                level="h5"
                // color="primary"
                bgColor="primary"
                sx={{ ml: 0 }}
                >
                {title}
                </Typography>
            </Box>


    </Box>
        </>
    );  