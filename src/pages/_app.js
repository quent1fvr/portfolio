
import Navbar from "components/Navbar";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
    <Main />

    <Component {...pageProps} />
  </> 
  );
}

export default MyApp;