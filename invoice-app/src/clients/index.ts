import IconList from '@mui/icons-material/SupervisorAccount';
import IconCreate from '@mui/icons-material/PersonAdd';
import IconBuyer from '@mui/icons-material/ShoppingCart';
import { PreClientCreate } from './OnePreClientCreate';



// import VisitorList from './VisitorList';
import ClientCreate from './ClientCreate';
// import VisitorEdit from './VisitorEdit';

const resource = {
    list: { },
    create: PreClientCreate,
    // edit: VisitorEdit,
    icon: IconList,
    iconCreate: IconCreate,
};

export { IconList, IconCreate, ClientCreate, IconBuyer  };


export default resource;