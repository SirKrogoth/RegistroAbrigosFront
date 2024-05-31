import React, { FormEvent, useState } from "react";

//Início import componente NEXT
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
//Término import componente NEXT

import styles from "./styles.module.scss";
import { toast } from 'react-toastify';
import logo from "../../public/maosdadas.png";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { acessoVisitante } from '../utils/acessoVisitante';

//Componentes importados
import { Input } from '../components/Input/index';
import { Button } from '../components/Button/index';

export default function Login() {
  const { logar } = useContext(AuthContext);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();

    if(cpf === '' || senha === ''){
      toast.warning("Email e senha deverão ser informados.");      
      return;
    }

    let dados = {
      cpf,
      senha
    }

    setLoading(true);

    await logar(dados);

    setLoading(false);

  }

  return (
    <>
      <Head>
        <title>Registro de Abrigos - Tela de Login</title>
        <meta name="descricao" content="Registro de Abrigos - Tela de Login" />
      </Head>

      <div>
        <div className={styles.container}>
          <h1>Registro de Abrigos</h1>
          <Image 
            className={styles.logo} 
            src={logo} 
            alt="mãos dadas pelos abrigados" 
            priority={false} 
            width={150}
            height={150}
          />

          <div className={styles.login}>
            <form onSubmit={handleLogin}>
              <Input
               type="text" 
               placeholder="Digite seu CPF"
               value={cpf} 
               onChange={(e) => setCpf(e.target.value)}
              /><br/>
              <Input
               type="password" 
               placeholder="Digite sua senha"
               value={senha} 
               onChange={(e) => setSenha(e.target.value)} 
              /><br/>
              <Button type="submit" loading={loading}>
                Entrar
              </Button>              
            </form>            
          </div>
          <br/>
          <br/>
          <Link href="/" legacyBehavior>
              <a className={styles.link}>Esqueci a minha senha</a>
          </Link>
          <Link href="/" legacyBehavior>
              <a className={styles.link}>Registre-se</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = acessoVisitante(async (ctx) => {  
  return {    
    props: {
      
    }
  }
});