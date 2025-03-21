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

    console.log(stores);

    function handleDelete(e: MouseEvent<HTMLButtonElement>, storeId: number) {
        e.preventDefault();
        router.delete(route('admin.stores.destroy', storeId));
    }

    return (
        <AdminLayout pageTitle="stores" headerButton={buttonItem}>
            <Pagination
                lastPage={stores?.last_page}
                links={stores?.links}
                from={stores?.from}
                to={stores?.to}
                total={stores?.total}
            />

            <TableLayout>
                <TableHeader>
                    <TableHead>STORE NAME</TableHead>
                    <TableHead>VENDOR</TableHead>
                    <TableHead>LOCATION</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                </TableHeader>
                <TableBody>
                    {stores?.data.map((store) => (
                        <tr
                            className="even:bg-neutral-800/60"
                            key={store?.name}
                        >
                            <TableData>{store?.name}</TableData>
                            <TableData>{`${store?.user?.firstname} ${store?.user?.lastname}`}</TableData>
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
                            <TableData className="flex items-center gap-x-4">
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
