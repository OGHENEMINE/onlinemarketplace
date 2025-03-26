/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import Pagination from '@/Components/Pagination';
import TableActionLink from '@/Components/Table/TableActionLink';
import TableBody from '@/Components/Table/TableBody';
import TableData from '@/Components/Table/TableData';
import TableHead from '@/Components/Table/TableHead';
import TableHeader from '@/Components/Table/TableHeader';
import TableLayout from '@/Components/Table/TableLayout';
import AdminLayout from '@/Layouts/AdminLayout';
import { Store } from '@/types';
import { router } from '@inertiajs/react';
import {
    ChevronsUpDown,
    CircleCheckBig,
    ClockArrowDown,
    Store as StoreIcon,
    Trash2,
} from 'lucide-react';
import { MouseEvent } from 'react';

export default function Index({
    stores,
}: {
    stores: {
        data: Store[];
        from: number;
        to: number;
        total: number;
        last_page: number;
        links: { url: string; active: boolean; label: string }[];
    };
}) {
    const buttonItem = {
        label: 'Add a Store',
        href: route('admin.stores.create'),
    };

    function handleDelete(e: MouseEvent<HTMLButtonElement>, storeId: number) {
        e.preventDefault();
        router.delete(route('admin.stores.destroy', storeId));
    }

    return (
        <AdminLayout pageTitle="stores" headerButton={buttonItem}>
            <div className="my-2 flex w-full items-center justify-between gap-4 rounded-md border bg-white p-3 text-sm max-md:flex-wrap dark:border-zinc-800/30 dark:bg-neutral-800/20 lg:dark:backdrop-blur-md">
                <div className="relative w-full max-w-sm">
                    <label
                        htmlFor="category"
                        className="mb-1 block text-sm font-bold tracking-wider"
                    >
                        Category
                    </label>
                    <div className="relative">
                        <select
                            id="category"
                            name="category"
                            className="w-full appearance-none rounded-md border border-none border-gray-300 bg-white px-4 py-1.5 pr-10 text-sm text-gray-900 shadow-sm outline-none focus:border-none focus:outline-none focus:ring-0 dark:bg-neutral-900 cursor-pointer dark:text-white"
                        >
                            <option value="fashion">Fashion</option>
                            <option value="electronics">Electronics</option>
                            <option value="home">Home & Living</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>
                </div>
                <div className="relative w-full max-w-sm">
                    <label
                        htmlFor="price"
                        className="mb-1 block text-sm font-bold tracking-wider"
                    >
                        Price
                    </label>
                    <div className="relative">
                        <select
                            id="category"
                            name="category"
                            className="w-full appearance-none rounded-md border border-none border-gray-300 bg-white px-4 py-1.5 pr-10 text-sm text-gray-900 shadow-sm outline-none focus:border-none focus:outline-none focus:ring-0 dark:bg-neutral-900 cursor-pointer dark:text-white"
                        >
                            <option value="fashion">Fashion</option>
                            <option value="electronics">Electronics</option>
                            <option value="home">Home & Living</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>
                </div>
                <div className="relative w-full max-w-sm">
                    <label
                        htmlFor="status"
                        className="mb-1 block text-sm font-bold tracking-wider"
                    >
                        Status
                    </label>
                    <div className="relative">
                        <select
                            id="category"
                            name="category"
                            className="w-full appearance-none rounded-md border border-none border-gray-300 bg-white px-4 py-1.5 pr-10 text-sm text-gray-900 shadow-sm outline-none focus:border-none focus:outline-none focus:ring-0 dark:bg-neutral-900 cursor-pointer dark:text-white"
                        >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>
                </div>
                <div className="relative w-full max-w-sm">
                    <label
                        htmlFor="store"
                        className="mb-1 block text-sm font-bold tracking-wider"
                    >
                        Store
                    </label>
                    <div className="relative">
                        <select
                            id="store"
                            name="store"
                            className="w-full appearance-none rounded-md border border-none border-gray-300 bg-white px-4 py-1.5 pr-10 text-sm text-gray-900 shadow-sm outline-none focus:border-none focus:outline-none focus:ring-0 dark:bg-neutral-900 cursor-pointer dark:text-white"
                        >
                            <option value="fashion">All store</option>
                            <option value="electronics">Electronics</option>
                            <option value="home">Home & Living</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>
                </div>
            </div>
            <Pagination
                lastPage={stores?.last_page}
                links={stores?.links}
                from={stores?.from}
                to={stores?.to}
                total={stores?.total}
            />

            <TableLayout>
                <TableHeader>
                    <TableHead>
                        <div className="flex items-center gap-x-2">
                            STORE NAME
                            <ChevronsUpDown className="size-4" />
                        </div>
                    </TableHead>
                    <TableHead>
                        <div className="flex items-center gap-x-2">
                            VENDOR <ChevronsUpDown className="size-4" />
                        </div>
                    </TableHead>
                    <TableHead>
                        <div className="flex items-center gap-x-2">
                            LOCATION <ChevronsUpDown className="size-4" />
                        </div>
                    </TableHead>
                    <TableHead>
                        <div className="flex items-center gap-x-2">
                            STATUS
                            <ChevronsUpDown className="size-4" />
                        </div>
                    </TableHead>
                    <TableHead>
                        <span className="flex items-center justify-end">
                            ACTIONS
                        </span>
                    </TableHead>
                </TableHeader>
                <TableBody>
                    {stores?.data.map((store) => (
                        <tr
                            className="dark:even:bg-neutral-800/25"
                            key={store?.id}
                        >
                            <TableData>{store?.name}</TableData>
                            <TableData>{`${store?.vendor?.firstname} ${store?.vendor?.lastname}`}</TableData>
                            <TableData>
                                <span className="capitalize">{`${store?.state}, ${store.LGA}`}</span>
                            </TableData>
                            <TableData>
                                <span
                                    className={`flex w-fit items-center gap-x-1.5 rounded-lg px-2 py-1 text-sm tracking-wider ${
                                        store?.published_at === null
                                            ? 'bg-yellow-900/15 text-yellow-500'
                                            : 'bg-teal-900/20 text-teal-400'
                                    }`}
                                >
                                    {store?.published_at === null ? (
                                        <>
                                            <span>Draft</span>
                                            <ClockArrowDown className="size-4" />
                                        </>
                                    ) : (
                                        <>
                                            <CircleCheckBig className="size-4" />
                                            <span>Published</span>
                                        </>
                                    )}
                                </span>
                            </TableData>
                            <TableData className="flex items-center justify-end gap-x-1">
                                <TableActionLink
                                    href={route('admin.stores.edit', store?.id)}
                                />
                                <Button
                                    onClick={(e) => handleDelete(e, store?.id)}
                                    variant="ghost"
                                    className="flex items-center gap-x-1"
                                    color="danger"
                                >
                                    <Trash2 className="size-4" /> Delete
                                </Button>
                            </TableData>
                        </tr>
                    ))}
                    {stores?.data?.length === 0 && (
                        <tr>
                            <td colSpan={5} className="h-[250px] text-center">
                                <p className="inline-flex flex-col items-center justify-center rounded-md px-4 py-2 text-neutral-400 dark:text-primary/25">
                                    No store to display
                                    <StoreIcon
                                        className="mt-2 size-16"
                                        strokeWidth={0.5}
                                    />
                                </p>
                            </td>
                        </tr>
                    )}
                </TableBody>
            </TableLayout>
        </AdminLayout>
    );
}
