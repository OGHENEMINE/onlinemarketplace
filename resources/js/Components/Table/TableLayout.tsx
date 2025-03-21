/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';

/* eslint-disable prettier/prettier */
export default function TableLayout({ children }: PropsWithChildren) {
    return (
        <div className="w-full my-2 lg:my-5 flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="inline-block min-w-full p-1.5 align-middle">
                    <div className="overflow-hidden rounded-lg border bg-white dark:border-zinc-800/60 dark:bg-neutral-500/10 lg:dark:backdrop-blur-md">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
