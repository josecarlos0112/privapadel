import React from 'react'
import { openWhatsApp } from '../services/whatsappService'

export default function WhatsAppButton({ phone, message }) {
    return (
        <button onClick={() => openWhatsApp(phone, message)} className="whatsapp-btn">
            💬 WhatsApp
        </button>
    )
}
