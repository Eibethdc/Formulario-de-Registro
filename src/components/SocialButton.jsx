const SocialButton = ({link, icono}) => {
    return(
        <>
            <a href={link} className="m-1 p-2 border border-dark rounded-circle text-dark"><i className={icono}></i></a>        
        </>
    )
}

export default SocialButton