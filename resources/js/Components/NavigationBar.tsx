/* eslint-disable prettier/prettier */
import { cartItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    ChevronDown,
    Gem,
    Heart,
    LogIn,
    LogOut,
    Logs,
    MapPin,
    Menu,
    Search,
    ShoppingCart,
    X,
} from 'lucide-react';
import { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';
import Button from './Button';
import CategoryNavigation from './CategoryNavigation';
import NavLink from './NavLink';

export default function NavigationBar({ cart }: { cart: cartItem[] }) {
    const user = usePage().props.auth.user;
    const [toggleState, setToggleState] = useState(false);
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
            href: '#',
            active: false,
        },
    ];
    return (
        <nav className="relative shadow-md dark:bg-neutral-800 dark:shadow">
            {/* Top Nav */}
            <div
                className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between px-5 py-5 lg:pb-6 lg:pt-8 ${toggleState ? 'blur lg:blur-none' : ''}`}
            >
                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>

                <div className="hidden w-full max-w-lg items-center max-md:bg-neutral-800 max-md:px-5 max-md:py-3 lg:block dark:text-white">
                    <input
                        className="w-full rounded-md border-neutral-400 bg-inherit p-3 text-sm tracking-wider outline-none focus:border-neutral-400 focus:outline-none focus:ring-0 dark:border-neutral-600"
                        placeholder="Search for products and categories"
                        type="search"
                        name="search"
                        id="search"
                    />
                    <Search className="-ml-10 size-4 text-neutral-400 dark:text-neutral-600" />
                </div>
                <div className="flex items-center">
                    {/* Wishlist & Cart Group */}
                    <div className="flex items-center gap-x-5 text-sm tracking-wider text-neutral-700 dark:text-neutral-400">
                        <span className="relative flex flex-col items-center gap-y-0.5">
                            <Heart className="lg:size-8" strokeWidth={1} />
                            <span>Wishlist</span>
                        </span>
                        <Link
                            href={route('cart')}
                            className="relative flex flex-col items-center justify-center gap-y-0.5"
                        >
                            <ShoppingCart
                                className="lg:size-8"
                                strokeWidth={1}
                            />
                            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary font-bold text-white lg:text-xs">
                                {cart.length}
                            </span>
                            <span>Cart</span>
                        </Link>
                    </div>

                    {/* Toggle Button (No Extra Space) */}
                    <button
                        onClick={() => setToggleState(true)}
                        className="ml-4 text-neutral-100 lg:hidden"
                    >
                        <Menu className="size-6" />
                    </button>

                    {/* Separator */}
                    <span className="mx-3 hidden h-6 w-0.5 bg-neutral-400 lg:block dark:bg-neutral-600"></span>

                    {/* Authentication Buttons */}
                    <div>
                        {user ? (
                            <Button className="hidden items-center gap-x-1 lg:flex">
                                <LogOut className="size-4" /> Sign out
                            </Button>
                        ) : (
                            <Button className="hidden items-center gap-x-1 lg:flex">
                                Sign In <LogIn className="size-4" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            {/* Top Nav Ends Here */}

            {/* MOBILE SEARCH */}
            <div className="w-full max-w-lg items-center px-5 pb-3 max-md:bg-neutral-800 lg:hidden dark:text-white">
                <input
                    className="w-full rounded-md border-neutral-400 bg-inherit p-3 text-sm tracking-wider outline-none focus:border-neutral-400 focus:outline-none focus:ring-0 dark:border-neutral-600"
                    placeholder="Search for products and categories"
                    type="search"
                    name="search"
                    id="search"
                />
                <Search className="-ml-10 size-4 text-neutral-400 dark:text-neutral-600" />
            </div>

            <span className="h-[1px] w-full bg-neutral-300 lg:block dark:bg-neutral-600"></span>

            <button
                onClick={() => setToggleState(false)}
                className={`absolute right-8 top-5 text-neutral-100 hover:text-neutral-100 lg:hidden ${toggleState ? '' : 'hidden'}`}
            >
                <X className="size-8" />
            </button>

            {/* Bottom Nav Start Here */}
            <div
                className={`fixed bottom-0 top-0 z-20 bg-white text-neutral-700 transition-all duration-500 ease-in-out lg:relative dark:bg-neutral-800 dark:text-neutral-400 ${toggleState ? 'left-0 right-1/4' : '-left-full lg:left-0'}`}
            >
                <div className="mx-auto items-center justify-between px-5 lg:flex lg:max-w-6xl">
                    <div className="group relative hidden cursor-pointer items-center border-neutral-300 bg-primary p-3 text-sm lg:flex dark:border-neutral-600">
                        <Logs className="size-6 text-white" />
                        <span className="ml-2 font-bold text-white">
                            Browse all categories
                        </span>
                        <ChevronDown className="size-4 text-white" />

                        {!route().current('home') && (
                            <CategoryNavigation className="absolute left-0 top-full z-10 hidden w-full shadow-lg group-hover:block" />
                        )}
                    </div>

                    <div className="grow items-center justify-between space-y-5 max-md:py-10 lg:ml-6 lg:flex lg:space-y-0 lg:text-sm">
                        <div className="items-center gap-x-6 space-y-5 lg:flex lg:space-y-0 lg:pt-0">
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
                        </div>
                        <Link
                            href="#"
                            className="flex items-center gap-x-1 border-b pb-4 font-bold lg:border-none lg:pb-0"
                        >
                            <MapPin className="size-6" />
                            <span>Track Order</span>
                        </Link>
                        <Button className="flex w-full items-center justify-between gap-x-1 py-3 lg:hidden">
                            <span>Log out</span>
                            <LogOut className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Bottom Nav Ends Here */}
        </nav>
    );
}
