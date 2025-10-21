import { supabase } from '../supabase/supabaseClient'

export const getMonthlyBilling = async (month) => {
    const { data, error } = await supabase
        .from('billing_monthly')
        .select('*')
        .eq('month', month)
    if (error) throw error
    return data
}
