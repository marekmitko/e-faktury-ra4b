import * as React from "react";
import { useState, memo } from "react";
import Button from "@mui/joy/Button";
// import { TextField } from 'react-admin';
import { IconButton } from "@mui/joy";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";
import {
    useCreatePath,
    useRecordContext,
    useResourceContext,
} from "react-admin";
import clsx from "clsx";

// *edu Sprawdzić czy lepiej zdefiniować funkcję poza komponentem,
// czy może lepiej opakować ją callbackiem? Praktyka optymalizacji komponentów

const handlerCallbackAction = (event, copies) => {
    event.stopPropagation(); //*edu Doczytać o różnicy pomiędzy stopPropagation() vs preventDefault()
    alert(copies);
};

// avoids using useMemo to get a constant value for the link state

const defaultIcon = <ModeEditIcon />;

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = (e) => e.stopPropagation();

const scrollStates = {
    true: { _scrollToTop: true },
    false: {},
};

const EfaEditButton = (props) => {
    const [copies, setCopies] = useState(1);
    const {
        icon = defaultIcon,
        label = "ra.action.edit",
        scrollToTop = true,
        className,
        ...rest
    } = props;
    const resource = useResourceContext(props);
    const record = useRecordContext(props);
    const createPath = useCreatePath();
    if (!record) return null;

    return (
        <span>
            <IconButton
                // color="primary"
                sx={{
                    color: "primary.900",
                    "--IconButton-size": "30px",
                    backgroundColor: "transparent", //color: 'danger.900',
                    // borderRadius: '25px',
                    padding: 0,
                    "&:hover": {
                        // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                        // backgroundColor: 'danger.400',
                        // color: '#fff'
                    },
                }}
                // onClick={(event) => handlerCallbackAction(event, copies)}
                onClick={stopPropagation}
                component={Link}
                to={createPath({ type: "edit", resource, id: record.id })}
                state={scrollStates[String(scrollToTop)]}
                label={label}
                // className={clsx(EditButtonClasses.root, className)}
                {...rest}
                {...props}
            >
                {icon}
            </IconButton>
        </span>
    );
};

export default memo(EfaEditButton);
