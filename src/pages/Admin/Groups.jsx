import React, { useState, useEffect } from 'react'
import { getGroups, createGroup } from '../../services/groupsService'

export default function Groups() {
    const [groups, setGroups] = useState([])
    const [newGroup, setNewGroup] = useState({ name: '', tariff_type: 'monthly' })

    useEffect(() => { getGroups().then(setGroups) }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        await createGroup(newGroup)
        setGroups(await getGroups())
    }

    return (
        <div className="page">
            <h2>Gestión de Grupos</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Nombre" onChange={e => setNewGroup({ ...newGroup, name: e.target.value })} />
                <select onChange={e => setNewGroup({ ...newGroup, tariff_type: e.target.value })}>
                    <option value="monthly">Mensual</option>
                    <option value="flexible">Flexible</option>
                </select>
                <button type="submit">Crear</button>
            </form>

            <ul>
                {groups.map(g => <li key={g.id}>{g.name} ({g.tariff_type})</li>)}
            </ul>
        </div>
    )
}
