/* eslint-disable prettier/prettier */

import { ChangeEvent } from 'react';
import InputError from './InputError';

export default function FilterNavSelect({
    value,
    id,
    placeholder,
    label,
    name,
    onchange,
    error,
    options = [],
    ...props
}: {
    id: string;
    value: string;
    placeholder: string;
    name: string;
    label: string;
    onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    options: Array<{ label: string; value: string }>;
}) {
    return (
        <div className="w-full">
            <label
                className="mb-1 inline-block font-bold tracking-wider text-gray-400"
                htmlFor={id}
            >
                {label}
            </label>
            <select
                {...props}
                id={id}
                name={name}
                value={value}
                onChange={onchange}
                className="inline-block w-full rounded-sm border-neutral-400 px-3 py-2.5 text-sm outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-gray-400 dark:focus:border-primary/35 dark:focus:ring-neutral-600"
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <InputError message={error}></InputError>
        </div>
    );
}
