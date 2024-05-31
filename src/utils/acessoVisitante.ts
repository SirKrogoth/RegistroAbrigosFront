import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

export function acessoVisitante(fn: GetServerSideProps<P>){
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['@abrigados.token'];

        if(token){
            return {
                redirect: {
                    destination: '/cadAbrigado',
                    permanent: false,
                }
            }
        }
        return await fn(ctx);
    }
}