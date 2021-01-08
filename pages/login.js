import React from "react"
import Link from "next/link"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { FaGoogle } from "react-icons/fa"
import HeadConfig from "./components/HeadConfig"

const Login = () => {
    const Nome = "Vitor"

    const showPassword = () => {
        document.querySelector(".login-container form .row label .show").style.display = "none"
        document.querySelector(".login-container form .row label .hide").style.display = "block"
        document.querySelector(".login-container form .row .passwordInput").type = "text"
    }

    const hidePassword = () => {
        document.querySelector(".login-container form .row label .show").style.display = "block"
        document.querySelector(".login-container form .row label .hide").style.display = "none"
        document.querySelector(".login-container form .row .passwordInput").type = "password"
    }

    return (
        <div className="login-container">    
            <HeadConfig title="Home" />
            <header>
                <h1>Você voltou, {Nome}!</h1>
                <p>Faça login na plataforma da etec jrm</p>
            </header>

            <form>
                <Link href="/">
                    <p className="back">&larr; Voltar</p>
                </Link>
                <div className="row">
                    <label>Usuário</label>
                    <input required name="user" placeholder="Usuário"/>
                </div>
                <div className="row">
                    <label>
                        Senha
                        <FiEye className="show"
                            onClick={showPassword}
                            size={26}
                        />
                        <FiEyeOff className="hide"
                            onClick={hidePassword}
                            size={26} 
                        />
                    </label>
                    <input required className="passwordInput" type="password" name="password" placeholder="Senha" />
                </div>
            </form>

            <section>
                <Link href="/login">
                    <button>Entre</button>
                </Link>

                    <button className="google"><FaGoogle size={16} /></button>
            </section>
        </div>
    )
}

export default Login