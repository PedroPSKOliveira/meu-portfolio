import classes from "./calculator.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import nb from "../assets/calc1.png";

const calculator = () => {
    return (
        <div className={classes.calculator}>
            <a href={"https://github.com/PedroPSKOliveira/calculadora"} target={"_blank"} style={{ textDecoration: 'none', color: '#000000' }}>
                <h1>Calculadora <FontAwesomeIcon icon={faGithub} style={{color: "#000000"}} /></h1>
            </a>
            <a href={"https://calculadora-zeta-ecru.vercel.app/"} target={"_blank"}>
                <img src={nb} alt="Finder" className={classes.imagem}/>
            </a>
            <p>Esta calculadora é um projeto simples feito em TypeScript, React e Vite. Fiz ele com o intuito de demonstrar
                meu conhecimento em lógicas aritméticas e a aplicação dela em TypeScript. </p><br/>
        </div>
    )
}

export default calculator