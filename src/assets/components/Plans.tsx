import { GiWeightLiftingUp } from 'react-icons/gi' // Importa o novo ícone
import './Plans.css'

const Plans = () => {
  return (
    <div className="information">
      <h1>Conheça nossos planos</h1>
      <p>
        Comece a cuidar da sua saúde hoje mesmo! Na Ultra Academy, oferecemos o pacote de<br />
        serviços perfeito para você alcançar seus objetivos de saúde e bem-estar.<br />
        Compare e escolha o plano que oferece o melhor custo-benefício para o seu estilo de vida.
      </p>
      <div className="package">
        <div className="plan" id="basic">
          <h3>Plano Básico</h3>
          <GiWeightLiftingUp  size={70} />
          <h4>R$ 50,00</h4>
          <a href="#">Matricule-se</a>
          <ul>
            <li> Sem fidelidade</li>
            <li> Anuidade zero</li>
            <li> Acesso à musculação</li>
            <li> Horário livre</li>
          </ul>
        </div>
        <div className="plan" id="intermediate">
          <h3>Plano Intermediário</h3>
          <GiWeightLiftingUp  size={70} /> 
          <h4>R$ 75,00</h4>
          <a href="#">Matricule-se</a>
          <ul>
            <li> Todos os benefícios do Básico</li>
            <li> Acesso a ginástica e dança</li>
            <li> Treino liberado em todas as unidades</li>
            <li> Acesso ao app Weburn</li>
          </ul>
        </div>
        <div className="plan" id="advanced">
          <h3>Plano Avançado</h3>
          <GiWeightLiftingUp  size={70} /> 
          <h4>R$ 100,00</h4>
          <a href="#">Matricule-se</a>
          <ul>
            <li> Todos os benefícios do Intermediário</li>
            <li> Acompanhante gratuito 5x ao mês</li>
            <li> Treinos personalizados</li>
            <li> Consultoria nutricional</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Plans
