import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { getGroups } from '../../services/groupsService'

export default function Dashboard() {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getGroups().then(setGroups)
    }, [])

    return (
        <div className="layout">
            <Sidebar role="admin" />
            <div className="content">
                <Navbar title="Panel de Administración" />
                <h2>Resumen de grupos</h2>
                <ul>
                    {groups.map(g => (
                        <li key={g.id}>{g.name} - {g.coach.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
