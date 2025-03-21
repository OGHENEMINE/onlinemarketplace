/* eslint-disable prettier/prettier */
import { usePage } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Alert() {
    const [display, setDisplay] = useState(false);
    const { flash } = usePage().props;
    const message = flash?.success ?? flash?.error ?? null;

    useEffect(() => {
        function handleDisplay() {
            setDisplay(true);
            setTimeout(() => setDisplay(false), 5000);
        }
        handleDisplay();
    }, []);

    if (!message) return null;

    return (
        <div
            className={`absolute left-1/2 top-0 z-10 mt-2 flex w-full max-w-md -translate-x-1/2 items-center justify-between rounded-lg p-4 text-sm text-white ${display ? '' : 'hidden'} ${flash?.success ? 'bg-teal-500' : 'bg-red-500'}`}
            role="alert"
            tabIndex={-1}
            aria-labelledby="alert"
        >
            <div className="flex items-center gap-x-2">
                <p className="flex items-center gap-x-1">
                    <span id="alert" className="font-bold">
                        {flash?.success ? 'Success' : 'Error'}
                    </span>{' '}
                    alert!
                </p>
                <p>{message}.</p>
            </div>
            <button onClick={() => setDisplay(false)}>
                <X className="size-4" />
            </button>
        </div>
    );
}
