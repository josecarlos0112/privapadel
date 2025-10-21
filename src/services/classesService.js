import { supabase } from '../supabase/supabaseClient'

export const getClassesByGroup = async (groupId) => {
    const { data, error } = await supabase
        .from('class')
        .select('*')
        .eq('group_id', groupId)
    if (error) throw error
    return data
}

export const markClassAsDone = async (classId) => {
    const { error } = await supabase
        .from('class')
        .update({ status: 'done' })
        .eq('id', classId)
    if (error) throw error
}
