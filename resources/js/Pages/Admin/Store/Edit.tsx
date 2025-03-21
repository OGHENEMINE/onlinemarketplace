/* eslint-disable prettier/prettier */
import StoreForm from '@/Components/Form/Admin/StoreForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { Store } from '@/types';

export default function Edit({ store }: { store: Store }) {
    return (
        <AdminLayout pageTitle="Stores">
            <StoreForm storeData={store} />
        </AdminLayout>
    );
}
