import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { LogIn } from 'lucide-react';
import { ChangeEvent, FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(errors)
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="grid grid-cols-1 px-5 lg:grid-cols-2">
                <form onSubmit={submit} className="mx-auto w-full max-w-md">
                    <div className="mt-20">
                        <Link href="/">
                            <ApplicationLogo className="mx-auto h-20 w-20 fill-current text-gray-500" />
                        </Link>
                    </div>
                    <Input
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        id="email"
                        label="Whatsapp number"
                        placeholder="Enter Whatsapp phone number"
                    />

                    <Input
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        label="Password"
                        placeholder="Enter password"
                    />

                    <Input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        label="Remember me"
                        checked={data.remember}
                        onChange={(e) =>
                            setData(
                                'remember',
                                (e.target.checked || false) as false,
                            )
                        }
                    />
                    <div className="mt-5 space-y-2">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <Button
                            size="lg"
                            className="flex w-full items-center justify-center gap-x-1 text-sm"
                            disabled={processing}
                        >
                            SIGN IN <LogIn className="size-5" />
                        </Button>
                    </div>
                </form>
                <div className="hidden lg:block">image</div>
            </div>
        </GuestLayout>
    );
}
