/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';
import {
    LogOut,
    Logs,
    Menu,
    Package,
    Store,
    UserCircle,
    X,
} from 'lucide-react';
// import { useState } from 'react';
import { useState } from 'react';
import Button from '../Button';
import NavLink from './NavLink';

export default function NavigationBar() {
    const [toggleState, setToggleState] = useState(false);
    const NavItems = [
        {
            label: 'Dasboard',
            icon: <Logs className="size-4" />,
            href: route('admin.dashboard'),
            active: route().current('admin.dashboard'),
        },
        {
            label: 'Users',
            icon: <UserCircle className="size-4" />,
            href: route('admin.users.index'),
            active: route().current('admin.users.*'),
        },
        {
            label: 'Stores',
            icon: <Store className="size-4" />,
            href: route('admin.stores.index'),
            active: route().current('admin.stores.*'),
        },
        {
            label: 'Products',
            icon: <Package className="size-4" />,
            href: route('admin.products.index'),
            active: route().current('admin.products.*'),
        },
        {
            label: 'Orders',
            icon: <Package className="size-4" />,
            href: '#',
            active: false,
        },
        {
            label: 'Support',
            icon: <Package className="size-4" />,
            href: '#',
            active: false,
        },
    ];
    console.log(toggleState);
    return (
        <>
            <div className="fixed left-0 right-0 top-0 z-30 flex justify-between bg-neutral-800 px-5 py-6 shadow transition-all duration-100 ease-in-out lg:hidden dark:bg-neutral-900 lg:dark:bg-inherit">
                <Link
                    className="text-xl font-semibold text-black dark:text-white"
                    href="#"
                    aria-label="Brand"
                >
                    Brand
                </Link>
                <button
                    onClick={() => setToggleState(true)}
                    className="lg:hidden"
                >
                    <Menu className="size-7" />
                </button>
            </div>
            <div
                className={`fixed bottom-0 z-30 w-full rounded-md border bg-white px-3 py-5 backdrop-blur-xl transition-all duration-300 ease-in-out md:inset-y-3 top-0 md:left-2 md:w-2/3 lg:w-60 dark:border-zinc-800/60 dark:bg-neutral-500/10 ${toggleState ? '' : 'hidden lg:block'}`}
            >
                <div className="flex h-full flex-col justify-between gap-y-8">
                    <div className="flex items-center justify-between lg:justify-center">
                        <Link
                            className="text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
                            href="#"
                            aria-label="Brand"
                        >
                            Brand
                        </Link>

                        <button
                            onClick={() => setToggleState(false)}
                            className="lg:hidden"
                        >
                            <X className="size-8" />
                        </button>
                    </div>

                    <div className="grow space-y-2 overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
                        {NavItems.map((item, index) => (
                            <NavLink
                                key={index}
                                href={item.href}
                                active={item.active}
                                // aria-current="page"
                            >
                                <span className="flex items-center gap-x-2">
                                    {item.icon} {item.label}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                    <div>
                        <Button
                            variant="ghost"
                            className="flex w-full items-center justify-center gap-2 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                        >
                            <LogOut className="size-4" />
                            Log out
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
