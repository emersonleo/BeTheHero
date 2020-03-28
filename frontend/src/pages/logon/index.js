import React from 'react'
import './styles.css'
import heroes from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the hero"></img>
        
                <form>
                    <h1> Faça seu login </h1>
                    <input placeholder="Sua ID"/>
                    <button type="submit" className="button"> Entrar </button>
                    <Link to ="/register" className='back-link'>
                        <FiLogIn size={16} color={'#e02041'}/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroes} alt="heroes"></img>
        </div>
    )
}


export default Logon