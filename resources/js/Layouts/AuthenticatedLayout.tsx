import Footer from '@/Components/Footer';
import NavigationBar from '@/Components/NavigationBar';
import { cartItem } from '@/types';
import { addToCart } from '@/util/cart';
import { Head } from '@inertiajs/react';
import { ReactNode, useEffect, useState } from 'react';

type ChildrenFunction = (props: {
    cart: cartItem[];
    setCart: (cart: cartItem[]) => void;
    handleAddToCart: (product: cartItem) => void;
}) => ReactNode;

export default function Authenticated({
    head = 'OnlinemarketNG',
    header,
    children,
}: {
    header?: ReactNode;
    head?: string;
    children: ReactNode | ChildrenFunction;
}) {
    const storedItems = localStorage.getItem('cart');
    const [cart, setCart] = useState<cartItem[]>(
        storedItems ? JSON.parse(storedItems) : [],
    );

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product: cartItem) => {
        addToCart(cart, product, setCart);
    };

    return (
        <div className="min-h-screen scroll-smooth bg-gray-100 dark:bg-neutral-950 dark:text-gray-400">
            <Head title={head} />
            <NavigationBar cart={cart} />
            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main className="mx-auto max-w-6xl px-5 py-5 text-sm">
                {typeof children === 'function'
                    ? children({ cart, setCart, handleAddToCart }) // Invoke function if children is a function
                    : children}
            </main>
            <Footer />
        </div>
    );
}
