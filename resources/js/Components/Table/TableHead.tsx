/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';

/* eslint-disable prettier/prettier */
export default function TableHead({ children }: PropsWithChildren) {
    return (
        <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-400"
        >
            {children}
        </th>
    );
}
