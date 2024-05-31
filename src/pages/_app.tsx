import type{ AppProps } from 'next/app';
import '../styles/globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { AuthProvider } from '../context/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps){
    return (        
        <AuthProvider>        
            <Component {...pageProps} />            
            <ToastContainer autoClose={3000} />            
        </AuthProvider>        
    )
}