import * as React from "react";

import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import clsx from "clsx";
import { InputAdornment, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

// export const getEndAdornment = (resettable, clearAlwaysVisible) =>
//     (getEndAdornmentIcon = () => {
//         if (!resettable) {
//             return endAdornment;
//         } else if (!value) {
//             if (clearAlwaysVisible) {
//                 // show clear button, inactive
//                 return (
//                     <InputAdornment
//                         position="end"
//                         classes={{
//                             root: props.select ? selectAdornment : null,
//                         }}
//                     >
//                         <IconButton
//                             className={clearButton}
//                             aria-label={translate(
//                                 "ra.action.clear_input_value"
//                             )}
//                             title={translate("ra.action.clear_input_value")}
//                             disabled={true}
//                             size="large"
//                         >
//                             <ClearIcon
//                                 className={clsx(clearIcon, visibleClearIcon)}
//                             />
//                         </IconButton>
//                     </InputAdornment>
//                 );
//             } else {
//                 if (endAdornment) {
//                     return endAdornment;
//                 } else {
//                     // show spacer
//                     return (
//                         <InputAdornment
//                             position="end"
//                             classes={{
//                                 root: props.select ? selectAdornment : null,
//                             }}
//                         >
//                             <span className={clearButton}>&nbsp;</span>
//                         </InputAdornment>
//                     );
//                 }
//             }
//         } else {
//             // show clear
//             return (
//                 <InputAdornment
//                     position="end"
//                     classes={{
//                         root: props.select ? selectAdornment : null,
//                     }}
//                 >
//                     <IconButton
//                         className={clearButton}
//                         aria-label={translate("ra.action.clear_input_value")}
//                         title={translate("ra.action.clear_input_value")}
//                         onClick={handleClickClearButton}
//                         onMouseDown={handleMouseDownClearButton}
//                         disabled={disabled || readOnly}
//                         size="large"
//                     >
//                         <ClearIcon
//                             className={clsx(clearIcon, {
//                                 [visibleClearIcon]: clearAlwaysVisible || value,
//                             })}
//                         />
//                     </IconButton>
//                 </InputAdornment>
//             );
//         }
//     });
