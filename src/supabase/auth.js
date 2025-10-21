import { supabase } from './supabaseClient'

export const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
}

export const signOut = async () => {
    await supabase.auth.signOut()
}

export const getUserRole = async () => {
    const { data, error } = await supabase.from('profiles').select('role').single()
    if (error) throw error
    return data.role // "admin" | "coach" | "student"
}
