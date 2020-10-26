import React from 'react'
import './Nav.css'
import NavItem from '../utils/navItem/navItem'


function Nav() {

    return (

        <aside className="menu-area">
            <nav className="menu">
                <NavItem href="/" icon="home" title=" Inicio" />
                <NavItem href="/add-user" icon="user" title=" Add Usuário" />
                <NavItem href="/users" icon="users" title=" Usuarios" />
                <NavItem href="/cards" icon="ticket" title=" Cartões" />
                
            </nav>
        </aside>

    )
}

export default Nav