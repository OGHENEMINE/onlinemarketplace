/* eslint-disable prettier/prettier */

import { ChangeEvent } from 'react';
import InputError from './InputError';
import InputLabel from './InputLabel';

export default function Select({
    value,
    id,
    label,
    placeholder,
    name,
    onchange,
    error,
    altOption = '',
    options = [],
    ...props
}: {
    id: string;
    placeholder?: string;
    value: string | number;
    name: string;
    label: string;
    altOption?: string;
    onchange: (e: ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    options: Array<{ label: string; value: string | number }>;
}) {
    return (
        <div className="w-full space-y-1">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <select
                {...props}
                id={id}
                name={name}
                value={value}
                onChange={onchange}
                className="inline-block w-full rounded-md border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-400 dark:focus:border-primary/35 dark:focus:ring-neutral-600"
            >
                <option value="">{placeholder}</option>
                {options.length > 0
                    ? options.map(({ label, value }) => (
                          <option key={value} value={value}>
                              {label}
                          </option>
                      ))
                    : altOption && (
                          <option value="">{`⚠️ ${altOption}`}</option>
                      )}
            </select>
            <InputError message={error}></InputError>
        </div>
    );
}
