import nb from '../assets/finder1.png'
import classes from './finder.module.css'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const finder = () => {

    return (
        <div className={classes.finder}>
            <a href={"https://github.com/PedroPSKOliveira/finder"} target={"_blank"} style={{ textDecoration: 'none', color: '#000000' }}>
                <h1>Finder <FontAwesomeIcon icon={faGithub} style={{color: "#000000"}} /></h1>
            </a>
            <a href={"https://finder-delta.vercel.app/"} target={"_blank"}>
                <img src={nb} alt="Finder" className={classes.imagem}/>
            </a>
            <p>Finder é um projeto que eu fiz para treinar minhas habilidades com React, TypeScript, CSS Modules e Vite. Ele é um site que busca usuários do GitHub e mostra algumas informações sobre eles.</p>
        </div>
    )
}

export default finder