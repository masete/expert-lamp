import { Outlet } from 'react-router-dom'
import './index.scss';
import Sidebar from '../Sidebar';

const Layout = () => {
    return (<div>
                <Sidebar />
           </div>
           )
}

export default Layout