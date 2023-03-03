
import Navbar from "components/Navbar";
import Main from "components/Main";

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