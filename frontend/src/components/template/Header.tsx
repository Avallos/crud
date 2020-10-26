import React from 'react'
import './Header.css'
import headerModel from '../../models/headerModel'

function Header(props: headerModel) {

    return( 
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i>
            {props.title} 
        </h1>
        <p className="lead text-muted">{props.sub}</p>
    </header>
    )

}

export default Header