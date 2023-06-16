import eu from '../assets/eu.jpg'
import github from '../assets/GitHub-Mark.png'
import linkedin from '../assets/4138173.png'
import wpp from '../assets/wpp.png'

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
                                    <a href="#"><img className={"social-icon"} src={github} alt="Github"/></a>
                                    <a href="#"><img className="social-icon" src={linkedin} alt="Linkedin"/></a>
                                    <a href="#"><img className="social-icon" src={wpp} alt="WhatsApp"/></a>
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
            <div className="projetos">
            </div>
        </div>

        </body>
        </>
    )
}

export default Home