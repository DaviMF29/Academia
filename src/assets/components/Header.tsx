import './Header.css';
import Logo from '../../assets/images/logo.gif';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
//import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="info">
          <a href="#unidades">Unidades</a>
          <a href="#conheca">Conheça</a>
          <a href="#planos">Planos</a>
          <a href="#estrategias">Estratégias</a>
        </div>
        <div className="area">
          {/* Botão visível apenas em telas maiores */}
          <button className="desktop-only">Área do aluno</button>

          {/* Menu Hamburguer visível apenas em telas menores */}
          <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="responsive-menu">
          <a href="#unidades">Unidades</a>
          <a href="#conheca">Conheça</a>
          <a href="#planos">Planos</a>
          <a href="#estrategias">Estratégias</a>
        </div>
      )}
    </div>
  );
};

export default Header;