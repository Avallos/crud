import React from 'react'
import Avatar from '../../../assets/images/avatar.jpg'
import './Card.css'
import UserModel from '../../../models/UserModel'
function Card (props: UserModel) {

    return (
        <div className="card m-3">
            <img className="card-img-top" src={Avatar} alt="Imagem de capa do card"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.email}</p>
            </div>
        </div>

    )
}

export default Card