import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        tel: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="firstname" value="First Name" />

                    <TextInput
                        id="firstname"
                        name="firstname"
                        value={data.firstname}
                        className="mt-1 block w-full"
                        autoComplete="firstname"
                        isFocused={true}
                        onChange={(e) => setData('firstname', e.target.value)}
                        required
                    />

                    <InputError message={errors.firstname} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="lastname" value="Last Name" />

                    <TextInput
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        isFocused={true}
                        onChange={(e) => setData('lastname', e.target.value)}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="tel" value="Tel" />

                    <TextInput
                        id="tel"
                        name="tel"
                        value={data.tel}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        isFocused={true}
                        onChange={(e) => setData('tel', e.target.value)}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
