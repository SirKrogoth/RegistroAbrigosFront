import { createContext, ReactNode, useState, useEffect } from 'react';
import Router from 'next/router';
import { api } from '../services/apiClient';
import { toast } from 'react-toastify';

type autorizarContextData = {
    usuario: UsuarioProps;
    autenticado: boolean;
    login: (credencial: LoginProps) => Promise<void>;
}

type UsuarioProps = {
    codigo: string;
    nome: string;
    cpf: string;
}

type LoginProps = {
    cpf: string;
    senha: string;
}

type AutorizacaoProviderProps = {
    children: ReactNode;
}

export const AutorizacaoContext = createContext({} as autorizarContextData);

export function AutorizacaoProvider({ children }: AutorizacaoProviderProps){
    const [usuario, setUsuario] = useState<UsuarioProps>();
    const autenticado = !!usuario;

    async function login({cpf, senha}: LoginProps){
        try {
            const resp = await api.post('/login', {
                cpf, senha
            });

            const { codigo, nome } = resp.data.response;

            console.log("Nome: " + nome);

            setUsuario({codigo, nome, cpf});

            toast.success("Bem vindo " + nome);

            Router.push('/cadUsuario');
    
    
        } catch (error) {        
            console.error(error);        
            toast.error("Não foi possível acessar. Tente novamente mais tarde.");
        }
    }

    return(
        <AutorizacaoContext.Provider value={{ usuario, autenticado, login }}>
            { children }
        </AutorizacaoContext.Provider>
    )
}