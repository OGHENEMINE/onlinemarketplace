/* eslint-disable prettier/prettier */
import NavHeader from '@/Components/Admin/NavHeader';
import NavigationBar from '@/Components/Admin/NavigationBar';
import Alert from '@/Components/Alert';
import { Head } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function AdminLayout({
    head = 'OnlinemarketNG | Administrator',
    headerButton,
    pageTitle,
    children,
}: PropsWithChildren<{
    header?: ReactNode;
    head?: string;
    pageTitle?: string;
    headerButton?: {
        label: string;
        href: string;
    };
}>) {
    // const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen overflow-hidden scroll-smooth bg-gray-200 dark:bg-neutral-950 dark:text-neutral-400">
            <Head title={head} />
            <div className="flex w-full">
                <nav className="relative lg:w-[300px] dark:text-neutral-400">
                    <NavigationBar />
                </nav>
                <main className="w-full grow pb-5 pt-28 lg:py-5 px-5 lg:px-10">
                    <Alert />

                    <NavHeader
                        headerButton={headerButton}
                        pageTitle={pageTitle}
                    />

                    {/* LAYOUT CHILD OR PAGE BODY */}
                    {children}
                </main>
            </div>
        </div>
    );
}
