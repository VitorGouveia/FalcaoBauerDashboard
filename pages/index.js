import React from "react"
import Image from "next/image"
import Link from "next/link"
import HeadConfig from "./components/HeadConfig"

const Home = () => {
    return (
        <div className="home-container">    
            <HeadConfig title="Home" />
            <header>
                <h1>Boas Vindas!</h1>
                <p>Faça seu login ou cadastre-se</p>
                <Image quality={20} src="/etec.svg" alt="etec jrm" width="128" height="128" />
            </header>

            <section>
                <Link href="/login" >
                    <button>Faça login</button>
                </Link>

                <Link href="/register" >
                    <button className="outlined">Sem uma conta? <span>Faça seu cadastro</span></button>
                </Link>
            </section>
        </div>
    )
}

export default Home