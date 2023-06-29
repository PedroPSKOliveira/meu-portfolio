import film from "./pedroFilmes.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import nb from "../assets/PedroFilmes.png";

const PedroFilmes = () => {
    return (
        <div className={film.filmes}>
        <a href={"https://github.com/PedroPSKOliveira/film"} target={"_blank"} style={{ textDecoration: 'none', color: '#000000' }}>
<h1>Pedro Filmes <FontAwesomeIcon icon={faGithub} style={{color: "#000000"}} /></h1>
    </a>
    <a href={"https://pedrofilmes.vercel.app/"} target={"_blank"}>
        <img src={nb} alt="Finder" className={film.imagem}/>
    </a>
    <p>Pedro Filmes é um projeto pensado para exibir os filmes melhores avaliados, mais populares, em exibição e futuros
        lançamentos segundo o TMDB. Ele faz uma consulta por meio da API do TMDB para receber essas informações.
        O projeto foi feito em HTML, CSS, JavaScript, Vite, React.js e utilizando o comando Unix env. </p>
</div>
    )
}

export default PedroFilmes