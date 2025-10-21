import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,          // Puedes cambiarlo si necesitas otro puerto
        open: true           // Abre automáticamente el navegador al ejecutar "npm run dev"
    },
    build: {
        outDir: 'dist',      // Carpeta de salida al hacer "npm run build"
        sourcemap: true      // Útil para depurar en modo producción
    },
    define: {
        'process.env': {}    // Evita errores si usas process.env en alguna parte
    }
})
