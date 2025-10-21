import React, { useState } from 'react'
import { signIn } from '../../supabase/auth'
import { useNavigate } from 'react-router-dom'

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
        <div className="login-page">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}
