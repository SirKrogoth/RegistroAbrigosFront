import { destroyCookie, setCookie, parseCookies } from 'nookies';
import { createContext, ReactNode, useState, useEffect } from 'react';
import { api } from '../services/apiClient';
import { toast } from 'react-toastify';
import Router from 'next/router';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    logar: (credential: loginProps) => Promise<void>;
}

type UserProps = {
    codigo: string;
    codAbrigo: string;
    nome: string;
    cpf: string;
}

type loginProps ={ 
    cpf: string;
    senha: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { '@abrigados.token': token } = parseCookies();

        if(token){
            api.get('/usuarios/detalhesDoUsuario').then(res => {
                const { codigo, codAbrigo, nome, cpf } = res.data;

                setUser({ codigo, codAbrigo, nome, cpf });
            })
            .catch((error) => {
                console.error('Erro ao procurar Token: ' + error);
                //TODO: inserir aqui o deslogar
            })
        }
    }, []);

    async function logar({ cpf, senha }: loginProps){
        try {
            const res = await api.post('/usuarios/login', {
                cpf,
                senha
            });

            const { codigo, codAbrigo, nome, token } = res.data;

            setCookie(undefined, '@abrigados.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });

            setUser({
                codigo,
                codAbrigo,
                nome,
                cpf
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            toast.success(`Bem vindo ao cadastro de abrigos ${user?.nome}.`);

            Router.push('/cadAbrigado');
        } catch (error) {
            toast.error("Não foi possível acessar. Tente novamente mais tarde.");
            console.error("Error: " + error);
        }
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, logar }}>
            {children}
        </AuthContext.Provider>
    )
}