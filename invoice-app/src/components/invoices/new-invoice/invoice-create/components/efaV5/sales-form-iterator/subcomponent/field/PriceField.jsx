import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import JoyInput from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";

export const PriceField = ({ title, price, currency, children }) => (
 
 <Stack direction="column" alignItems="center" gap={0.5}>
    <div>
      <Typography // textColor='success.200'
        textColor='neutral.400'
        level="body4"
        // variant="body2"
      >{title}</Typography>
      <Typography fontSize="lg" fontWeight="lg">
        {children ? children : price} {currency}
      </Typography>
    </div>
  </Stack>
);
