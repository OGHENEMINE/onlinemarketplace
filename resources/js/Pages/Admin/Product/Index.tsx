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
import { Product } from '@/types';
import { Package, Trash2 } from 'lucide-react';

export default function Index({
    products,
}: {
    products: {
        data: Product[];
        from: number;
        to: number;
        total: number;
        last_page: number;
        links: { url: string; active: boolean; label: string }[];
    };
}) {
    const buttonItem = {
        label: 'Add Product',
        href: route('admin.products.create'),
    };

    return (
        <AdminLayout pageTitle="Products" headerButton={buttonItem}>
            <Pagination
                lastPage={products?.last_page}
                links={products?.links}
                from={products?.from}
                to={products?.to}
                total={products?.total}
            />
            <TableLayout>
                <TableHeader>
                    <TableHead>PRODUCT NAME</TableHead>
                    <TableHead>PRICE</TableHead>
                    <TableHead>CATEGORY</TableHead>
                    <TableHead>STOCK</TableHead>
                    <TableHead>ACTIONS</TableHead>
                </TableHeader>
                <TableBody>
                    {products?.data.map((product) => (
                        <tr
                            className=""
                            key={product?.name}
                        >
                            <TableData>{product?.name}</TableData>
                            <TableData>{product?.price}</TableData>
                            <TableData>{product?.category}</TableData>
                            <TableData>{product?.stock}</TableData>
                            <TableData className="flex items-center gap-x-4">
                                <TableActionLink
                                    href={route(
                                        'admin.products.edit',
                                        product?.id,
                                    )}
                                />
                                <Button
                                    variant="ghost"
                                    color="danger"
                                    className="flex items-center gap-x-1"
                                >
                                    <Trash2 className="size-3" />
                                    Delete
                                </Button>
                            </TableData>
                        </tr>
                    ))}
                    {products?.data?.length === 0 && (
                        <tr>
                            <td colSpan={5} className="h-[250px] text-center">
                                <p className="inline-flex flex-col items-center justify-center rounded-md px-4 py-2 text-neutral-400 dark:text-primary/25">
                                    No product to display
                                    <Package
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
