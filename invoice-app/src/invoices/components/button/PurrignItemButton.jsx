import * as React from 'react'; //Om? wyjaśnić czy tak jak jest czy jednak => 
import { useState } from 'react';
import {
    useRecordContext,
    useDataProvider,
    useTranslate,
    useNotify,
    useRefresh,
    useResourceContext,
    UpdateButton,
    DateInput
} from 'react-admin';   
import CircularProgress from '@mui/material/CircularProgress';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PurringOffIcon from '@mui/icons-material/NotificationsOff';

import ArchiveIcon from '@mui/icons-material/Archive';
import { TextField, makeStyles } from '@mui/material';
import { Button, IconButton, Tooltip } from '@mui/joy';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { get } from 'lodash';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PurringOptionsButton from './subcomponents/PurringOptionsButton';
// import { PurringOptionsButton } from './subcomponents/PurringOptionsButton';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import { UpdateActionButton } from './subcomponents/UpdateActionButton';


// *edu Standard - chyba najlepszy przykład z nowej dokumentacji
        // https://marmelab.com/react-admin/useDataProvider.html  
        //toDo Czy dokładamy dodatkowe metody w dataProvider? Tak jw.





const iconPurringDisabled = (
    <PurringOptionsButton placement="right" arrow size="sm"
        tooltip="list.tooltip.item.purring_disabled" 
        icon={ <AttachMoneyOutlinedIcon color="neutral"sx={{ color: 'success.solidHoverBg', opacity: 0.25  }} />}
        variant="outlined" sx={{ color: 'success.solidHoverBg' }}
        sxSvg={{ display: 'block', margin: '0 auto', }}
    />);

const iconPurringIsInactive  = (
    <PurringOptionsButton placement="right" arrow size="sm"
        tooltip="list.tooltip.item.purring_is_inactive" 
        icon={ <NotificationsOffIcon color="neutral" sx={{ color: 'neutral.200' }} />}
        variant="outlined" sx={{ color: 'neutral.900'}}
        sxSvg={{ display: 'block', margin: '0 auto', }}
    />);

const iconPurringIsActive  = (
    <PurringOptionsButton placement="right" arrow size="sm"
        tooltip="list.tooltip.item.purring_is_active" 
        icon={ <NotificationAddIcon  sx={{ color: 'primary.900' }} />}
        variant="outlined" sx={{ color: 'neutral.900'}}
        sxSvg={{ display: 'block', margin: '0 auto', }}
    />);

const iconSendingPaidPurring  = (
    <PurringOptionsButton placement="right" arrow size="sm"
        tooltip="list.tooltip.item.sending_paid_purring" 
        icon={ <NotificationAddOutlinedIcon  sx={{ color: 'primary.900' }} />}
        variant="outlined" sx={{ color: 'neutral.900'}}
        sxSvg={{ display: 'block', margin: '0 auto', }}
    />);

const iconSendingFreePurring  = (
    <PurringOptionsButton placement="right" arrow size="sm"
        tooltip="list.tooltip.item.sending_free_purring" 
        icon={ <NotificationAddIcon  sx={{ color: 'primary.900' }} />}
        variant="outlined" sx={{ color: 'neutral.900'}}
        sxSvg={{ display: 'block', margin: '0 auto', }}
    />);

const iconPurringIssued  = (
    <PurringOptionsButton placement="right" arrow size="sm"
        tooltip="list.tooltip.item.purring_issued" 
        icon={ <NotificationsActiveIcon  sx={{ color: 'gold' }} />}
        variant="outlined" sx={{ color: 'neutral.900'}}
        sxSvg={{ display: 'block', margin: '0 auto', }}
    />);






export const  PurringItemButton = ({executed, inactiv, ...props}) => {
    // const [sendEmailLoading, setSendEmailLoading] = useState(false);
    const record = useRecordContext(props); //*edu chyba nie wiem co robie, czy ten props tu jest konieczny?

    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();

    if(!record) return null;
    
// Om? Co w sytuacji gdy purring był wystawiony, ale teraz faktura jest opłacona? Dajemy Jakieś info?
    if(record.paid > 0)  return (iconPurringDisabled);
// Om? Czy ponaglenie można wystawić kilka razy? Bo jest np. purring_nr: 6
    if(record.purring_nr !== "0" ) 
        return (iconPurringIssued);
    
// Om? Sprawdzić czy te warunki są poprawne
    const dateCurrent = new Date(); 
    const datePayment = new Date(record.date_payment);
    const datePaymentAdd14Day = new Date(datePayment.getTime() + (14 * 24 * 3600 * 1000)); 

    const paymentYear = datePayment.getFullYear();
    const paymentMonth = datePayment.getMonth();
    const paymentDay = datePayment.getDate();

    // if((dateCurrent.getFullYear() >= paymentYear) && (dateCurrent.getMonth() >= paymentMonth) && (dateCurrent.getDate() >= paymentDay) ) {
    //     if( (datePaymentAdd14Day.getFullYear() <= paymentYear ) && (datePaymentAdd14Day.getMonth() <= paymentMonth ) && (datePaymentAdd14Day.getDate() <= paymentDay)) {
    //     } else return (iconSendingPaidPurring);
    // }
    if((dateCurrent.getFullYear() >= paymentYear) && (dateCurrent.getMonth() >= paymentMonth) && (dateCurrent.getDate() >= paymentDay) ) {
        return ((datePaymentAdd14Day.getFullYear() >= paymentYear ) && (datePaymentAdd14Day.getMonth() >= paymentMonth ) && (datePaymentAdd14Day.getDate() >= paymentDay)) ?  
            <UpdateActionButton icon={iconSendingFreePurring} sx={{ display: 'block', margin: '0 auto', }}
                confirmTitle="list.confirm.item.free_purring_issued_title"
                confirmContent="list.confirm.item.free_purring_issued_content"
                confirmContentElement={<TextField   />}
                // data={{ ...record, paid: 'DZIAŁA'}} 
                data={{ ...record, purring_nr: 0 }} 
            />
            : 
            <UpdateActionButton icon={iconSendingPaidPurring}  sx={{ display: 'block', margin: '0 auto', }}
                confirmTitle="list.confirm.item.paid_purring_issued_title"
                confirmContent="list.confirm.item.paid_purring_issued_content"
                confirmContentElement={<TextField   />}
                // data={{ ...record, paid: 'DZIAŁA'}} 
                data={{ ...record, purring_nr: 0 }} 
            />;
    };

    //Om? Jakie warunki?    
    return iconPurringIsInactive;

};







