import style from "./styles.module.scss";
import Head from "next/head";
import { Sidenav } from "../../components/SideBar";

export default function CadUsuario() {
  return (
    <>
      <Sidenav />
      <div className={style.container}>
        <Head>
          <title>Registro de Abrigos - Cadastro de Usuários</title>
          <meta
            name="cadUsuarios"
            content="Registro de Abrigos - Cadastro de Usuários"
          />
        </Head>

        <h1>CADASTRO DE USUARIOS</h1>
      </div>
    </>
  );
}
