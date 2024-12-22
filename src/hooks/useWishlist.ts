import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

export function useWishlist() {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    async function fetchWishlist() {
      const { data, error } = await supabase
        .from('wishlists')
        .select('product_ids')
        .eq('user_id', user.id)
        .single();

      if (!error && data) {
        setWishlist(data.product_ids);
      }
      setLoading(false);
    }

    fetchWishlist();
  }, [user]);

  const addToWishlist = async (productId: string) => {
    if (!user) return;

    const newWishlist = [...wishlist, productId];
    const { error } = await supabase
      .from('wishlists')
      .upsert({ user_id: user.id, product_ids: newWishlist });

    if (!error) {
      setWishlist(newWishlist);
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;

    const newWishlist = wishlist.filter(id => id !== productId);
    const { error } = await supabase
      .from('wishlists')
      .upsert({ user_id: user.id, product_ids: newWishlist });

    if (!error) {
      setWishlist(newWishlist);
    }
  };

  return { wishlist, loading, addToWishlist, removeFromWishlist };
}