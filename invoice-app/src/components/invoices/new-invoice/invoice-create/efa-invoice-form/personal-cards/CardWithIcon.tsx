import * as React from 'react';
import { FC, createElement } from 'react';
import { Card, Box, Typography, Divider } from '@mui/material';
import { Link, To } from 'react-router-dom';
import { ReactNode } from 'react';
import SellerIcon from "@mui/icons-material/Store";
import AddModeratorIcon from '@mui/icons-material/AddModerator';

// import cartouche from './cartouche.png';
// import cartoucheDark from './cartoucheDark.png';

interface Props {
    icon: FC<any>;
    to: To;
    title?: string;
    companyName?: string;
    companyId?: string | number;
    children?: ReactNode;
}











const CardWithIcon = ({ icon, title, companyId, to, children, companyName }: Props) => (
    <Card
        sx={{
            minHeight: 52,
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
            },
        }}
    >
        <Link to={to}>
            <Box
                sx={{
                    overflow: 'inherit',
                    padding: '16px',
                    background: theme =>
                        `url(${
                            theme.palette.mode === 'dark'
                                // ? cartoucheDark
                                // : cartouche
                                ? AddModeratorIcon : AddModeratorIcon
                        }) no-repeat`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '& .icon': {
                        color: theme =>
                            theme.palette.mode === 'dark'
                                ? 'inherit'
                                : 'primary.900',
                    },
                }}
            >
                <Box display="flex" >
                    <Box width="3em" className="icon">
                        {createElement(icon, { fontSize: 'large' })}
                    </Box>
                    <Box textAlign="left">
                        <Typography variant="h5" component="h2">
                            {title || ' '}
                        </Typography>
                    </Box>
                </Box>
                <Box textAlign="right">
                    <Typography color="textSecondary">{companyId}</Typography>
                    <Typography variant="h5" component="h2">
                        {companyName || ' '}
                    </Typography>
                </Box>
            </Box>
        </Link>
        {children && <Divider />}
        {children}
    </Card>
);

export default CardWithIcon;