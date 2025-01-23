import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../css/Navbar.css'
import '../../css/signUp.css'
const Navbar = ({ onLogout }) => {

    var [dropdown, showDropdown] = useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown);
    }

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/About' className="link">About</Link></li>
                    <li><Link to='/Gallery' className="link" >Gallery</Link></li>

                    <li><Link to='/Contact' className="link">Contact</Link></li>
                    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <span >Hooks</span>
                        {dropdown && (<ul>
                            <li><Link to='/useState' target='_blank' className={dropdown}>useState</Link></li>
                            <li><Link to='/useEffect' target='_blank'className={dropdown}>useEffect</Link></li>
                            <li><Link to='/use-ref' target='_blank'className={dropdown}>useRef</Link></li>
                            <li><Link to='/use-memo' target='_blank'className={dropdown}>useMemo</Link></li>
                            <li><Link to='/use-call' target='_blank'className={dropdown}>useCall</Link></li>
                        </ul>)}
                    </div>
                   
                    <li><Link to='/use-effectapi' className="link">UseEffectAPI</Link></li>
                    <li><Link to="/useimg" className="link">useAPIimg</Link></li>
                    <li><Link to='/signUp' className="link">SignUp</Link></li>
                    <li><Link to='/Login' className="link">Login</Link></li>
                    

                    <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
                </ol>
            </nav>
        </header>)
}

export default Navbar;