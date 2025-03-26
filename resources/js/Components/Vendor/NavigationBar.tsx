/* eslint-disable prettier/prettier */
import { Link, usePage } from '@inertiajs/react';
import {
    FileBoxIcon,
    Logs,
    MoreHorizontal,
    Package,
    Store,
    X,
} from 'lucide-react';
// import { useState } from 'react';
import { PageProps } from '@/types';
import { useState } from 'react';
import NavLink from '../Admin/NavLink';
import Avatar from '../Avatar';

export default function NavigationBar() {
    const { auth } = usePage<PageProps>().props; // Get `auth` from shared data
    const [toggleState, setToggleState] = useState(false);

    const NavItems = [
        {
            label: 'Dasboard',
            icon: <Logs className="size-4" />,
            href: route('vendors.show', auth?.user?.id),
            active: route().current('vendors.show', auth?.user?.id),
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
            icon: <FileBoxIcon className="size-4" />,
            href: '#',
            active: false,
        },
    ];
    console.log(toggleState);
    return (
        <div
            className={`fixed bottom-0 top-0 z-30 w-full border bg-white transition-all duration-300 ease-in-out md:w-2/3 lg:w-60 dark:border-zinc-800/60 dark:bg-neutral-900 ${toggleState ? '' : 'hidden lg:block'}`}
        >
            <div className="flex h-full flex-col justify-between gap-y-8">
                <div className="flex items-center justify-between pt-10 lg:justify-center">
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

                <div className="grow space-y-2 overflow-hidden overflow-y-auto px-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
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
                <div className="flex items-start gap-x-2 border-t px-3 py-3 text-sm dark:border-neutral-800">
                    <Avatar />
                    <div className="w-full">
                        <div className="flex w-full items-center justify-between font-bold text-white">
                            Store name
                            <MoreHorizontal className="size-5 dark:text-neutral-500" />
                        </div>
                        <span className="block dark:text-neutral-500">
                            Store Category
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
