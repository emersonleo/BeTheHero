import React from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

function Register(){
    return(
        <div className="register-content">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos de sua ONG.</p>
                    <Link to ="/" className='back-link'>
                        <FiArrowLeft size={16} color={'#e02041'}/>
                        Já possuo cadastro
                    </Link>
                </section>

                <form>
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{width:80}}/>
                    </div>
                    <button className="button"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}
export default Register