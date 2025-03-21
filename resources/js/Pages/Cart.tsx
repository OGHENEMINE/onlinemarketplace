/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cartItem } from '@/types';
import { handleRemoveItem } from '@/util/cart';
import { currencyFormatter } from '@/util/functions';
import { Link } from '@inertiajs/react';
import { ArrowLeft, ShoppingBag, ShoppingCart, Trash2 } from 'lucide-react';

export default function Cart() {
    return (
        <AuthenticatedLayout>
            {({ cart, setCart }) => (
                <section className="flex lg:flex-row flex-wrap gap-5 py-10 lg:gap-x-10">
                    <div className="lg:grow">
                        <div className="flex items-center justify-between border-b pb-4 text-sm tracking-wider dark:border-neutral-800">
                            <span className="lg:w-72">Product</span>
                            <span className="w-24 text-center">Price</span>
                            <span className="w-24 text-center">Quantity</span>
                            <span className="w-24 text-center">Subtotal</span>
                        </div>
                        <div>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((item: cartItem) => (
                                        <div
                                            key={item.id}
                                            className="relative flex items-center justify-between border-b border-neutral-800 py-10 text-sm tracking-wider"
                                        >
                                            <span className="font-bold lg:w-72">
                                                {item.name}
                                            </span>
                                            <span className="w-24 text-center">
                                                {currencyFormatter(
                                                    item.price,
                                                    'NGN',
                                                )}
                                            </span>
                                            <span className="w-24 text-center">
                                                {item.quantity}
                                            </span>
                                            <span className="w-24 text-center">
                                                {currencyFormatter(
                                                    item.subtotal ?? 0,
                                                    'NGN',
                                                )}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    handleRemoveItem(
                                                        item.id,
                                                        cart,
                                                        setCart,
                                                    )
                                                }
                                                className="absolute right-0 top-3"
                                            >
                                                <Trash2 className="size-5 text-red-500" />
                                            </button>
                                        </div>
                                    ))}
                                    <Link
                                        href={route('shop')}
                                        className="mt-4 flex w-fit items-center gap-1 rounded-md p-3 text-sm font-bold tracking-wider text-primary transition-all duration-150 ease-in-out hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                                    >
                                        <ArrowLeft className="size-5" />{' '}
                                        CONTINUE SHOPPING
                                    </Link>
                                </>
                            ) : (
                                <div className="space-y-5 py-10">
                                    <p className="text-center text-sm tracking-wider">
                                        <ShoppingCart
                                            className="mx-auto mb-3 size-12 text-primary/50"
                                            strokeWidth={1}
                                        />
                                        <span> No items in the cart.</span>
                                    </p>
                                    <Link
                                        href={route('shop')}
                                        className="mx-auto flex w-full max-w-sm items-center justify-center gap-1 rounded border border-primary p-3 tracking-wider text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                                    >
                                        Continue shopping
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full font-bold lg:max-w-xs">
                        <h2 className="pb-3 text-lg">CART TOTAL</h2>
                        <p className="border-y py-10 dark:border-neutral-800">
                            TOTAL: {}
                        </p>
                        <Button
                            size="md"
                            className="mt-5 flex w-full items-center justify-center gap-1 transition-all duration-150 ease-in-out"
                        >
                            Proceed to checkout{' '}
                            <ShoppingBag className="size-5" />
                        </Button>
                    </div>
                </section>
            )}
        </AuthenticatedLayout>
    );
}
