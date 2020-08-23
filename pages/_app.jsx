import App from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../public/css/style.css";
const Header = dynamic(import("../component/header"));
const Footer = dynamic(import("../component/footer"));

// This default export is required in a new `pages/_app.js` file.
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <link rel="icon" href={"/favicon.ico"} />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
}
