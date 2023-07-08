import React from 'react';
import {
  Datagrid,
  EmailField,
  List,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
  CloneButton,
} from 'react-admin';
import { useStyles } from '@mui/material';
import { DownloadActionButton } from './call-action-buttons/DownloadActionButton';
import { CancelActionButton } from './call-action-buttons/CancelActionButton';
import { ArchiveActionButton } from './call-action-buttons/ArchiveActionButton';
import { SpecialSubmitActionButton } from './call-action-buttons/SpecialSubmitActionButton';
import ArchiveIcon from '@mui/icons-material/Archive';
import { Box, Stack } from '@mui/joy';


const toolbar = {
    // alignItems: 'center',
    // float: 'right',
    // width: '160px',
    // marginTop: -1,
    // marginBottom: -1,
};

const ArchiveButton = props => {
  const transform = data => ({
    ...data,
    archived: true
  });

  return <CloneButton {...props} transform={transform} />;
}


export const RowActionToolbar = (props) => {

    return (
        <Box lable="option" sx={toolbar} >
            {/* <DeleteButton basePath={props.basePath} label="" record={props.record} className={classes.icon_action_button}/> */}
            <DownloadActionButton   sx={{ 
                backgroundColor: 'transparent', color: 'primary.900', 
                borderRadius: '50px', 
                padding: 0,
                margin: -0.25,
                '&:hover': {
                        // backgroundColor: 'rgba(38, 198, 218, 0.99)',
                        backgroundColor: 'primary.900',
                        color: '#fff'
                    },
            }} 
            />
            <CancelActionButton sx={{ backgroundColor: 'transparent', color: 'primary.900' }}/>
            {/* <td>   <PrintActionButton />  </td> */}
            {/* <ArchiveActionButton /> */}
            {/* <td>  <IncreaseLikeActionButton />  </td> */}
            <SpecialSubmitActionButton sx={{ backgroundColor: 'transparent', color: 'primary.900' }} />
        </Box>
    );
};
