/* eslint-disable prettier/prettier */
import { InertiaLinkProps, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'flex items-center justify-between rounded-md px-2 py-2.5 lg:text-sm transition-all duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ' +
                (active
                    ? 'bg-primary font-bold text-white hover:bg-primary'
                    : 'hover:text-gray-700 dark:hover:bg-neutral-800 dark:hover:text-gray-300') +
                className
            }
        >
            {children}{' '}
            <ChevronRight className={`size-4 ${active ? '' : 'hidden'}`} />
            {/* <span className="inline-block h-2 w-full bg-white"></span> */}
        </Link>
    );
}
