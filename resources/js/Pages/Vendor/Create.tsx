/* eslint-disable prettier/prettier */

import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import Carousel from '@/Components/Form/Vendor/FormCarousel';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import statesOfNigeria from '@/util/states';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { ChangeEvent, FormEventHandler } from 'react';

export default function Create() {
    const { auth } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        vendor_id: auth?.user?.id,
        state: '',
        LGA: '',
        description: '',
        published_at: 'draft',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(errors);
        post(route('vendors.store'));
    };

    const LGAOptions = statesOfNigeria.find(
        (state) => state?.name.toLowerCase() === data?.state,
    ) || { LGA: [] };

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <main className="grid min-h-screen grid-cols-1 scroll-smooth bg-gray-100 px-5 lg:grid-cols-2 lg:px-0 dark:bg-neutral-950 dark:text-gray-400">
            <Head title="OnlineMarketPlace | vendor" />
            <form
                onSubmit={submit}
                className="mx-auto w-full max-w-md space-y-2"
            >
                <div className="pt-10">
                    <Link href="/">
                        <ApplicationLogo className="mx-auto h-20 w-20 fill-current text-gray-500" />
                    </Link>
                </div>
                <Input
                    name="name"
                    value={data.name}
                    error={errors.name}
                    onChange={handleChange}
                    id="name"
                    label="Business Name"
                    placeholder="Enter business name"
                />

                <Select
                    id="state"
                    error={errors.state}
                    value={data?.state}
                    placeholder="Choose a state"
                    onchange={handleChange}
                    label="State"
                    name="state"
                    options={statesOfNigeria.map(({ name }) => ({
                        label: name,
                        value: name.toLowerCase(),
                    }))}
                />

                <Select
                    id="LGA"
                    name="LGA"
                    value={data?.LGA}
                    error={errors?.LGA}
                    placeholder="Choose a local government"
                    altOption="Choose a state to continue"
                    label="Local Government"
                    onchange={handleChange}
                    options={LGAOptions?.LGA?.map((lga: string) => ({
                        label: lga,
                        value: lga.toLowerCase(),
                    }))}
                />

                <TextArea
                    id="description"
                    placeholder="Enter store description"
                    error={errors?.description}
                    value={data?.description}
                    onchange={handleChange}
                    name="description"
                    label="Store description"
                ></TextArea>
                <div>
                    <Button
                        size="lg"
                        className="flex w-full items-center justify-center"
                        disabled={processing}
                    >
                        {processing ? (
                            <Loader2 className="size-5 animate-spin" />
                        ) : (
                            'Create a Store'
                        )}
                    </Button>
                </div>
            </form>
            <Carousel />
        </main>
    );
}
