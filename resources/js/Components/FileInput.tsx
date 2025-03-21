/* eslint-disable prettier/prettier */
import { Camera } from 'lucide-react';
import InputLabel from './InputLabel';

export default function FileInput({
    label,
    id,
    ...prop
}: {
    label: string;
    name: string;
    id: string;
}) {
    return (
        <>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <div
                className="relative flex h-20 w-20 items-center justify-center rounded-md border text-center dark:border-neutral-700"
                id={id}
            >
                <input
                    {...prop}
                    name={prop?.name}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                    type="file"
                    id={id}
                />
                <Camera
                    strokeWidth={0.5}
                    className="size-11 text-neutral-500"
                />
            </div>
        </>
    );
}
