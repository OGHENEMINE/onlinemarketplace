/* eslint-disable prettier/prettier */
import { cartItem, Product } from '@/types';
import { currencyFormatter } from '@/util/functions';
import { Link } from '@inertiajs/react';
import { MapPin, ShoppingCart } from 'lucide-react';
import Button from './Button';

export default function ProductCard({
    product,
    handleAddToCart,
}: {
    product: Product;
    handleAddToCart: (product: cartItem) => void;
}) {
    return (
        <Link
            href={route('shop.product', product?.id)}
            className="group relative z-0 w-full cursor-pointer overflow-hidden rounded"
            key={product?.name}
        >
            <div className="relative h-52 w-full">
                <img
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    src="/product-image.jpg"
                    alt={`Image of ${product?.name}`}
                />
            </div>
            <div className="w-full space-y-1.5 bg-white p-3 dark:bg-neutral-800">
                <p>{product?.name}</p>
                <p className="flex items-center gap-x-1">
                    <MapPin className="size-4" />
                    Shop name
                </p>
                <p>{currencyFormatter(product?.price, 'NGN')}</p>
                <Button
                    onClick={() =>
                        handleAddToCart({
                            id: product?.id,
                            name: product?.name,
                            price: product?.price,
                            quantity: 1,
                        })
                    }
                    className="flex z-10 w-full items-center justify-center gap-x-1 bg-primary text-xs text-white"
                    variant="solid"
                    size="md"
                >
                    <ShoppingCart className="size-4" fill="white" />
                    Add to cart
                </Button>
            </div>
        </Link>
    );
}
