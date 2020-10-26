import React, {Component} from 'react'
import Main from '../template/Main'
import './AccessCard.css'
import Card from '../utils/card/Card'
import axios from 'axios'
import UserModel from '../../models/UserModel'

const baseUrl = 'http://localhost:3001/users'
let listUsers:UserModel[] = []



export default class AccessCard extends Component {

    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state = {listUsers}
    }

    componentWillMount() {

        axios.get<UserModel[]>(baseUrl).then(resp => {
            listUsers = resp.data
            this.setState({listUsers})
        })
    }

    createCards () {
        
        return listUsers.map(user => {
            return (
                <Card id={user.id} name={user.name} email={user.email}></Card>
            )
        })
    }

    
    
    render() {
    
        return (
           <Main icon="ticket" title="Cartões" sub="Cartões de Funcionarios">
                <div className="cards">
                    {this.createCards()}
                </div>
           </Main>
        )
    }


}



