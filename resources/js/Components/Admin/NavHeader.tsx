/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import { Bell, ChevronRight, Home, Plus, Search, Settings } from 'lucide-react';

export default function NavHeader({
    headerButton,
    pageTitle,
}: {
    headerButton?: {
        label: string;
        href: string;
    };
    pageTitle?: string;
}) {
    return (
        <header className="pb-2 text-sm dark:bg-inherit">
            <div className="mb-5 flex items-center justify-between gap-x-5">
                {/* Search box */}
                <div className="flex w-full max-w-md items-center">
                    <input
                        className="w-full rounded-md border-gray-300 bg-gray-50 px-4 text-sm outline-none focus-within:ring-0 focus:border-primary dark:border-neutral-800 dark:bg-inherit"
                        type="text"
                        placeholder="Enter search..."
                    />
                    <Search className="-ml-8 size-3.5 dark:text-neutral-600" />
                </div>

                {/* Notification and settings box */}
                <div className="flex items-center justify-between gap-x-2 lg:gap-x-4">
                    <button className="group relative inline-block rounded-lg border bg-white p-2.5 transition-all duration-150 ease-in-out lg:p-1.5 dark:border-neutral-700 dark:bg-inherit dark:hover:bg-neutral-700">
                        <Bell className="size-5 lg:size-4 dark:text-neutral-500 dark:group-hover:text-neutral-200" />
                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-white lg:-right-1.5 lg:-top-1.5 lg:h-5 lg:w-5 lg:text-xs">
                            0
                        </span>
                    </button>
                    <button className="group relative inline-block rounded-lg border bg-white p-2.5 transition-all duration-150 ease-in-out lg:p-1.5 dark:border-neutral-700 dark:bg-inherit dark:hover:bg-neutral-700">
                        <Settings className="size-5 lg:size-4 dark:text-neutral-500 dark:group-hover:text-neutral-200" />
                    </button>
                </div>
            </div>
            {route().current('admin.*.index') && (
                <div className="flex w-full items-center justify-between rounded-md border bg-white px-5 py-3 dark:border-zinc-800/60 dark:bg-neutral-500/10 dark:backdrop-blur-xl">
                    <div className="flex items-center gap-x-2">
                        <Link href="/">
                            <Home className="size-5" />
                        </Link>
                        <ChevronRight className="size-3" />
                        <h1 className="text-lg">{pageTitle && pageTitle}</h1>
                    </div>
                    {headerButton && (
                        <Link
                            href={headerButton.href}
                            className="flex items-center gap-x-1 rounded border p-2 hover:bg-primary hover:text-white dark:border-neutral-800 dark:hover:bg-neutral-800"
                        >
                            <span>
                                <Plus className="size-4" />
                            </span>
                            <span>{headerButton.label}</span>
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}
