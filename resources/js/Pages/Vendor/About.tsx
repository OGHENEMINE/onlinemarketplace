/* eslint-disable prettier/prettier */
import Breadcrumb from '@/Components/Breadcrumb';
import FAQ from '@/Components/FAQ';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function About() {
    return (
        <Authenticated>
            <section>
                <div className="py-5 text-center lg:py-10">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Become a Vendor
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Join our marketplace and reach thousands of customers
                        daily.
                    </p>
                </div>
                <div className="my-5 lg:my-10">
                    <Breadcrumb
                        items={[
                            {
                                label: 'Home',
                                href: '/',
                            },
                            {
                                label: 'Become a vendor',
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-primary">
                        Create a store
                    </h3>
                    <p className="text-4xl font-bold text-white">
                        Turn Your Passion into Profit—Open Your Store Today!
                    </p>
                    <p>
                        Join our platform and give your business the visibility
                        it deserves. Register your store in minutes, reach more
                        customers, and manage everything from one powerful
                        dashboard. Start selling effortlessly and grow your
                        brand with ease!
                    </p>
                    <Link
                        href={route('vendors.create')}
                        className="flex w-full items-center justify-center gap-x-2 rounded-sm border border-primary px-10 py-3 text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:ring focus:ring-primary/80 lg:w-fit"
                    >
                        Register Now
                        <ArrowRight className="size-5" strokeWidth={1} />
                    </Link>
                </div>
                <div className="relative order-2 h-72 w-full overflow-hidden rounded-md lg:h-[400px] lg:w-[500px]">
                    <img
                        className="absolute h-full w-full object-cover"
                        src="/register_business2.jpg"
                        alt="Register your business"
                    />
                </div>
            </section>
            <section className="my-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="relative order-2 h-72 w-full overflow-hidden rounded-md lg:order-1 lg:h-[400px] lg:w-[500px]">
                    <img
                        className="absolute h-full w-full object-cover"
                        src="/list_products.jpg"
                        alt="Register your business"
                    />
                </div>
                <div className="order-1 space-y-5 lg:order-2">
                    <h3 className="text-lg font-bold text-primary">
                        List your products
                    </h3>
                    <p className="text-4xl font-bold text-white">
                        List Your Products in Minutes
                    </p>
                    <p>
                        Getting started is easy! Simply upload your product
                        details, set your prices, and publish your listings.
                        Customers can browse, buy, and connect with you
                        instantly. Start selling today!
                    </p>
                    <Link
                        href={route('vendors.create')}
                        className="flex w-full items-center justify-center gap-x-2 rounded-sm border border-primary px-10 py-3 text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:ring focus:ring-primary/80 lg:w-fit"
                    >
                        Get Started
                        <ArrowRight className="size-5" strokeWidth={1} />
                    </Link>
                </div>
            </section>
            <section className="mb-20 grid grid-cols-1 gap-10 lg:mb-20 lg:grid-cols-2">
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-primary">
                        Start selling
                    </h3>
                    <p className="text-4xl font-bold text-white">
                        Sell More, Earn More
                    </p>
                    <p>
                        Reach a wider audience and watch your sales soar. Our
                        platform connects you with ready-to-buy customers,
                        helping you maximize profits and grow your business
                        faster. Start selling and scale your success today!
                    </p>
                    <Link
                        href={route('vendors.create')}
                        className="flex w-full items-center justify-center gap-x-2 rounded-sm border border-primary px-10 py-3 text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white focus:bg-primary focus:text-white focus:ring focus:ring-primary/80 lg:w-fit"
                    >
                        Start Now
                        <ArrowRight className="size-5" strokeWidth={1} />
                    </Link>
                </div>
                <div className="relative order-2 h-72 w-full overflow-hidden rounded-md lg:h-[400px] lg:w-[500px]">
                    <img
                        className="absolute h-full w-full object-cover"
                        src="/sellmore.jpg"
                        alt="Register your business"
                    />
                </div>
            </section>
            <section>
                <div className="mb-10 space-y-3 text-center text-3xl font-bold dark:text-white">
                    <h2 className="text-lg text-primary">
                        Frequently Asked Questions
                    </h2>
                    <p>Everything You Need to Know – Answered!</p>
                </div>
                <div className="">
                    <FAQ />

                    <div className="mt-5 space-y-4 text-center">
                        <div>
                            <h2 className="text-xl font-semibold text-primary">
                                Still have questions?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                Need more help? Our team is ready to
                                assist—reach out anytime!
                            </p>
                        </div>
                        <Link
                            href={route('vendors.create')}
                            className="hover:bg-primary-dark mt-3 inline-flex items-center gap-x-2 rounded-sm bg-primary px-4 py-3 text-white transition-all"
                        >
                            <Mail className="size-5" strokeWidth={1} />
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </Authenticated>
    );
}
