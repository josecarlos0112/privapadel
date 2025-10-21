import React from 'react'
import { markAttendance } from '../../services/attendanceService'

export default function Attendance() {
    const handleMark = async (classId, studentId, status) => {
        await markAttendance(classId, studentId, status, 'coach')
    }

    return (
        <div className="page">
            <h2>Marcar Asistencia</h2>
            <button onClick={() => handleMark(1, 2, 'present')}>Alumno 2 Presente</button>
        </div>
    )
}
