import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Formulario = ({setAlert}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const validarDatos = (e) =>{
        e.preventDefault()
        if(name === '' || email === '' || password === '' || confirmPassword === ''){
            setAlert({
                state: true,
                text: 'Todos los campos son obligatorios',
                color: 'danger'
            })
            return
        }if(password !== confirmPassword){
            setAlert({
                state: true,
                text: 'Las contraseñas no coinciden',
                color: 'danger'
            })
            return
        }if(password.length < 5){
            setAlert({
                state: true,
                text: 'La contraseña debe tener minimo 6 caracteres',
                color: 'danger'
            })
            return 
        } if(!validEmail.test(email)){
            setAlert({
                state: true,
                text: 'Email no valido',
                color: 'danger'
            })
            return
        }else{
            setAlert({
                state: false,
                text: 'Registro exitoso',
                color: 'success',
            })
        }
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }
    return(
        <>
            <Form onSubmit={validarDatos}>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" 
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="email" 
                    placeholder="tuemail@ejemplo.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="password" 
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control 
                    type="password" 
                    placeholder="Confirma tu contraseña"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword} />
                </Form.Group>
                <Button className='w-100' type='submit' variant="success">Registrarse</Button>
            </Form>
        </>
    )
}

export default Formulario