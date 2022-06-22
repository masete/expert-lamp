import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => { 
    return(
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={LogoS} alt="logo"/>
                <img className="sub-logo" src={LogoSubtitle} alt="sub-logo"/>
            </Link>

            <nav>
                <NavLink exact="True" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d"/>
                </NavLink>

                <NavLink exact="True" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d"/>
                </NavLink>
                
                <NavLink exact="True" activeclassname="active" className="contact-list" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d"/>
                </NavLink>
            </nav>
        </div>
)
}
export default Sidebar