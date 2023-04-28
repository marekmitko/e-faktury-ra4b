import * as React from 'react';
import {
    Children,
    cloneElement,
    MouseEvent,
    MouseEventHandler,
    ReactElement,
    ReactNode,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react';









// https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/input/ArrayInput/SimpleFormIterator.tsx


// {fields.length > 0 && !disableClear && !disableRemove && (
//     <div className={SimpleFormIteratorClasses.clear}>
//         <Confirm
//             isOpen={confirmIsOpen}
//             title={translate(
//                 'ra.action.clear_array_input'
//             )}
//             content={translate(
//                 'ra.message.clear_array_input'
//             )}
//             onConfirm={handleArrayClear}
//             onClose={() => setConfirmIsOpen(false)}
//         />
//         <ClearArrayButton
//             onClick={() => setConfirmIsOpen(true)}
//         />
//     </div>
// )}


// {
//     addButton?: ReactElement;
//     children?: ReactNode;
//     className?: string;
// }