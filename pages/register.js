import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FiEye, FiEyeOff } from "react-icons/fi"
import HeadConfig from "./components/HeadConfig"

const Register = () => {
    const showPassword = () => {
        document.querySelector(".register-container form .row label .show").style.display = "none"
        document.querySelector(".register-container form .row label .hide").style.display = "block"
        document.querySelector(".register-container form .row .passwordInput").type = "text"
    }

    const hidePassword = () => {
        document.querySelector(".register-container form .row label .show").style.display = "block"
        document.querySelector(".register-container form .row label .hide").style.display = "none"
        document.querySelector(".register-container form .row .passwordInput").type = "password"
    }

    return (
        <div className="register-container">    
            <HeadConfig title="Home" />
            <header>
                <h1>Faça seu registro</h1>
                <p>Crie sua conta e entre na plataforma da etec</p>
                <Image quality={20} className="etec" src="/etec.svg" alt="etec jrm" width="128" height="128" />
                <Link href="/">
                    <p className="back">&larr; Voltar</p>
                </Link>
            </header>

            <form>
                <div className="row input-group">
                    <div className="row">
                        <label>Nome</label>
                        <input required name="nome" placeholder="Nome"/>
                    </div>
                    <div className="row">
                        <label>Sobrenome</label>
                        <input required name="sobrenome" placeholder="Sobrenome" />
                    </div>
                </div>
                <div className="row">
                    <label>E-mail</label>
                    <input required name="email" placeholder="E-mail" type="email" />
                </div>
                <div className="row">
                    <label>
                        Senha
                        <FiEye className="show" onClick={showPassword} size={26}/>
                        <FiEyeOff className="hide" onClick={hidePassword} size={26}/>
                    </label>
                    <input required className="passwordInput" type="password" name="password" placeholder="Senha" />
                </div>
                <button className="outlined" type="submit">Crie sua conta</button>
            </form>
        </div>
    )
}

export default Register