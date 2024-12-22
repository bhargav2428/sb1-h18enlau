import React from 'react';

// Fallback utility function if `cn` is not defined
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = `rounded-full font-medium transition-all duration-300 
                      disabled:opacity-50 disabled:cursor-not-allowed`;

  const variants = {
    primary: 'bg-gold-600 text-white hover:bg-gold-700 focus:ring-2 focus:ring-gold-400',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gray-200',
    outline: 'border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white focus:ring-2 focus:ring-gold-400',
    ghost: 'text-gray-600 hover:text-gold-600 hover:bg-gold-50 focus:ring-2 focus:ring-gold-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        loading && 'opacity-50 cursor-wait',
        className
      )}
      disabled={loading || props.disabled}
      aria-busy={loading} // Accessibility improvement
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
