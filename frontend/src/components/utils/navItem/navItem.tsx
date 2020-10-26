import React from 'react'
import navItemModel from '../../../models/navItemModel'
import './navItem.css'
import {Link} from 'react-router-dom'

function NavItem(props: navItemModel) {

    return (
        <Link className="link" to={props.href}>
            <i className={`fa fa-${props.icon}`}></i>
            {props.title}
        </Link>
    )
}

export default NavItem