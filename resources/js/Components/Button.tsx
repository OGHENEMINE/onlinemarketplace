/* eslint-disable prettier/prettier */
import { ButtonHTMLAttributes } from 'react';

function Button({
    variant = 'solid',
    color = 'primary',
    size = 'sm',
    className = '',
    children,
    disabled,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'solid' | 'outline' | 'ghost';
    color?: 'primary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}) {
    const variantTypes = {
        solid: {
            primary:
                'bg-primary text-white shadow-md hover:bg-primary/90 active:scale-95 disabled:bg-gray-400 disabled:shadow-none focus:ring-primary/50',
            danger: 'bg-red-500 text-white shadow-md hover:bg-red-600 active:scale-95 disabled:bg-red-300 disabled:shadow-none',
        },
        outline: {
            primary:
                'border border-primary text-primary hover:bg-primary/10 active:scale-95 disabled:border-gray-300 disabled:text-gray-400',
            danger: 'border border-red-500 text-red-500 hover:bg-red-100 active:scale-95 disabled:border-red-300 disabled:text-red-300',
        },
        ghost: {
            primary:
                'text-primary hover:bg-primary/10 active:scale-95 disabled:text-gray-400',
            danger: 'text-red-500 hover:bg-red-100 focus:ring-red-500 active:scale-95 disabled:text-red-300',
        },
    };

    const sizeRange = {
        sm: 'px-3 py-1.5',
        md: 'px-5 py-2',
        lg: 'px-7 py-3',
    };

    return (
        <button
            {...props}
            className={`rounded-lg font-semibold tracking-wide transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50 ${variantTypes[variant][color]} ${sizeRange[size]} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
