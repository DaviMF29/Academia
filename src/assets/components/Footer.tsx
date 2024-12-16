import './Footer.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Logo from '../../assets/images/logo.gif';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={Logo} alt="Logo Ultra Academy" className="logo" />
        <div className="footer-info">
          <p><strong>Horário de Funcionamento:</strong><br />
            Segunda à sexta: 06h15 às 22h30<br />
            Sábado: 09h00 às 12h30
          </p>
          <p><strong>Endereço:</strong><br />
            Rua João José da Silva, 123<br />
            Patos - Paraíba
          </p>
          <p><strong>Email:</strong><br />
            example@gmail.com
          </p>
        </div>
        <div className="footer-social">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      <div className="footer-right">
        <h3>Fale Conosco</h3>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Nome Completo:" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="WhatsApp:" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Digite sua mensagem." rows={4} required></textarea>
          </div>
          <button type="submit" className="submit-button">ENVIAR</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 - Ultra Academy. Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
