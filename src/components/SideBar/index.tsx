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
        <a href="#">Principal</a>
        <Link id="cadAbrigado" href='/cadAbrigado'>Abrigados</Link>
        <a href="#">Salas</a>
        <Link id="cadUsuario" href='/cadUsuario'>Usuários</Link>
        
      </div>
      <span onClick={openNav} className={styles.openbtn}>Menu</span>
    </div>
  );
};


<Link href="/" legacyBehavior>
              <a className={styles.link}>Registre-se</a>
          </Link>