import React, { useState } from 'react'
import { supabase } from '../../supabase/supabaseClient'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async e => {
        e.preventDefault()
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) alert(error.message)
        else alert('Registro exitoso')
    }

    return (
        <div className="register-page">
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}
