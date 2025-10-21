import React from 'react'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function Payments() {
    const msg = "Hola, aquí tienes tu enlace de pago de este mes: https://stripe.link/xyz"
    return (
        <div className="page">
            <h2>Pagos</h2>
            <WhatsAppButton phone="34611122233" message={msg} />
        </div>
    )
}
