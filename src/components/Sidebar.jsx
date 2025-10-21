import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({ role }) {
    return (
        <aside className="sidebar">
            <ul>
                {role === 'admin' && (
                    <>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/admin/groups">Grupos</Link></li>
                        <li><Link to="/admin/billing">Cobros</Link></li>
                    </>
                )}
                {role === 'coach' && (
                    <>
                        <li><Link to="/coach">Mis clases</Link></li>
                        <li><Link to="/coach/attendance">Asistencia</Link></li>
                    </>
                )}
                {role === 'student' && (
                    <>
                        <li><Link to="/student">Mi horario</Link></li>
                        <li><Link to="/student/payments">Pagos</Link></li>
                    </>
                )}
            </ul>
        </aside>
    )
}
