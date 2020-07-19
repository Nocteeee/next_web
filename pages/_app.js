// import '../public/css/index.css'
import '../public/css/style.css'
import Header from '../component/header'
import Footer from '../component/footer'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}