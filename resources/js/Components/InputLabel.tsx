import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={`block text-sm tracking-wider dark:text-neutral-400 ${className} `}
        >
            {value ? value : children}
        </label>
    );
}
