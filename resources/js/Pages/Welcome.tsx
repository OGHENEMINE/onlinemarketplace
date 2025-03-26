import CategoryNavigation from '@/Components/CategoryNavigation';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { ArrowRight } from 'lucide-react';

export default function Welcome() {
    return (
        <Authenticated>
            <section className="flex gap-x-7 text-sm">
                <CategoryNavigation className="hidden max-w-[205px] lg:block" />
                <div className="grow">content</div>
            </section>
            <section className="mt-10 space-y-3 rounded-md bg-primary px-5 py-5 text-center lg:mt-20 lg:py-10">
                <div className="text-gray-50">
                    <h2 className="mb-2 text-lg font-bold lg:text-2xl">
                        SUBSCRIBE TO OUR NEWSLETTERS
                    </h2>
                    <p>
                        Get all the latest information on Events, Sales and
                        Offers.
                    </p>
                </div>
                <div className="mx-auto flex w-full max-w-2xl items-center gap-x-2 gap-y-5 max-md:flex-col">
                    <input
                        type="text"
                        name="subscribe"
                        className="w-full rounded-md border-none px-5 py-3 text-black outline-none focus:ring-0"
                        placeholder="Enter email address"
                    />
                    <button className="flex items-center gap-x-1 rounded-md bg-neutral-900 px-3 py-3 lg:px-5">
                        SUBSCRIBE <ArrowRight />
                    </button>
                </div>
            </section>
        </Authenticated>
    );
}
