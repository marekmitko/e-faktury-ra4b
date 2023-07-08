import * as React from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { BulkUpdateButton } from 'react-admin';

const views = { views: 0 };

export const ResetViewsButton = () => (
    <BulkUpdateButton label="Reset Views" data={views} icon={<VisibilityOffIcon/>} />
);

export default ResetViewsButton;