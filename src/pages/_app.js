
import Navbar from "components/Navbar";

import "../styles/globals.css";
import {Analytics} from '@vercel/analytics'

function MyApp({ Component, pageProps }) {
  return (
  <>
        <Navbar/>

    <Component {...pageProps} />
    <Analytics/>
  </> 
  );
}

export default MyApp;