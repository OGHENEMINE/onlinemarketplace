/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import { Edit3 } from 'lucide-react';

export default function TableActionLink({ href }: { href: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-x-1 rounded-md p-2 text-primary disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-primary/10 dark:focus:bg-primary/15 dark:focus:text-primary"
        >
            <Edit3 className="size-4" /> Edit
        </Link>
    );
}
