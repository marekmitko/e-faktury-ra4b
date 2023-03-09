import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import JoyInput from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";
import { ableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { PriceField } from "./PriceField";

//<FormControl id="Id" required size="md" color="primary">
//<FormLabel sx={{ ml: 0, mr: "auto" }}>
export const ShowItemSumCost = ({children}) => (
  <>
    <Stack direction="row" alignItems="center" spacing={0.5} gap={4}>
      {/* <Stack direction="column" alignItems="center" gap={0.5}>
        <td>
          <PriceField  title={<br />} currency={"Suma: "} />
        </td>
      </Stack> */}
      <Stack direction="column" alignItems="center" gap={0.5}>
        {/* <td style={{ padding: "0 20px" }}> */}
                {children ? children: ""}
      </Stack>
       
    </Stack>
  </>
);
//</FormLabel>
// {/* <FormHelperText>Help!</FormHelperText> */}
//</FormControl>
