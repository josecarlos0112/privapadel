import React, { useState } from 'react'
import { signIn } from '../../supabase/auth'
import { useNavigate } from 'react-router-dom'
import '../../styles/layout.css' // asegúrate de importar estilos

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async e => {
        e.preventDefault()
        try {
            const data = await signIn(email, password)
            if (data.user.email.includes('admin')) navigate('/admin')
            else if (data.user.email.includes('coach')) navigate('/coach')
            else navigate('/student')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="login-container">
            <div className="login-page glass-box">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}
