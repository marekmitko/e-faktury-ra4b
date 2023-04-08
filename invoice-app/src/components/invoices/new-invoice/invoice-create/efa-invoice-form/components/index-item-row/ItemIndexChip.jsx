import { Box, Chip } from "@mui/joy";






export const ItemIndexChip = ({cssBox, index}) => (
    <Box sx={cssBox}>
        <Chip variant="outlined" //sx={{ }}
            // startDecorator={index}
            // endDecorator={<ChipDelete />}
            color="neutral"
            sx={{ mb: -3.5,   
                "--Chip-paddingInline": "7px",
                "--Chip-gap": "15px",
                "--Chip-radius": "5px",
                "--Chip-minHeight": "20px",
                "--Chip-decoratorChildHeight": "25px"
            }}
        >
        {index}
        </Chip>
    </Box>
);