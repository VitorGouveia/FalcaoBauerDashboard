import '../styles/home.css'
import '../styles/global.css'
import '../styles/login.css'
import '../styles/register.css'
import '../styles/input.css'
import '../styles/button.css'

import Head from "next/head"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ETEC JRM</title>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/etec.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="author" content="vitor neves gomes gouveia" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App