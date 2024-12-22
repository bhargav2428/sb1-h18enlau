import { supabase } from '@/lib/supabase';
import type { Product } from '@/types';

export async function getProducts(options?: {
  category?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}) {
  let query = supabase.from('products').select('*');

  if (options?.category) {
    query = query.eq('category', options.category);
  }

  if (options?.featured !== undefined) {
    query = query.eq('featured', options.featured);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as Product[];
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Product;
}

export async function searchProducts(query: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .textSearch('name', query)
    .textSearch('description', query);

  if (error) throw error;
  return data as Product[];
}