/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import { Edit3 } from 'lucide-react';

export default function TableActionLink({ href }: { href: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-x-1 rounded-lg bg-primary p-1.5 px-3 font-semibold tracking-wide text-white transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary active:scale-95 disabled:pointer-events-none disabled:text-primary/50 disabled:opacity-50 dark:focus:bg-primary/80 dark:focus:text-white"
        >
            <Edit3 className="size-4" /> Edit
        </Link>
    );
}
