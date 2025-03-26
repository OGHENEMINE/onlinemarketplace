/* eslint-disable prettier/prettier */
import { usePage } from '@inertiajs/react';

export default function Avatar() {
    const user = usePage().props.auth.user;

    return (
        <div className="flex h-6 w-6 p-5 items-center justify-center rounded-full border border-neutral-800 bg-neutral-800 font-bold uppercase text-white">{`${user?.firstname.charAt(0)}${user?.lastname.charAt(0)}`}</div>
    );
}
