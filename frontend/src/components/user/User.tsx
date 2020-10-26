import React, {Component} from 'react'
import Main from '../template/Main'
import axios from 'axios'
import UserModel from '../../models/UserModel'
import { useForm } from 'react-hook-form'
import Form from '../utils/form/Form'


const headerProps = {
    icon: 'users',
    title: ' Usuarios',
    sub: 'Cadastro de usuariosxxxx',
}




const baseUrl = 'http://localhost:3001/users'

const user:UserModel = {
    id: 0,
    name: '',
    email: '',
}

const list:UserModel[] = []

const initialState = {
    user,
    list,
}




export default class User extends Component{
    
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.save = this.save.bind(this)
        this.clear = this.clear.bind(this)
    }

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear() {
        this.setState({user: initialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method]<UserModel>(url, user).then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({user: initialState.user, list})
        })
    }

    getUpdatedList(user:UserModel, add = true) {
        const list = this.state.list.filter(us => us.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateNameField(event: React.ChangeEvent<HTMLInputElement>){
        event.preventDefault()
        const user = {...this.state.user}
        user.name = event.target.value
        this.setState({user})
        
    }

    updateEmailField(event: React.ChangeEvent<HTMLInputElement>){
        const user = {...this.state.user}
        user.email = event.target.value
        this.setState({user})
        
    }

    renderForm() {
        const { register, handleSubmit, errors } = useForm();

        return (
            
            <div className="form">
                <form onSubmit={handleSubmit(this.save)} noValidate>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="Nome">Nome</label>
                                <input type="text" className="form-control" name="name" value={this.state.user.name}
                                onChange={e => this.updateNameField(e)} placeholder="Digite o nome..." 
                                ref={register({
                                    required: "Digite seu Nome"
                                })}/>
                                {errors.name && <span>{errors.name.message}</span>}
                            </div> 
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="text" className="form-control" name="email" value={this.state.user.email}
                                onChange={e => this.updateEmailField(e)} placeholder="Digite o email..."
                                ref={register({
                                    required: "Insira seu E-mail",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Email Inválido"
                                    },
                                })}/>
                                {errors.email && <span>{errors.email.message}</span>}
                            </div> 
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary ml-2" onClick={this.save}>Salvar</button>
                                <button className="btn btn-secondary ml-2" onClick={this.clear}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    load(user:UserModel) {
        this.setState({ user })
    }

    remove(user:UserModel) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }


    renderRows() {
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)} >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (

            <Main {...headerProps}>
                <React.Fragment>
                {this.renderTable()}
                </React.Fragment>
            </Main>
            
        )
    }

}

