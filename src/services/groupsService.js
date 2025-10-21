import { supabase } from '../supabase/supabaseClient'

export const getGroups = async () => {
    const { data, error } = await supabase.from('group').select(`
    id, name, tariff_type, duration_min, day_of_week, start_time,
    coach:coach_id(name),
    location:location_id(label)
  `)
    if (error) throw error
    return data
}

export const createGroup = async (group) => {
    const { data, error } = await supabase.from('group').insert([group])
    if (error) throw error
    return data
}
