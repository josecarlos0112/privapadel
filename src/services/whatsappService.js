export const generateMessage = (studentName, amount, paymentLink) => {
    return `Hola ${studentName}, tu cuota de este mes es ${amount}€. 
Puedes pagar desde este enlace: ${paymentLink}. ¡Gracias! 🎾`
}

export const openWhatsApp = (phone, message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
}
