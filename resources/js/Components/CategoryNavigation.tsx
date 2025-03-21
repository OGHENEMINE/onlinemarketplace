/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import {
    ChevronRight,
    Cookie,
    HeartPulse,
    House,
    Monitor,
    Shirt,
    TabletSmartphone,
    WashingMachine,
} from 'lucide-react';

export default function CategoryNavigation({
    className,
}: {
    className?: string;
}) {
    return (
        <aside
            className={`w-full rounded bg-neutral-900 px-2 ${
                className
            }`}
        >
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <Shirt className="size-5" strokeWidth={1} />
                    Fashion
                </span>
                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <HeartPulse className="size-5" strokeWidth={1} />
                    Beauty & Health
                </span>
                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <House className="size-5" strokeWidth={1} />
                    Household & Office
                </span>

                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <TabletSmartphone className="size-5" strokeWidth={1} />
                    Phones & Tablets
                </span>
                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <Cookie className="size-5" strokeWidth={1} />
                    Food
                </span>
                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <WashingMachine className="size-5" strokeWidth={1} />
                    Electronics
                </span>
                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link
                href="#"
                className="flex items-center justify-between border-b border-neutral-400 py-3 hover:text-primary dark:border-neutral-800"
            >
                <span className="flex items-center gap-x-2">
                    <Monitor className="size-5" strokeWidth={1} />
                    Computers & Accessories
                </span>
                <ChevronRight className="size-4" strokeWidth={1} />
            </Link>
            <Link href="#" className="inline-block py-3 hover:text-primary">
                See More Categories
            </Link>
        </aside>
    );
}
