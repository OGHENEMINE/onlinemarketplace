/* eslint-disable prettier/prettier */
import { PropsWithChildren } from "react";

/* eslint-disable prettier/prettier */
export default function TableBody({children}:PropsWithChildren) {
    return (
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-800">
           {children}
        </tbody>
    );
}
