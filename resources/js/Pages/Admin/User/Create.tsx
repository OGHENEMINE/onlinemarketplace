/* eslint-disable prettier/prettier */
import UserForm from '@/Components/Form/Admin/UserForm';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Index() {
    return (
        <AdminLayout>
            <UserForm />
        </AdminLayout>
    );
}
