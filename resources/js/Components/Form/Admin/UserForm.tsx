/* eslint-disable prettier/prettier */
import Button from '@/Components/Button';
import Card from '@/Components/Card';
import Input from '@/Components/Input';
import { User } from '@/types';
import { useForm } from '@inertiajs/react';
import { Camera, Loader2, Mail, UserCircle2 } from 'lucide-react';
import { ChangeEvent, FormEvent } from 'react';

export default function UserForm({ userData }: { userData?: User }) {
    const { data, setData, post, put, processing, errors } = useForm({
        firstname: userData?.firstname || '',
        lastname: userData?.lastname || '',
        email: userData?.email || '',
        password: '',
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        userData
            ? post(route('admin.users.store'))
            : put(route('admin.users.store'));
    }
    return (
        <div className="mt-5 max-w-2xl">
            <Card className="border p-4 lg:p-6 dark:border-zinc-800/60">
                <div className="w-full">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div
                            className="relative flex h-20 w-20 items-center justify-center rounded-full border text-center dark:border-neutral-700"
                            id="upload-file"
                        >
                            <input
                                className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                                type="file"
                                name="file"
                                id="upload-file"
                            />
                            <Camera
                                strokeWidth={0.5}
                                className="size-11 text-neutral-500"
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
                            <Input
                                type="text"
                                label="First Name"
                                error={errors?.firstname}
                                value={data.firstname}
                                onChange={handleChange}
                                placeholder="Enter first name"
                                id="firstname"
                                name="firstname"
                                icon={
                                    <UserCircle2
                                        className="size-5"
                                        strokeWidth={1}
                                    />
                                }
                            />
                            <Input
                                type="text"
                                label="Last Name"
                                error={errors?.lastname}
                                value={data.lastname}
                                onChange={handleChange}
                                placeholder="Enter last name"
                                id="lastname"
                                name="lastname"
                                icon={
                                    <UserCircle2
                                        className="size-5"
                                        strokeWidth={1}
                                    />
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-8">
                            <Input
                                type="text"
                                label="Email"
                                error={errors?.email}
                                onChange={handleChange}
                                value={data.email}
                                placeholder="Enter email"
                                id="email"
                                name="email"
                                icon={
                                    <Mail className="size-5" strokeWidth={1} />
                                }
                            />
                            {!userData && (
                                <Input
                                    type="password"
                                    label="Password"
                                    error={errors?.password}
                                    onChange={handleChange}
                                    value={data.password}
                                    placeholder="Enter password"
                                    id="password"
                                    name="password"
                                />
                            )}
                        </div>
                        <Button
                            size="md"
                            className="flex w-full items-center justify-center"
                        >
                            {processing ? (
                                <Loader2 className="size-5 animate-spin" />
                            ) : data ? (
                                'Edit User Detail'
                            ) : (
                                'Create User'
                            )}
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
