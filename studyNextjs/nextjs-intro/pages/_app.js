import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    // <Layout>
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
    /* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */
    /* </Layout> */
  );
}
