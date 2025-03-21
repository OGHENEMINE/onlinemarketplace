/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import CategoryNavigation from '@/Components/CategoryNavigation';
import FilterNavigation from '@/Components/FilterNavigation';
import ProductCard from '@/Components/ProductCard';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowUpDown, ChevronRight, Filter, RefreshCcw, X } from 'lucide-react';
import { useState } from 'react';

export default function Index({ products }: { products: { data: Product[] } }) {
    const [form, setForm] = useState({
        state: '',
        LGA: '',
        city: '',
        priceRange: '',
    });
    const [toggle, setToggleState] = useState(false);
    console.log(products);

    const handleReset = () => {
        setForm({
            state: '',
            LGA: '',
            city: '',
            priceRange: '',
        });
    };
    return (
        <Authenticated>
            {({ handleAddToCart }) => (
                <section>
                    <div className="flex items-center gap-x-2">
                        <Link className="dark:hover:text-primary" href="#">
                            Home
                        </Link>
                        <ChevronRight className="size-4" strokeWidth={1} />
                        <p>Products</p>
                    </div>

                    {/* FOR LARGE DEVICE */}
                    <div className="mt-5 flex gap-x-7 tracking-wider max-md:hidden">
                        <div className="flex w-full max-w-[220px] items-center justify-between font-bold">
                            <span className="">Filter:</span>
                            <Button className="flex items-center gap-x-1" onClick={handleReset}>
                                <RefreshCcw className="size-4" />
                                <span>Reset</span>
                            </Button>
                        </div>
                        <div className="flex grow items-center justify-end font-bold">
                            Sort By:
                        </div>
                    </div>

                    {/* FOR MOBILE VIEW */}
                    <div className="mt-5 flex items-center justify-between lg:hidden">
                        <Button
                            onClick={() => setToggleState(true)}
                            variant="outline"
                            className="flex w-fit items-center gap-x-1 rounded-md px-3 font-bold text-primary hover:bg-primary hover:text-white focus:text-white"
                        >
                            Filter <Filter className="size-4" />
                        </Button>
                        <Button
                            variant="outline"
                            className="flex w-fit items-center gap-x-1 rounded-md px-3 font-bold text-primary hover:bg-primary hover:text-white focus:text-white"
                        >
                            Sort by price <ArrowUpDown className="size-4" />
                        </Button>

                        <nav
                            className={`absolute bottom-0 top-0 z-20 px-5 py-10 transition-all duration-500 ease-in-out dark:bg-neutral-800 ${toggle ? 'left-0 right-10' : '-left-full'}`}
                        >
                            <FilterNavigation
                                setForm={setForm}
                                form={form}
                                className="mt-4"
                            />
                            <Button
                                onClick={() => setToggleState(false)}
                                variant="ghost"
                                className="absolute right-4 top-4"
                            >
                                <X className="size-6" />
                            </Button>
                        </nav>
                    </div>

                    <div className="flex gap-x-7">
                        <div className="w-full max-w-[220px] max-md:hidden">
                            <FilterNavigation form={form} setForm={setForm} />
                        </div>
                        <div className="mb-10 grid grow grid-cols-4 gap-5 max-md:grid-cols-2 max-md:gap-x-3">
                            {products?.data?.map((product) => (
                                <ProductCard
                                    handleAddToCart={handleAddToCart}
                                    key={product?.name}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Authenticated>
    );
}
