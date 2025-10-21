import React, { useEffect, useState } from 'react'
import { getMonthlyBilling } from '../../services/billingService'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function Billing() {
    const [billing, setBilling] = useState([])

    useEffect(() => { getMonthlyBilling('2025-10').then(setBilling) }, [])

    return (
        <div className="page">
            <h2>Cobros Mensuales</h2>
            <table>
                <thead>
                <tr><th>Grupo</th><th>Importe</th><th>Mensaje</th><th>Enviar</th></tr>
                </thead>
                <tbody>
                {billing.map(b => (
                    <tr key={b.id}>
                        <td>{b.group_id}</td>
                        <td>{b.amount_per_student}€</td>
                        <td>{b.message_text}</td>
                        <td><WhatsAppButton phone="34612345678" message={b.message_text} /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
