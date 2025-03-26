/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
    items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center gap-x-2 text-sm">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2">
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="dark:hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <p>{item.label}</p>
                    )}
                    {index < items.length - 1 && (
                        <ChevronRight className="size-4" strokeWidth={1} />
                    )}
                </div>
            ))}
        </div>
    );
}
