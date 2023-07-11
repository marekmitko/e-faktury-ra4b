import IconList from '@mui/icons-material/SupervisorAccount';
import IconCreate from '@mui/icons-material/PersonAdd';
import IconBuyer from '@mui/icons-material/ShoppingCart';
import { MinClientCreate } from './MinClientCreate';
import ClientList from './ClientList';
import { ClientCreate } from './ClientCreate';
import { ClientEdit } from './ClientEdit';
// import { ClientCreate } from './ClientCreate';


const resource = {
    list: ClientList,
    create: ClientCreate, 
    // create: MinClientCreate, 
    edit: ClientEdit,
    icon: IconList,
    iconCreate: IconCreate,
};

export { IconList, IconCreate,  IconBuyer, ClientEdit, ClientCreate, MinClientCreate, ClientList };

export default resource;