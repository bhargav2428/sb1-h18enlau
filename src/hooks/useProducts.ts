import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Product } from '@/types';

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let query = supabase.from('products').select('*');
        
        if (category) {
          query = query.eq('category', category);
        }

        const { data, error } = await query;
        
        if (error) throw error;
        setProducts(data as Product[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, loading, error };
}