/* eslint-disable prettier/prettier */
import Alert from '@/Components/Alert';
import Avatar from '@/Components/Avatar';
import NavigationBar from '@/Components/Vendor/NavigationBar';
import { Head } from '@inertiajs/react';
import { Bell, ChevronDown } from 'lucide-react';
import { PropsWithChildren } from 'react';

export default function VendorLayout({
    children,
    head = 'OnlinemarketNG',
}: PropsWithChildren<{ head?: string }>) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 dark:text-neutral-200">
            <Head title={head} />
            <div className="relative flex w-full">
                <nav className="relative lg:w-[296px] dark:text-neutral-400">
                    <NavigationBar />
                </nav>
                <main className="w-full grow">
                    <Alert />
                    <nav className="flex items-center justify-between border-b bg-white px-5 py-4 dark:border-zinc-800/60 dark:bg-neutral-900 dark:text-neutral-200">
                        <div className="w-full max-w-sm">
                            <input
                                type="text"
                                className="w-full rounded-full border-none border-neutral-800 px-5 py-3 text-sm outline-none focus:ring-primary dark:bg-neutral-800"
                                placeholder="Search products and orders..."
                            />
                        </div>

                        <div className="flex items-center gap-x-5">
                            <Bell className="size-4" />
                            <button className="flex items-center gap-x-1">
                                <Avatar />
                                <ChevronDown className="size-5 text-neutral-500" />
                            </button>
                        </div>
                    </nav>

                    {/* LAYOUT CHILD OR PAGE BODY */}
                    <div className="px-5 pb-5 pt-28 lg:px-10 lg:py-5">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
