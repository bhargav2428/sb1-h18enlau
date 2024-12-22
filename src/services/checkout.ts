import { supabase } from '@/lib/supabase';
import type { CartItem } from '@/types';

interface CheckoutData {
  items: CartItem[];
  total: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: {
    type: 'credit_card' | 'paypal';
    details: Record<string, any>;
  };
}

export async function createOrder(checkoutData: CheckoutData) {
  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        items: checkoutData.items,
        total: checkoutData.total,
        shipping_address: checkoutData.shippingAddress,
        billing_address: checkoutData.billingAddress,
        payment_method: checkoutData.paymentMethod,
        status: 'pending'
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function processPayment(orderId: string, paymentDetails: any) {
  // Implement payment processing logic here
  // This is just a placeholder that simulates a successful payment
  const { error } = await supabase
    .from('orders')
    .update({ status: 'paid', payment_processed_at: new Date().toISOString() })
    .eq('id', orderId);

  if (error) throw error;
  return true;
}