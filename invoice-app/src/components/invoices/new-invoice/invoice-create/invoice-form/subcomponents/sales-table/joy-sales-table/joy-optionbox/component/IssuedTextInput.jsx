import * as React from "react";
import Stack from "@mui/joy/Stack";
import TextField from "@mui/joy/Textarea";
import Chip from "@mui/joy/Chip";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import People from "@mui/icons-material/People";

export default function IssuedTextInput() {
  return (
    <Stack direction="column" spacing={0}>
      <TextField
        // disabled
        // variant="plain"
        color="info"
        label=" "
        placeholder="Aleksander Mariański"
        startDecorator={<PersonRoundedIcon />}
        endDecorator={
          <Chip size="sm" variant="solid" color="primary">
            Wystawca
          </Chip>
        }
      />
      <TextField
        // disabled
        // sx={{ backgroundColor: "white" }}
        placeholder="Aleksander Mariański"
        color="primary"
        variant="soft"
        label=" "
        // startDecorator={<EditIcon />}
        startDecorator={<People />}
        endDecorator={<CheckIcon />}
      />
    </Stack>
  );
}
