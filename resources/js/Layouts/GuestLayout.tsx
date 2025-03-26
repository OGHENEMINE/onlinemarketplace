import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen scroll-smooth bg-gray-100 dark:bg-neutral-950 dark:text-gray-400">
            <div className="text-sm">{children}</div>
        </div>
    );
}
