import { supabase } from '@/lib/supabase';
import type { UserPreferences } from '@/types';

export async function getUserPreferences(userId: string) {
  const { data, error } = await supabase
    .from('user_preferences')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data as UserPreferences;
}

export async function updateUserPreferences(
  userId: string,
  preferences: Partial<UserPreferences>
) {
  const { data, error } = await supabase
    .from('user_preferences')
    .upsert({ user_id: userId, ...preferences })
    .select()
    .single();

  if (error) throw error;
  return data as UserPreferences;
}

export async function addToRecentlyViewed(userId: string, productId: string) {
  const { data: existing } = await supabase
    .from('user_preferences')
    .select('recently_viewed')
    .eq('user_id', userId)
    .single();

  const recentlyViewed = existing?.recently_viewed || [];
  const updatedRecentlyViewed = [
    productId,
    ...recentlyViewed.filter(id => id !== productId)
  ].slice(0, 10); // Keep only the 10 most recent items

  const { error } = await supabase
    .from('user_preferences')
    .upsert({
      user_id: userId,
      recently_viewed: updatedRecentlyViewed
    });

  if (error) throw error;
}