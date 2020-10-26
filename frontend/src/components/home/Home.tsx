import React from 'react'
import Main from '../template/Main'

function Home () {

    return (

        <Main icon="home" title="Inicio" sub="Tela Inicial projeto React">
            <React.Fragment>
                <div className="display-4">PRIMEIRO CRUD COM REACT</div>
                <hr/>
                <p className="mb-0">Aprendendo crud com React</p>
            </React.Fragment>
        </Main>
    )

}

export default Home