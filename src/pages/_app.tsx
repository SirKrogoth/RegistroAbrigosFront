import type{ AppProps } from 'next/app';
import '../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { AutorizacaoProvider } from '../context/Autorizacao';

export default function MyApp({ Component, pageProps }: AppProps){
    return (        
        <AutorizacaoProvider>        
            <Component {...pageProps} />            
            <ToastContainer autoClose={3000} />            
        </AutorizacaoProvider>        
    )
}