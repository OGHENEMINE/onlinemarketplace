import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={`relative flex items-center gap-x-1 rounded-md font-bold transition-all duration-200 ease-in-out lg:text-sm ${
                active
                    ? 'text-primary hover:text-primary'
                    : 'text-gray-700 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-neutral-200'
            } ${className} `}
        >
            {children}
            {active && (
                <span className="absolute -bottom-3.5 left-0 h-[2px] w-full rounded-full bg-primary max-md:hidden"></span>
            )}
        </Link>
    );
}
