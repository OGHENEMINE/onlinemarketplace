/* eslint-disable prettier/prettier */
import UserForm from '@/Components/Form/Admin/UserForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { User } from '@/types';

export default function Index({ user }: { user: User }) {
    return (
        <AdminLayout>
            <UserForm userData={user} />
        </AdminLayout>
    );
}
