/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';

/* eslint-disable prettier/prettier */
export default function TableHeader({children}:PropsWithChildren) {
    return (
        <thead className="bg-gray-50 dark:bg-neutral-700">
            <tr>               
              {children}
            </tr>
        </thead>
    );
}
