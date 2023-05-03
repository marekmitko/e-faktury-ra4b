import { Box  } from "@mui/joy";
import Chip from '@mui/joy/Chip'






export const ItemIndexChip = ({cssBox, index}) => (
    <Box sx={cssBox}>
        <Chip   //sx={{ }}
            // startDecorator={index}
            // endDecorator={<ChipDelete />}
            // color="neutral"
            variant="solid"
            sx={{  
                bgcolor: 'neutral.100', 
                color: 'primary.900',
                "--Chip-paddingInline": "7px",
                "--Chip-gap": "15px",
                "--Chip-radius": "25px",
                "--Chip-minHeight": "20px",
                "--Chip-decoratorChildHeight": "25px"
            }}
        >
        {index}
        </Chip>
    </Box>
);