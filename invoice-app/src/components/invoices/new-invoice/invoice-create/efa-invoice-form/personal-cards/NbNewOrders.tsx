import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';
import HeaderCardWithIcon from './HeaderCardWithIcon';

interface Props {
    value?: number;
}

const NbNewOrders = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <HeaderCardWithIcon >

        <CardWithIcon
            to="/commands"
            icon={ShoppingCartIcon}
            title={translate('myroot.form.label.header.buyer')}
            companyId={'125'}
            companyName={'meetco.dev'}
            // companyName={'meetco.dev'}
            />
            </HeaderCardWithIcon>
    );
};

export default NbNewOrders;