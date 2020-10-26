import React from 'react'
import Main from '../template/Main'

function Home () {

    return (

        <Main icon="home" title="Inicio" sub="Tela Inicial projeto React">
            <React.Fragment>
                <div className="display-4">Crud React</div>
                <hr/>
                <p className="mb-0">Utilizando react para desenvolvimento de um sistema Crud</p>
            </React.Fragment>
        </Main>
    )

}

export default Home