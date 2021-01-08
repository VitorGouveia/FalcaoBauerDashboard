import React from "react"
import Head from "next/head"

const HeadConfig = ({ title }) => (
    <Head>
        <title>{ title }</title>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/etec.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="vitor neves gomes gouveia" />
    </Head>
)

export default HeadConfig