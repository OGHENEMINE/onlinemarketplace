/* eslint-disable prettier/prettier */
import ProductForm from '@/Components/Form/Admin/ProductForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { Product } from '@/types';

export default function Edit({ product }: { product: Product }) {

    return (
        <AdminLayout pageTitle="Products">
            <ProductForm productData={product} />
        </AdminLayout>
    );
}
