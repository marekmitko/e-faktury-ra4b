import * as React from "react";
import JoyChip from "@mui/joy/Chip";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  IconButtonWithTooltip,
  useSimpleFormIterator,
  useTranslate,
} from "react-admin";
import Tooltip from "@mui/joy/Tooltip";
import { IconButton } from "@mui/joy";

export const AddItemRowButton = (props) => {
  const { add } = useSimpleFormIterator();
  const translate = useTranslate();
  const { label } = props;
  return (
    <>
      <Tooltip
        title={translate("myroot.custom_ra.action.tooltip.addSalesItem")}
        size="sm"
        arrow
        color="primary"
        placement="top"
        variant="outlined"
      >
        <IconButton
          onClick={() => add()}
          sx={{
            backgroundColor: "transparent",
            ":hover, --focusVisible": {
              backgroundColor: "transparent",
              border: "none",
            },
          }}
        >
          {/* <IconButtonWithTooltip
            label={translate("myroot.custom_ra.action.tooltip.addSalesItem")}
            size="small"
            onClick={() => add()}
            color="primary"
            variant='plain'
            sx={{  backgroundColor: 'transparent',
                ":hover, --focusVisible":  {   
                    backgroundColor: 'transparent', 
                    border: 'none'     
                },
            }}
        {...props} 
        >  */}

          <JoyChip
            startDecorator={
              <AddCircleIcon fontSize="small" sx={{ mr: -0.5 }} />
            }
            sx={{
              pl: 0.5,
              ":hover, --focusVisible": {
                backgroundColor: "primary.900",
                // backgroundColor: '#26c6da',
                border: "none",
              },
            }}
          >
            {label
              ? label
              : translate("myroot.custom_ra.action.button.addSalesItem")}
          </JoyChip>
        </IconButton>
      </Tooltip>
      {/* </IconButtonWithTooltip> */}
    </>
  );
};
