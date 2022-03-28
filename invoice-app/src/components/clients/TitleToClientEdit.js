import * as React from "react";
import { useRecordContext } from "react-admin"


export const TitleToClientEdit = () => {
    const record = useRecordContext();

    return(
        <span>
            edit:   < strong> <i>{record ? `${record.company}`:'' } </i></strong>
        </span>
    );
}