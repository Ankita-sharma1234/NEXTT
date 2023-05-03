import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from './component/sidebar';
import Header from "./component/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Header/>
       <Sidebar>
      <Component {...pageProps} />
      </Sidebar>
     
      </>
   
  )

}
