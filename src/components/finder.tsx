import nb from '../assets/finder-nb-cel.png'
import classes from './finder.module.css'

const finder = () => {

    return (
        <div className={classes.finder}>
            <h1>Finder</h1>
            <a href={"https://finder-delta.vercel.app/"} target={"_blank"}>
            <img src={nb} alt="Finder" className={classes.imagem}/>
            </a>
            <p>Finder é um projeto que eu fiz para treinar minhas habilidades com React, TypeScript, CSS Modules e Vite. Ele é um site que busca usuários do GitHub e mostra algumas informações sobre eles.</p>
        </div>
    )
}

export default finder