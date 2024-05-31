// components/Sidenav.js
import { useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

export function Sidenav(){
  const [isOpen, setIsOpen] = useState(false);

  function openNav(){
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div id="mySidenav" className={`${styles.sidenav} ${isOpen ? styles.open : ''}`}>
        <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}>&times;</a>
        <Link id="cadAbrigado" href='/cadAbrigado'>Abrigados</Link>
        <Link id="cadSalas" href='/cadSalas'>Salas</Link>        
        <Link id="cadUsuario" href='/cadUsuario'>Usuários</Link>
        <Link id="logoff" href='/cadUsuario'>Sair</Link>
        
      </div>
      <span onClick={openNav} className={styles.openbtn}>Menu</span>
    </div>
  );
};


<Link href="/" legacyBehavior>
              <a className={styles.link}>Registre-se</a>
          </Link>