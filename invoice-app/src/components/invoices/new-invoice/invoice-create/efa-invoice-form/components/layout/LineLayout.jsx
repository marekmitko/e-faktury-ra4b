import { Box } from "@mui/joy"









export const BorderLineBox = ({children, sxCSS, ...props}) => {
    return(
    <Box component='td' className="indexItem-itemRow" sx={{ ...sxCSS,
        // flex: '0 1 auto', // initial
        flex: '0 0 auto', // none
        display: { xs: 'none', md: 'block'},
        width: {sm: '20px', md: '40px' }, // maxWidth: '20px',
        backgroundColor: 'red',
        p: 0, m: 0, //mx: "5px",  mt: 'auto', mb: "auto"
        }}>
{children}

    </Box>
    );
};