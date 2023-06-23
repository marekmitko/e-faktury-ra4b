import * as React from 'react'; //Om? wyjaśnić czy tak jak jest czy jednak => 
import { useState } from 'react';
import {                   
    Datagrid,
    EmailField,
    List,
    TextField,
    ShowButton,
    EditButton,
    DeleteButton,
    CloneButton,
    useRecordContext,
    useDataProvider,
    useTranslate,
    useNotify,
    useRefresh
} from 'react-admin';   
import CircularProgress from '@mui/material/CircularProgress';

import ArchiveIcon from '@mui/icons-material/Archive';
import { makeStyles } from '@mui/material';
import { Button } from '@mui/joy';


// *edu Standard - chyba najlepszy przykład z nowej dokumentacji
        // https://marmelab.com/react-admin/useDataProvider.html  
        //toDo Czy dokładamy dodatkowe metody w dataProvider? Tak jw.



export const  ArchiveActionButton = (props) => {
    const [sendEmailLoading, setSendEmailLoading] = useState(false);
    const record = useRecordContext(props); //Om? chyba nie wiem co robie, czy ten props tu jest konieczny?

    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();

    const translate = useTranslate();

    // to =>    // aktualizacjaw  czasie rzeczywistym https://marmelab.com/react-admin/useGetOne.html#live-updates
    // albo
    // syntax -> to https://marmelab.com/react-admin/useUpdate.html
        // const [update, { data, isLoading, error }] = useUpdate(
        //     resource,
        //     { id, data, previousData },
        //     options
        // );


    const sendEmail = (id) => {
        setSendEmailLoading(true)
     
        dataProvider.sendEmail(                       // Om? czy powinienem to zapakować do useEffect? 
            "notifications", { id: id })              //tak jak tutaj:   https://marmelab.com/react-admin/useDataProvider.html
            .then(({ data }) => {
            console.log("Archive Clicked", data);
            if (data && data.status == "success")
                notify('Email send success', { type: 'success' });
            setSendEmailLoading(false);
            refresh();
            });
        };
        return (
        <Button color='primary' size="small" onClick={() => { 
            console.log("Archive Clicked", record);
        sendEmail(record.id) }}>
            {
            !record.publish &&(
            !sendEmailLoading ? (
                translate('resources.notifications.buttons.send')
            ) : (
                <CircularProgress size={25} thickness={2} />
            )
            )
        }
      </Button>
     )
     }