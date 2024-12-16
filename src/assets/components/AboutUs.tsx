import './AboutUs.css'
import fachada from '../images/fachada.jpg'
const AboutUs = () => {
  return (
    <div className='about_us'>
      <div className="text">
          <h1>Sobre a Ultra Academy</h1>
          <div className="bar"></div>
          <p>A Ultra Academy está no mercado desde 2010,<br /> oferecendo infraestrutura moderna,<br />
             mais de 50 modalidades de treino e<br /> acompanhamento personalizado. <br />
             Com profissionais qualificados,<br /> ajudamos você a alcançar seus objetivos e <br />superar seus limites!</p>
           <div className="findout">
            <a href="/matricula" className="button">Conheça mais sobre nós</a>
      </div>
      </div>
      <div className="image">
            <img src={fachada} alt="" />
      </div>
    </div>
  )
}

export default AboutUs
