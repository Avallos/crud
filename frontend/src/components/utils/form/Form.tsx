import React from 'react'
import UserModel from '../../../models/UserModel'
import axios from 'axios'
import swet from 'sweetalert2'
import {Formik, Field, Form, FormikHelpers, FormikProps, FieldProps, ErrorMessage} from 'formik'
import schema from './schema'
import { on } from 'cluster'


    const MyForm = () => {

        const initialValues: UserModel = {
            id: 0,
            name: '',
            email:'',
        }

        return (
            <div className="form">
                <Formik
                    validationSchema={schema}
                    initialValues={initialValues}
                    validateOnMount
                    
                    onSubmit = {(values, actions) => {
                        
                        axios.post<UserModel>('http://localhost:3001/users', values).then(resp => {
                            swet.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `Usuário ${resp.data.name} Cadastrado com Sucesso`,
                                showConfirmButton: false,
                                timer: 1000
                            })
                        })

                    }}
                    render={({values, errors, touched, isValid}) => (
                        <Form>
                            <div className="column">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Nome">Nome</label>
                                        <Field type="text" className="form-control" name="name" placeholder="Digite o nome..." />
                                        <ErrorMessage name="name"/>
                                    </div> 
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="Email">Email</label>
                                        <Field type="text" className="form-control" name="email" placeholder="Digite o E-mail..." />
                                        <ErrorMessage name="email"/>
                                    </div> 
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-start">
                                        <button type="submit" className="btn btn-primary ml-2" disabled={!isValid}>Salvar</button>
                                        <button className="btn btn-secondary ml-2" type="reset">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </Form>

                    ) }
                />
                    
            </div>
        )
    }

export default MyForm