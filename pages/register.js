import React from "react"
import Link from "next/link"
import Image from "next/image"
// import {  } from "react-icons/fi"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

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
            <header>
                <h1>Faça seu registro</h1>
                <p>Crie sua conta e entre na plataforma da etec</p>
                <Image quality={20} className="etec" src="/etec.svg" alt="etec jrm" width="128" height="128" />
                <Link href="/">
                    <p className="back">&larr; Voltar</p>
                </Link>
            </header>

            <form>
                <Input required type="text" name="name" placeholder="nome" className="mb-0" />
                <Input required type="text" name="lastname" placeholder="sobrenome" className="rounded-0 bt-0" />
                <Input required type="email" name="email" placeholder="email" className="rounded-0 bt-0" />
                <Input required type="password" name="password" placeholder="senha" className="mt-0 bt-0" />
                
                <Button classNmae="cta">Crie sua conta</Button>
            </form>
        </div>
    )
}

export default Register