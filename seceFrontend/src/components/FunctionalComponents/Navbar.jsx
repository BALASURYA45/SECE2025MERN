import { Link } from 'react-router-dom'
import { useState } from 'react'

import '../../css/Navbar.css'
import '../../css/signUp.css'
const Navbar = ({ onLogout }) => {

    var [dropdown, showDropdown] = useState(false)
    var [memodropdown, setMemoDropdown] = useState(false);
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown);
    }
    const handlememoDropdown = () => {
        setMemoDropdown(memodropdown => !memodropdown);
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
                            <li><Link to='/react-lifecycle-methods' target='_blank' className={dropdown}>reactlifecycle</Link></li>
                            <li><Link to='/useState' target='_blank' className={dropdown}>useState</Link></li>
                            <li><Link to='/useEffect' target='_blank'className={dropdown}>useEffect</Link></li>
                            <li><Link to='/use-ref' target='_blank'className={dropdown}>useRef</Link></li>
                            <li><Link to='/use-memo' target='_blank'className={dropdown}>useMemo</Link></li>
                            <li><Link to='/use-call' target='_blank'className={dropdown}>useCall</Link></li>
                            <li><Link to='/use-context' target='_blank' className={dropdown}>useContext</Link></li>
                            <li><Link to='/lazy' target='_blank' className={dropdown}>Suspense</Link></li>
                            <li><Link to="/function-class" target='_blank' className={dropdown} >FunctionInsideClass</Link></li>
                            <li><Link to="/custom-hooks2" target='_blank' className={dropdown}>UseCustomHooks2</Link></li>
                            <li><Link to='/use-effectapi' target='_blank' className={dropdown}>UseEffectAPI</Link></li>
                            <li><Link to="/useimg" target='_blank' className={dropdown}>useAPIimg</Link></li>
                            <li><Link to="/memo" target='_blank' className={dropdown}>memo</Link></li>
                        </ul>)}
                    </div>
                    
                    
                            <li><Link to='/signUp' className="link">SignUp</Link></li>
                            <li><Link to='/Login' className="link">Login</Link></li>
                            <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
                </ol>
            </nav>
        </header>)
}

export default Navbar;