import { Box } from "@mui/joy"


export const FullwidthWraper = ({children, sxCSS, className, ...props}) => {
    return(
    <Box {...props} component='section' className={`${className? className: ''} fullwidthWraper`}sx={{   
        width: "100%",
        backgroundColor: 'transparent',
        p: 0, m: 0, //mx: "5px",  mt: 'auto', mb: "auto"
        ...sxCSS,
        }}  >
        {children} 
    </Box>
    );
};
export const FlexboxContainer = ({children, sxCSS, className, ...props}) => {
    return(
    <Box {...props} className={`${className? className: ''} flexboxContainer trLinecontainer`} sx={{   
        display: 'flex', 
        p: 0, m: 0, //mx: "5px",  mt: 'auto', mb: "auto"
        ...sxCSS,
        }} >
        {children} 
    </Box>
    );
};
export const BorderLinebox = ({children, sxCSS, className, ...props}) => {
    return(
    <Box {...props} component='td' className={`${className? className: ''} borderLinebox tdLinebox`} sx={{ 
        flex: '0 0 auto', // none         // display: { xs: 'none', md: 'block'},
        width: {sx: '5px', sm: '20px', md: '50px' }, // maxWidth: '20px',
        // border: '2px solid #00FFFF',
        p: 0, m: 0, //mx: "5px",  mt: 'auto', mb: "auto"
        ...sxCSS,
        }}  >
        {children} 
    </Box>
    );
};
export const InnerLinebox = ({children, sxCSS, className, ...props}) => {
    return(
    <Box  {...props} component='td' className={`${className? className: ''} innerLinebox tdLinebox`} sx={{  
        flex: '1 1 auto', // auto
        // backgroundColor: '#a0f0D0',
        p: 0, m: 0, //mx: "5px",  mt: 'auto', mb: "auto"
        ...sxCSS,
        }}  >
        {children}
    </Box>
    );
};









/**
 * 
    #initial
    Element jest dobierany zgodnie z jego width właściwościami height. Kurczy się do minimalnego rozmiaru, 
    aby zmieścić się w pojemniku, ale nie rośnie, aby wchłonąć dodatkową wolną przestrzeń w elastycznym pojemniku. 
    Jest to równoważne ustawieniu „ flex: 0 1 auto”.

    #auto
    Przedmiot jest dobierany zgodnie z jego width właściwościami height, ale rośnie, 
    aby wchłonąć dodatkową wolną przestrzeń w elastycznym pojemniku i kurczy się do minimalnego rozmiaru, aby zmieścił się w pojemniku. 
    Jest to równoważne ustawieniu „ flex: 1 1 auto”.

    #none
    Element jest dobierany zgodnie z jego width właściwościami height. 
    Jest w pełni sztywny: nie kurczy się ani nie rośnie w stosunku do elastycznego pojemnika. 
    Jest to równoważne ustawieniu „ flex: 0 0 auto”.
*/