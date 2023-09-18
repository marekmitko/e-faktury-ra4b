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
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PurringOffIcon from '@mui/icons-material/NotificationsOff';

import ArchiveIcon from '@mui/icons-material/Archive';
import { makeStyles } from '@mui/material';
import { Button, IconButton, Tooltip } from '@mui/joy';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { get } from 'lodash';

// *edu Standard - chyba najlepszy przykład z nowej dokumentacji
        // https://marmelab.com/react-admin/useDataProvider.html  
        //toDo Czy dokładamy dodatkowe metody w dataProvider? Tak jw.


const PurringDisabledOption = () => (
        <Tooltip
        title={ "Faktura opłacona, nie można wystawić purringu."  // translate("myroot.custom_ra.action.tooltip.editAndView")  
        }
        size="sm"
        arrow
        color="neutral"
        placement="right"
        variant="outlined"
        sx={{ color: 'neutral.900'}}
    >
        <PurringOffIcon sx={{ color: 'neutral.200' }} />
    </Tooltip>
);
const PurringInactivOption = () => (
        <Tooltip
        title={ "Nie przekroczono terminu płatności"  // translate("myroot.custom_ra.action.tooltip.editAndView")  
        }
        size="sm"
        arrow
        color="neutral"
        placement="right"
        variant="outlined"
        sx={{ color: 'neutral.900'}}
    >
        <PurringOffIcon sx={{ color: 'primary.200' }} />
    </Tooltip>
);



export const  PurringItemButton = ({executed, inactiv, ...props}) => {
    const [sendEmailLoading, setSendEmailLoading] = useState(false);
    const record = useRecordContext(props); //Om? chyba nie wiem co robie, czy ten props tu jest konieczny?

    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    const translate = useTranslate();
    // console.log('record.date_payment', record.date_payment);
    // console.log('date ===>record.date_payment', new Date(record.date_payment).getDate());
    // console.log('date ===>record.date_payment', new Date(record.date_payment).getDay());
    // console.log('date', new Date());
    //nie odnaleziono recordu
    if(!record) return null;
    // omówić to if($row->paid > 0){		
            // $row->potential_purring = -1;	
    if(record.paid > 0) return (<PurringDisabledOption />);
    if(record.potential_purring > 0) return (<PurringDisabledOption />);
    if((+new Date().getFullYear <= +new Date(record.date_payment).getFullYear) && 
    (+new Date().getMonth <= +new Date(record.date_payment).getMonth) &&
    ((+new Date().getDate <= +new Date(record.date_payment).getDate))) return (<PurringDisabledOption />);

    // to =>    // aktualizacjaw  czasie rzeczywistym https://marmelab.com/react-admin/useGetOne.html#live-updates
    // albo
    // syntax -> to https://marmelab.com/react-admin/useUpdate.html
        // const [update, { data, isLoading, error }] = useUpdate(
        //     resource,
        //     { id, data, previousData },
        //     options
        // );

        console.log("recordpurring", record.potential_purring);

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
        // if(+(record.potential_purring) undefined) return <span>{"null"}</span>;
        if(record.potential_purring === 2 )  return(  
            <Tooltip
            title={ "Wystawiono purring (ponaglenie do zapłaty)..."  // translate("myroot.custom_ra.action.tooltip.editAndView")  
            }
            size="sm"
            arrow
            color="neutral"
            placement="right"
            variant="outlined"
            sx={{ color: 'neutral.900'}}
        >


        <IconButton
            sx={{ 
                "--IconButton-size": "30px",
                backgroundColor: 'transparent', color: 'gold', 
                // borderRadius: '25px', 
                padding: 0,
                '&:hover': {
                        // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                        backgroundColor: 'gold',
                        color: '#fff'
                    },
            }} 
            >
                <NotificationsActiveIcon />
            </IconButton>
            </Tooltip>
            );


        // if(new Date(record.date_paid).toLocaleDateString()  > new Date().toLocaleDateString()) return(  
        if(record.potential_purring === -1 ) 
        return(  

            <Tooltip
            title={ "Faktura opłacona. Nie   można  wystawić purringu"  // translate("myroot.custom_ra.action.tooltip.editAndView")  
            }
            size="sm"
            arrow
            color="neutral"
            placement="right"
            variant="outlined"
            sx={{ color: 'neutral.900'}}
        >

        <IconButton //disabled
        color="neutral"
            sx={{ 
                "--IconButton-size": "30px",
                backgroundColor: 'transparent', color: 'neutral.400', 
                // borderRadius: '25px', 
                padding: 0,
                '&:hover': {
                        // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                        // backgroundColor: 'gold',
                        color: '#fff'
                    },
            }} 
            >
                {/* <NotificationsOffIcon /> */}
            </IconButton>
            
            </Tooltip>
            );





        return (
        
       
        <span   onClick={(event) => { 
            event.stopPropagation();
            console.log("Archive Clicked", record);
        sendEmail(record.id) }}>
            {
            !record.publish &&(
            !sendEmailLoading ? (
                // translate('resources.notifications.buttons.send')
                <Tooltip
            title={ "Wystaw purring (ponaglenie do zapłaty) Nie minęło 14 dni od terminu płatności, nie zostanie... na fakturze. Opłata doliczona zgodnie z ustawą wynosi: 65 NOK"  // translate("myroot.custom_ra.action.tooltip.editAndView")  
            }
            size="sm"
            arrow
            placement="right"
            variant="outlined"
            sx={{ color: 'primary.900'}}
        >

                <IconButton
                sx={{ 
                    "--IconButton-size": "30px",
                    backgroundColor: 'transparent', color: 'primary.900', 
                    // borderRadius: '25px', 
                    padding: 0,
                    '&:hover': {
                            // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                            backgroundColor: 'primary.900',
                            color: '#fff'
                        },
                }} 
                >
                    <NotificationAddIcon />
                </IconButton>
                </Tooltip>
            ) : (
                <IconButton
                sx={{ 
                    "--IconButton-size": "30px",
                    backgroundColor: 'transparent', color: 'primary.900', 
                    // borderRadius: '25px', 
                    padding: 0,
                    '&:hover': {
                            // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                            backgroundColor: 'transparent',
                            color: 'primary.900'
                        },
                }} 
                >
                    <CircularProgress size={15} thickness={3} />
                </IconButton>
            )
            )
        }
      </span>
     )
}