import { supabase } from '../supabase/supabaseClient'

export const markAttendance = async (classId, studentId, status, markedBy) => {
    const { error } = await supabase.from('attendance').upsert({
        class_id: classId,
        student_id: studentId,
        status,
        marked_by: markedBy,
        marked_at: new Date().toISOString()
    })
    if (error) throw error
}
