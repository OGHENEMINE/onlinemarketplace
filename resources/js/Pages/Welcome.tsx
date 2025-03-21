import CategoryNavigation from '@/Components/CategoryNavigation';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Welcome() {
    return (
        <Authenticated>
            {() => (
                <section className="flex gap-x-7 text-sm">
                    <CategoryNavigation className="max-w-[205px]" />
                    <div className="grow">content</div>
                </section>
            )}
        </Authenticated>
    );
}
