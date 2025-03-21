/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import FileInput from '@/Components/FileInput';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import { Product, Store } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import { Clipboard, DollarSign, Loader2, Tag, X } from 'lucide-react';
import { ChangeEvent, FormEvent } from 'react';

export default function ProductForm({
    productData,
    stores = [],
}: {
    productData?: Product;
    stores?: Store[];
}) {
    const { data, setData, post, processing, errors, put } = useForm({
        name: productData?.name || '',
        price: productData?.price || '',
        stock: productData?.stock || '',
        store: productData?.store_id || '',
        category: productData?.category || '',
        description: productData?.description || '',
        published_at: productData?.published_at || 'draft',
    });

    function handleChange(
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    console.log(stores);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(errors);
        productData
            ? put(route('admin.products.update'))
            : post(route('admin.products.store'));
        // console.log('Success');
    }
    return (
        <div className="max-w-2xl">
            <Card className="border p-4 lg:p-6 dark:border-zinc-800/60">
                <div className="relative w-full">
                    <Link
                        href={route('admin.products.index')}
                        className="absolute right-0 top-0 cursor-pointer dark:hover:bg-neutral-800"
                    >
                        <X className="size-6" strokeWidth={1} />
                    </Link>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* FILE INPUT SECTION */}
                        <div>
                            <FileInput
                                name="file"
                                id="upload-file"
                                label="Product Image"
                            />
                        </div>

                        {/* NAME AND PRICE INPUTS SECTION */}
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
                            <Input
                                type="text"
                                label="Product name"
                                error={errors?.name}
                                value={data?.name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                id="name"
                                name="name"
                                icon={
                                    <Tag className="size-5" strokeWidth={1} />
                                }
                            />

                            <Input
                                type="text"
                                label="Product price"
                                error={errors?.price}
                                value={data?.price}
                                onChange={handleChange}
                                placeholder="Enter product price"
                                id="price"
                                name="price"
                                icon={
                                    <DollarSign
                                        className="size-5"
                                        strokeWidth={1}
                                    />
                                }
                            />
                        </div>

                        {/* STOCK AND CATEGORY INPUTS SECTION */}
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
                            <Input
                                type="text"
                                label="Product stock"
                                error={errors?.stock}
                                onChange={handleChange}
                                value={data?.stock}
                                placeholder="Enter product stock"
                                id="stock"
                                name="stock"
                                icon={
                                    <Clipboard
                                        className="size-5"
                                        strokeWidth={1}
                                    />
                                }
                            />
                            <Select
                                id="category"
                                name="category"
                                value={data?.category}
                                error={errors?.category}
                                label="Product category"
                                onchange={handleChange}
                                options={[
                                    { label: 'Fashion', value: 'fashion' },
                                    {
                                        label: 'Household',
                                        value: 'household',
                                    },
                                ]}
                            />
                        </div>

                        {/* SELECT PUBLISH OPTION */}
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
                            <Select
                                id="store"
                                name="store_id"
                                value={data?.store}
                                error={errors?.store}
                                label="Affiliated store"
                                onchange={handleChange}
                                options={stores.map((store) => ({
                                    label: store.name,
                                    value: store.id,
                                }))}
                                altOption="Publish a store to continue"
                            />
                            <Select
                                id="published_at"
                                name="published_at"
                                value={data?.published_at}
                                error={errors?.published_at}
                                label="Publish product"
                                onchange={handleChange}
                                options={[
                                    { label: 'Publish', value: 'publish' },
                                    {
                                        label: 'Draft',
                                        value: 'draft',
                                    },
                                ]}
                            />
                        </div>

                        {/* DESCRIPTION INPUT SECTION */}
                        <div>
                            <TextArea
                                id="description"
                                placeholder="Enter product description"
                                error={errors?.description}
                                value={data?.description}
                                onchange={handleChange}
                                name="description"
                                label="Product description"
                            ></TextArea>
                        </div>
                        <Button
                            size="md"
                            className="flex w-full items-center justify-center"
                            disabled={processing}
                        >
                            {processing ? (
                                <Loader2 className="size-5 animate-spin" />
                            ) : productData ? (
                                'Update Product Detail'
                            ) : (
                                'Create Product'
                            )}
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
