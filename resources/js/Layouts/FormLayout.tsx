/* eslint-disable prettier/prettier */
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function FormLayout({
    children,
    head = "OnlinemarketNG",
}: PropsWithChildren<{ head?: string }>) {
    return (
        <main className="min-h-screen bg-gray-100 dark:bg-neutral-950 dark:text-neutral-200">
            <Head title={head} />
            {children}
        </main>
    );
}
