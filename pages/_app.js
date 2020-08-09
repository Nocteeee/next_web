// import '../public/css/index.css'
import '../public/css/style.css'
import Header from '../component/header'
import Footer from '../component/footer'
import Head from 'next/head'
import 'highlight.js/styles/monokai-sublime.css';



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}