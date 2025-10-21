import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Dashboard from './pages/Admin/Dashboard'
import CoachDashboard from './pages/Coach/CoachDashboard'
import StudentDashboard from './pages/Student/StudentDashboard'
import NotFound from './pages/NotFound'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth */}
                <Route path="/" element={<Login />} />

                {/* Admin */}
                <Route path="/admin" element={<Dashboard />} />

                {/* Profesor */}
                <Route path="/coach" element={<CoachDashboard />} />

                {/* Alumno */}
                <Route path="/student" element={<StudentDashboard />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
