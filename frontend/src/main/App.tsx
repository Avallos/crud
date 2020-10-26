import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React  from 'react'
import './App.css'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import {HashRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {
    
    return (
        <HashRouter>
            <div className="app">
                <Logo/>
                <Nav/>
                <Routes />
                <Footer/>
            </div>
        </HashRouter>
        
    )
}

export default App
