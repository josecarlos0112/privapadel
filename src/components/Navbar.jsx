import React from 'react'

export default function Navbar({ title }) {
    return (
        <nav className="navbar">
            <h1>{title || 'PrivaPadel'}</h1>
        </nav>
    )
}
