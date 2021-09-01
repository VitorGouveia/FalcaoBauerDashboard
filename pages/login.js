import React from "react"
import Link from "next/link"
import { FiLogIn } from "react-icons/fi"
import { FaGoogle, FaFacebook, FaDiscord } from "react-icons/fa"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

const Login = () => {
    const Nome = "Vitor"

    return (
        <div className="login-container">    
            <header>
                <h1>Você voltou, {Nome}!</h1>
                <p>Faça login na plataforma da etec jrm</p>
            </header>

            <form>
                <Link href="/">
                    <p className="back">&larr; Voltar</p>
                </Link>
                <div className="row">
                    <Input name="user" className="mb-0" placeholder="Usuário" type="text" />
                    <Input name="password" className="mt-0 bt-0" placeholder="Senha" type="password" />
                </div>
            </form>

            <section>
                <div className="icons">
                    <Button data-button="google" className="outlined">
                        <FaGoogle size={20} />
                    </Button>

                    <Button data-button="discord" className="outlined">
                        <FaDiscord size={20} />
                    </Button>

                    <Button data-button="facebook" className="outlined">
                        <FaFacebook size={20} />
                    </Button>
                </div>

                <Link href="/login">
                    <Button className="outlined cta">
                        Entre
                        <FiLogIn size={20} strokeWidth={3} />
                    </Button>
                </Link>
            </section>
        </div>
    )
}

export default Login