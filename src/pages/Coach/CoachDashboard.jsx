import React, { useEffect, useState } from 'react'
import { getClassesByGroup } from '../../services/classesService'

export default function CoachDashboard() {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getClassesByGroup(1).then(setClasses)
    }, [])

    return (
        <div className="page">
            <h2>Mis Clases</h2>
            <ul>
                {classes.map(c => (
                    <li key={c.id}>
                        {c.date} - {c.status}
                    </li>
                ))}
            </ul>
        </div>
    )
}
