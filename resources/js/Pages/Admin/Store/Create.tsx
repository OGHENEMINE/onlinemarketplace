/* eslint-disable prettier/prettier */
import StoreForm from '@/Components/Form/Admin/StoreForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { User } from '@/types';

export default function Create({ users }: { users: User[] }) {
    return (
        <AdminLayout pageTitle="Stores">
            <StoreForm users={users} />
        </AdminLayout>
    );
}
