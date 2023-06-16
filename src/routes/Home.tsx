import eu from '../assets/eu.jpg'
import Finder from "../components/finder.tsx";
import { faGithub, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <>
        <body>
        <div className="page-wrap">
            <div className="container">
                <div className="main">
                    <div className="main-left">
                        <img src={eu} alt="Foto de perfil" className="profile-picture"/>

                            <div className="name-social">
                                <h1 className="name">Pedro Almeida</h1>
                                <div className="social-icons">
                                    <a href="https://github.com/PedroPSKOliveira" target={"_blank"}><FontAwesomeIcon icon={faGithub} size="xl" style={{color: "#000000"}} /></a>
                                    <a href="https://www.linkedin.com/in/pedro-almeida-oliveira-87b0a3246/" target={"_blank"}><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#000000",}} /></a>
                                    <a href="https://api.whatsapp.com/send/?phone=5573981427266&text&type=phone_number&app_absent=0" target={"_blank"}><FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "#000000",}} /></a>
                                </div>
                            </div>

                            <h2 className="job">Desenvolvedor React</h2>
                            <p className="description">TENHO 19 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIÊNCIA
                                TRABALHANDO EM ESTÁGIOS E EM START-UP</p>
                    </div>
                </div>
                <div className="chamada">
                    <h1>Veja mais sobre os meus projetos 👇</h1>
                </div>
            </div>
                <Finder/>
            <div className={"projeto2"}>
                Projeto 2
            </div>
        </div>

        </body>
        </>
    )
}

export default Home