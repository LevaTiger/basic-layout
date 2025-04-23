import { Link, NavLink } from "react-router";
import './header.css'
import { useState } from "react";
const Header=()=>{

    const [menuVisible, setMenuVisible] = useState(false);

    return(
        <div className="header-content">
            <div className="logo">
                <h2>Bognár Levente Sablon oldala</h2>
            </div>
            <div className="hamburger" onClick={()=> setMenuVisible(!menuVisible)}>
                {`${!menuVisible? '☰' : 'X'}`}
            </div>
            <nav className={menuVisible? "open" : ""}>
                <ul>
                    <li>
                        <NavLink to={'/'} 
                            className={({ isActive }) => (isActive ? 'active' : '')}>Főoldal
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={'/webshop'} className={({ isActive }) => (isActive ? 'active' : '')}>Webshop</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/form'} className={({ isActive }) => (isActive ? 'active' : '')}>Form</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={'/kosar'} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag active" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;