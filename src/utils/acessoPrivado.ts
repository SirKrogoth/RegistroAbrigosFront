import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies, destroyCookie } from 'nookies';

export function acessoPrivado(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['@abrigados.token'];

        if(!token){
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            }
        }

        try {
            return await fn(ctx);
        } catch (error) {
            destroyCookie(ctx, '@abrigados.token');

            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }
    }
}