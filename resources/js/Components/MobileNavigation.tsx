/* eslint-disable prettier/prettier */
import { cartItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    Gem,
    Heart,
    LogOut,
    MapPin,
    Menu,
    Search,
    ShoppingCart,
    X,
} from 'lucide-react';
import { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';
import Button from './Button';
import NavLink from './NavLink';

export default function MobileNavigationBar({ cart }: { cart: cartItem[] }) {
    const [toggleState, setToggleState] = useState(false);
    const [activeNav, setActiveNav] = useState(1);
    const BottomNavItems = [
        {
            label: 'Home',
            href: route('home'),
            active: route().current('home'),
        },
        {
            label: 'Store',
            href: route('shop'),
            active: route().current('shop'),
        },
        {
            label: 'Become a vendor',
            icon: <Gem className="size-4" />,
            href: route('new_vendor'),
            active: route().current('new_vendor'),
        },
    ];
    return (
        <div className="relative shadow-md lg:hidden dark:bg-neutral-900 dark:shadow">
            {/* TOP NAV */}
            <div
                className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-7 lg:hidden lg:pb-6 lg:pt-8 ${toggleState ? 'blur lg:blur-none' : ''}`}
            >
                {/* Toggle Button (No Extra Space) */}
                <button
                    onClick={() => setToggleState(true)}
                    className="text-neutral-100 lg:hidden"
                >
                    <Menu className="size-8" />
                </button>

                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>

                {/* Wishlist & Cart Group */}
                <div className="flex items-center gap-x-3 text-sm tracking-wider text-neutral-700 dark:text-neutral-400">
                    <span className="relative flex flex-col items-center gap-y-0.5">
                        <Heart className="lg:size-8" strokeWidth={1} />
                        <span>Wishlist</span>
                    </span>
                    <Link
                        href={route('cart')}
                        className="relative flex flex-col items-center justify-center gap-y-0.5"
                    >
                        <ShoppingCart className="lg:size-8" strokeWidth={1} />
                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white lg:text-xs">
                            {cart.length}
                        </span>
                        <span>Cart</span>
                    </Link>
                </div>
            </div>

            {/* MOBILE SEARCH */}
            <div className="w-full max-w-lg items-center px-5 pb-3 max-md:bg-neutral-900 lg:hidden dark:text-white">
                <input
                    className="w-full rounded-md border-neutral-400 bg-inherit p-3 text-sm tracking-wider outline-none focus:border-neutral-400 focus:outline-none focus:ring-0 dark:border-neutral-600"
                    placeholder="Search for products and categories"
                    type="search"
                    name="search"
                    id="search"
                />
                <Search className="-ml-10 size-4 text-neutral-400 dark:text-neutral-600" />
            </div>

            <button
                onClick={() => setToggleState(false)}
                className={`absolute right-4 top-5 text-neutral-100 hover:text-neutral-100 lg:hidden ${toggleState ? '' : 'hidden'}`}
            >
                <X className="size-8" />
            </button>

            {/* Bottom Nav Start Here */}
            <div
                className={`fixed bottom-0 top-0 z-20 bg-white px-5 py-10 text-neutral-700 transition-all duration-200 ease-in-out dark:bg-neutral-900 dark:text-neutral-400 ${toggleState ? 'left-0 right-14' : '-left-full'}`}
            >
                <nav className="flex items-center justify-center gap-x-5 border-b border-neutral-800 pb-3 text-center">
                    <div
                        className="relative w-full"
                        onClick={() => setActiveNav(1)}
                    >
                        <span
                            className={`${activeNav === 1 ? 'text-primary' : ''}`}
                        >
                            Menu
                        </span>
                        <span
                            className={`absolute left-0 top-9 inline-block h-0.5 w-full bg-primary transition-all duration-300 ease-in-out ${activeNav === 1 ? '' : 'hidden'}`}
                        />
                    </div>
                    <div
                        className="relative w-full"
                        onClick={() => setActiveNav(2)}
                    >
                        <span
                            className={`${activeNav === 2 ? 'text-primary' : ''}`}
                        >
                            Categories
                        </span>
                        <span
                            className={`absolute left-0 top-9 inline-block h-0.5 w-full bg-primary transition-all duration-300 ease-in-out ${activeNav === 2 ? '' : 'hidden'}`}
                        />
                    </div>
                </nav>
                <div className="mt-10 space-y-5">
                    {BottomNavItems.map((item, index) => (
                        <NavLink
                            key={index}
                            className="flex items-center gap-x-1"
                            href={item.href}
                            active={item.active ?? false}
                        >
                            <span>{item.label}</span>
                            {item.icon && <span>{item.icon}</span>}
                        </NavLink>
                    ))}
                    <Link
                        href="#"
                        className="flex items-center gap-x-1 border-b pb-4 font-bold"
                    >
                        <MapPin className="size-6" />
                        <span>Track Order</span>
                    </Link>
                    <Button className="flex w-full items-center justify-between gap-x-1 py-3">
                        <span>Log out</span>
                        <LogOut className="size-5" />
                    </Button>
                </div>
            </div>
            {/* Bottom Nav Ends Here */}
        </div>
    );
}
