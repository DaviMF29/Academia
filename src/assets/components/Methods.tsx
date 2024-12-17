import "./Methods.css";

import Luta from "../../assets/images/luta.jpg";
import Crossfit from "../../assets/images/crossfit.jpg";
import Musculacao from "../../assets/images/musculacao.webp";

const Methods = () => {
  return (
    <section className="products-container">
      <h2 className="products-title">
        Conheça nossos métodos
      </h2>
      <p className="products-subtitle">
        Só na Ultra você encontra serviços e produtos para potencializar seus resultados
      </p>

      <div className="cards-container">
        <div className="card">
          <img
            src={Luta}
            alt="ultra Fit Coach"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Lutas</h3>
            <p className="card-desc">
            Aulas de luta para melhorar sua técnica, condicionamento físico e autoconfiança.
          </p>
            <p className="card-text">
              Participe de aulas de boxe, muay thai e outras modalidades com treinadores experientes.
            </p>
            <p className="card-price">R$ 39,90/mês</p>
            <button className="card-button">Saiba mais</button>
          </div>
        </div>

        <div className="card">
          <img
            src={Crossfit}
            alt="ultra Fit Energy"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Crossfit</h3>
            <p className="card-desc">
              Treinamento de alta intensidade para melhorar sua força e condicionamento físico.
            </p>
            <p className="card-text">
              Participe de aulas dinâmicas e desafiadoras que combinam levantamento de peso, ginástica e cardio.
            </p>
            <p className="card-price">A partir de R$ 19,90/mês</p>
            <button className="card-button">Saiba mais</button>
          </div>
        </div>

        <div className="card">
          <img
            src={Musculacao}
            alt="ultra Fit Body"
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">Musculação</h3>
            <p className="card-desc">
              Treinamento de força para aumentar a massa muscular e melhorar a resistência.
            </p>
            <p className="card-text">
              Utilize equipamentos modernos e conte com o suporte de profissionais qualificados para alcançar seus objetivos.
            </p>
            <p className="card-price">R$ 19,90/mês</p>
            <button className="card-button">Saiba mais</button>
          </div>
        </div>
      </div>

      <p className="footer-note">
        Consulte a disponibilidade dos serviços físicos na academia desejada.
      </p>
    </section>
  );
};

export default Methods;
