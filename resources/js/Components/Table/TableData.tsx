/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';

export default function TableData({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <td
            className={`whitespace-nowrap px-6 py-2 text-sm font-medium text-gray-800 dark:text-neutral-200 ${className}`}
        >
            {children}
        </td>
    );
}
