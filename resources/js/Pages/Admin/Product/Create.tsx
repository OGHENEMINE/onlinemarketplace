/* eslint-disable prettier/prettier */
import ProductForm from '@/Components/Form/Admin/ProductForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { Store } from '@/types';

export default function Create({ stores }: { stores: Store[] }) {
    return (
        <AdminLayout pageTitle="Products">
            <ProductForm stores={stores}/>
        </AdminLayout>
    );
}
