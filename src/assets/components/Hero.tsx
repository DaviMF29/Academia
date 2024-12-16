import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="background">
        <div className="slogan">
          <h1>Pensada em você <br /> <div id="second_text">e para você</div></h1>
          <div className="qualities">
            <p>Ambiente climatizado</p>
            <p>Avaliação física </p>
            <p>Personal trainer</p>
          </div>
          <div className="button-container">
            <a href="/matricula" className="button">Matricule-se já!</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;