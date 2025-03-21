/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import InputError from '@/Components/InputError';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Product } from '@/types';
import { currencyFormatter } from '@/util/functions';
import { Mail, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Show({ product }: { product: Product }) {
    let qtyError = '';
    const [qty, setQty] = useState(1);
    const handleQtyIncrease = () => {
        if (qty < product?.stock) {
            setQty(qty + 1);
        } else {
            qtyError = 'Order cannot exceed available stock';
        }
    };
    const handleQtyDecrease = () => {
        if (qty > 1) {
            setQty(qty - 1);
        } else {
            qtyError = 'Minmum order must be One';
        }
    };

    console.log(qtyError);

    return (
        <Authenticated>
            {({ handleAddToCart }) => (
                <section className="mx-auto w-full max-w-6xl px-5 py-5">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                        <div className="relative h-[400px]">
                            <img
                                className="absolute left-0 top-0 h-full w-full object-cover"
                                src="/product-image.jpg"
                                alt={`Image of ${product?.name}`}
                            />
                        </div>
                        <div>
                            <h1 className="mb-2 text-2xl font-bold">
                                {product?.name}
                            </h1>
                            <p>category: {product?.category}</p>
                            <div className="relative flex w-full my-5 items-center border px-7 py-4 lg:w-32 lg:py-2 dark:border-neutral-800">
                                <InputError message={qtyError} />
                                <span className="inline-block w-full text-center">
                                    {qty}
                                </span>
                                <span
                                    onClick={handleQtyDecrease}
                                    className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-gray-200 lg:h-5 lg:w-5 dark:bg-gray-700"
                                >
                                    <Minus className="size-5 lg:size-3.5" />
                                </span>
                                <span
                                    onClick={handleQtyIncrease}
                                    className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-gray-200 lg:h-5 lg:w-5 dark:bg-gray-700"
                                >
                                    <Plus className="size-5 lg:size-3.5" />
                                </span>
                            </div>
                            <div className="border-y border-neutral-800/60 py-7 text-3xl font-bold">
                                <p>
                                    {currencyFormatter(product?.price, 'NGN')}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap items-center gap-4 lg:flex-nowrap lg:gap-3">
                                <Button
                                    size="md"
                                    onClick={() =>
                                        handleAddToCart({
                                            id: product?.id,
                                            name: product?.name,
                                            price: product?.price,
                                            quantity: qty,
                                        })
                                    }
                                    className="flex w-full items-center justify-center gap-1"
                                >
                                    Add to Cart <ShoppingCart className='size-5'/>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="flex w-full items-center justify-center gap-1"
                                >
                                    Contact Vendor <Mail className='size-5'/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </Authenticated>
    );
}
