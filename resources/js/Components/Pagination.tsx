/* eslint-disable prettier/prettier */
import { Link } from '@inertiajs/react';

export default function Pagination({
    from,
    to,
    total,
    lastPage,
    links,
}: {
    from: number;
    to: number;
    total: number;
    lastPage: number;
    links: { url: string; label: string; active: boolean }[];
}) {
    if (lastPage <= 1) return null; // Don't render if there's only one page
    return (
        <div className="my-5 flex flex-wrap items-center justify-between gap-5 text-sm">
            <div>
                Showing {from} to {to} from {total} results.
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-5 lg:gap-1">
                {links.map(
                    ({
                        url,
                        label,
                        active,
                    }: {
                        url: string;
                        label: string;
                        active: boolean;
                    }) => (
                        <Link
                            key={label}
                            href={url || '#'}
                            className={`inline-block rounded-md px-4 py-2 transition duration-200 ease-in-out lg:px-3 lg:py-2 ${
                                active
                                    ? 'bg-primary font-bold text-neutral-100'
                                    : url
                                      ? 'hover:bg-neutral-700'
                                      : 'cursor-not-allowed opacity-50'
                            }`}
                            dangerouslySetInnerHTML={{
                                __html: label,
                            }}
                            aria-disabled={!url}
                            aria-label={`Page ${label}`}
                        />
                    ),
                )}
            </div>
        </div>
    );
}
