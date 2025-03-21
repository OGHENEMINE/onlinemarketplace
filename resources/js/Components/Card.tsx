/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';

export default function Card({
    children,
    title,
    className,
}: PropsWithChildren<{ className?: string; title?: string }>) {
    return (
        <div
            className={`w-full rounded bg-white dark:backdrop-blur-lg dark:bg-neutral-500/10 ${className}`}
        >
            <h1 className="text-center text-lg">{title}</h1>
            {children}
        </div>
    );
}
