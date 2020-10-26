import React from 'react'
import {useForm} from 'react-hook-form'
import UserModel from '../../../models/UserModel'
import axios from 'axios'
import swet from 'sweetalert2'

function save(user:UserModel) {

    axios.post<UserModel>('http://localhost:3001/users', user).then(resp => {
        swet.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuário Cadastrado com Sucesso',
            showConfirmButton: false,
            timer: 1000
          })
        
    })
}

function Form () {
    const { register, handleSubmit, errors } = useForm();
    return (
        <div className="form">
                <form onSubmit={handleSubmit<UserModel>(save)} noValidate>
                    <div className="column">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="Nome">Nome</label>
                                <input type="text" className="form-control" name="name"
                                placeholder="Digite o nome..." 
                                ref={register({
                                    required: "Digite seu Nome"
                                })}/>
                                {errors.name && <span>{errors.name.message}</span>}
                            </div> 
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="text" className="form-control" name="email" 
                                placeholder="Digite o email..."
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
                            <div className="col-12 d-flex justify-content-start">
                                <button type="submit" className="btn btn-primary ml-2" >Salvar</button>
                                <button className="btn btn-secondary ml-2" >Cancelar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default Form