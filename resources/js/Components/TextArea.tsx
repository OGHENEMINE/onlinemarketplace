/* eslint-disable prettier/prettier */
import { ChangeEvent } from 'react';
import InputError from './InputError';
import InputLabel from './InputLabel';

export default function TextArea({
    id,
    placeholder,
    onchange,
    name,
    error,
    label,
    value,
    ...props
}: {
    id: string;
    onchange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    placeholder: string;
    value: string;
    error?: string;
    label: string;
}) {
    return (
        <>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <textarea
                {...props}
                onChange={onchange}
                value={value}
                name={name}
                id={id}
                rows={4}
                placeholder={placeholder}
                className="inline-block w-full resize-none rounded-md border-gray-300 bg-inherit px-3 py-2.5 text-sm outline-none focus:ring-0 dark:border-neutral-700 dark:text-gray-300 dark:focus:border-primary/35"
            ></textarea>
            {error && <InputError>{error}</InputError>}
        </>
    );
}
