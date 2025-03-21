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
import { User } from '@/types';
import { router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { MouseEvent } from 'react';

export default function Index({
    users,
}: {
    users: {
        data: User[];
        from: number;
        to: number;
        total: number;
        last_page: number;
        links: { url: string; active: boolean; label: string }[];
    };
}) {
    console.log(users);
    function handleDelete(e: MouseEvent<HTMLButtonElement>, userId: number) {
        e.preventDefault();
        router.delete(route('admin.users.destroy', userId));
    }

    const headerButtonItem = {
        label: 'Add New User',
        href: route('admin.users.create'),
    };

    return (
        <AdminLayout pageTitle="Users" headerButton={headerButtonItem}>
            <Pagination
                links={users?.links}
                from={users?.from}
                to={users?.to}
                total={users?.total}
                lastPage={users?.last_page}
            />
        
            <TableLayout>
                <TableHeader>
                    <TableHead>NAME</TableHead>
                    <TableHead>EMAIL</TableHead>
                    <TableHead>ROLE</TableHead>
                    <TableHead>ACTION</TableHead>
                </TableHeader>
                <TableBody>
                    {users?.data?.map((user, index) => (
                        <tr className="even:bg-neutral-800/60" key={index}>
                            <TableData className="flex flex-wrap items-center gap-1">
                                {user?.firstname}
                                {user?.lastname}
                            </TableData>
                            <TableData>{user?.email}</TableData>
                            <TableData>{user?.role}</TableData>
                            <TableData className="flex items-center gap-3">
                                <TableActionLink
                                    href={route('admin.users.edit', user.id)}
                                />
                                <Button
                                    onClick={(e) => handleDelete(e, user.id)}
                                    variant="ghost"
                                    className="flex items-center gap-x-1"
                                    color="danger"
                                >
                                    <Trash2 className="size-4" /> Delete
                                </Button>
                            </TableData>
                        </tr>
                    ))}
                </TableBody>
            </TableLayout>
        </AdminLayout>
    );
}
