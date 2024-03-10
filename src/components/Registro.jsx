import AlertComponent from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"

const Registro = ({message, setAlert}) => {
    return(
        <>
        <h1>Crea una cuenta</h1>
        <section className="p-3">
            <SocialButton link={'https://web.facebook.com/?_rdc=1&_rdr'} icono={"fa-brands fa-facebook fa-xl"} />
            <SocialButton link={'https://github.com/'} icono={"fa-brands fa-github fa-xl"} />
            <SocialButton link={'https://www.linkedin.com/feed/'} icono={"fa-brands fa-linkedin-in fa-xl"} />
        </section>
        <p>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert}/>
        <AlertComponent color={message.color} text={message.text}/>
        </>
    )
}

export default Registro