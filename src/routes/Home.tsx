import eu from '../assets/eu.jpg'
import Finder from "../components/finder.tsx";
import { faGithub, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import classes from './Home.module.css'

const Home = () => {
    return (
        <>
        <body>
        <div className={classes.pageWrap}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div>
                        <img src={eu} alt="Foto de perfil" className={classes.profilePicture}/>

                            <div className={classes.nameSocial}>
                                <h1 className={classes.name}>Pedro Almeida✌️</h1>
                                <div className={classes.socialIcons}>
                                    <a href="https://github.com/PedroPSKOliveira" target={"_blank"}><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#000000"}} /></a>
                                    <a href="https://www.linkedin.com/in/pedro-almeida-oliveira-87b0a3246/" target={"_blank"}><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#000000",}} /></a>
                                    <a href="https://api.whatsapp.com/send/?phone=5573981427266&text&type=phone_number&app_absent=0" target={"_blank"}><FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#000000",}} /></a>
                                </div>
                            </div>

                        <h2 className={classes.job}>
                            <span>Desenvolvedor React</span>
                            <FontAwesomeIcon icon={faReact} spin size="xl" style={{color: "#00d5ff"}} />
                        </h2>
                            <p className={classes.description}>TENHO 19 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIÊNCIA
                                TRABALHANDO EM ESTÁGIOS E EM START-UP</p>
                    </div>
                </div>
                <div className={classes.chamada}>
                    <h1>Veja mais sobre os meus projetos 👇</h1>
                </div>
            </div>
                <Finder/>
            <div className={classes.projeto2}>
                <h1>Em breve</h1>
            </div>
        </div>

        </body>
        </>
    )
}

export default Home