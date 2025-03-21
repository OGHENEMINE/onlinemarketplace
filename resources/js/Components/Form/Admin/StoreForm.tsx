/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import { Store, User } from '@/types';
import statesOfNigeria from '@/util/states';
import { Link, useForm } from '@inertiajs/react';
import { Loader2, Tag, X } from 'lucide-react';
import { ChangeEvent, FormEvent } from 'react';

export default function StoreForm({
    storeData,
    users = [],
}: {
    storeData?: Store;
    users?: User[];
}) {
    const { data, setData, post, processing, errors, put } = useForm({
        name: storeData?.name || '',
        vendor_id: storeData?.user?.id || '',
        state: storeData?.state || '',
        LGA: storeData?.LGA || '',
        description: storeData?.description || '',
        published_at: storeData?.published_at !== null ? 'publish' : 'draft',
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

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(errors);
        storeData
            ? put(route('admin.stores.update', storeData.id))
            : post(route('admin.stores.store'));
    }

    const LGAOptions = statesOfNigeria.find(
        (state) => state?.name.toLowerCase() === data?.state,
    ) || { LGA: [] };

    console.log(storeData);
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
                        {/* NAME AND VENOR NAME INPUTS SECTION */}
                        <div className="flex items-center justify-between gap-x-4 pt-5 lg:gap-x-8">
                            <Input
                                type="text"
                                label="Store name"
                                error={errors?.name}
                                value={data?.name}
                                onChange={handleChange}
                                placeholder="Enter store name"
                                id="name"
                                name="name"
                                icon={
                                    <Tag className="size-5" strokeWidth={1} />
                                }
                            />

                            {storeData?.user ? (
                                <Input
                                    label="Store owner"
                                    readOnly
                                    value={`${storeData.user?.firstname} ${storeData.user?.firstname}`}
                                />
                            ) : (
                                <Select
                                    id="vendor_id"
                                    name="vendor_id"
                                    value={data?.vendor_id}
                                    error={errors?.vendor_id}
                                    label="Store owner"
                                    onchange={handleChange}
                                    options={users.map((user) => ({
                                        label: `${user.firstname} ${user.lastname}`,
                                        value: user?.id,
                                    }))}
                                />
                            )}
                        </div>

                        {/* STATE AND LGA INPUTS SECTION */}
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
                            <Select
                                id="state"
                                name="state"
                                value={data?.state}
                                error={errors?.state}
                                label="State"
                                onchange={handleChange}
                                options={statesOfNigeria.map((state) => ({
                                    label: state.name,
                                    value: state.name.toLowerCase(),
                                }))}
                            />

                            <Select
                                id="LGA"
                                name="LGA"
                                value={data.LGA}
                                error={errors?.LGA}
                                label="Local Government"
                                onchange={handleChange}
                                options={LGAOptions?.LGA?.map(
                                    (lga: string) => ({
                                        label: lga,
                                        value: lga.toLowerCase(),
                                    }),
                                )}
                            />
                        </div>

                        {/* SELECT PUBLISH OPTION */}
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
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
                                placeholder="Enter store description"
                                error={errors?.description}
                                value={data?.description}
                                onchange={handleChange}
                                name="description"
                                label="Store description"
                            ></TextArea>
                        </div>
                        <Button
                            size="md"
                            className="flex w-full items-center justify-center"
                            disabled={processing}
                        >
                            {processing ? (
                                <Loader2 className="size-5 animate-spin" />
                            ) : storeData ? (
                                'Update Store Info'
                            ) : (
                                'Create Store'
                            )}
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
