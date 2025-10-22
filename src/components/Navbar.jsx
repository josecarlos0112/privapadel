import React, { useEffect, useState } from 'react'

export default function Navbar({ title }) {
    const [darkMode, setDarkMode] = useState(false)

    // Al iniciar, carga la preferencia guardada
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.body.classList.add('dark')
            setDarkMode(true)
        }
    }, [])

    // Cambia entre modo claro y oscuro
    const toggleTheme = () => {
        const isDark = !darkMode
        setDarkMode(isDark)
        if (isDark) {
            document.body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <nav className="navbar">
            <h1>{title || 'PrivaPadel'}</h1>
            <button onClick={toggleTheme} className="theme-toggle">
                {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
        </nav>
    )
}
