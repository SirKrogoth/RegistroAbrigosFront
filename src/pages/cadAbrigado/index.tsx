import style from "./styles.module.scss";
import Head from "next/head";
import { acessoPrivado } from "../../utils/acessoPrivado";
import { setuAPIClient } from '../../services/api';

//Componentes importados
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';
import { Sidenav } from "../../components/SideBar";
import { TextArea } from '../../components/TextArea/index';

export default function CadUsuario() {
  return (
    <>
      <Sidenav />
      <div className={style.container}>
        <Head>
          <title>Registro de Abrigos - Cadastro de Novos Abrigados</title>
          <meta
            name="cadUsuarios"
            content="Registro de Abrigos - Cadastro de Novos Abrigados"
          />
        </Head>

        <h1>CADASTRO DE NOVOS ABRIGADOS</h1>

        <div className={style.cadastro}>
          <form>
            <Input 
              type="text"          
              placeholder="Nome do Abrigado"
              value=""
            />
            <label className={style.labels}>Nascimento</label>
            <Input 
              type="date"
              placeholder="Nascimento"
              value=""
            />
            <Input 
              type="text"
              placeholder="CPF"
              value=""
            /><br/>
            <TextArea
              cols={114}
              rows={5}
              placeholder="Informe aqui alguma observação relevante a respeito do abrigado."
            >              
            </TextArea><br/>
            <Button
              loading={false}
              type="submit"                          
            >
            Cadastrar Abrigado  
            </Button>            
          </form>
        </div>        
      </div>
    </>
  );
}

export const getServerSideProps = acessoPrivado(async (ctx) => {
  return {
    props: {

    }
  }
});