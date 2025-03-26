/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';

/* eslint-disable prettier/prettier */
export default function TableLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex w-full flex-col">
            <div className="-m-1.5 overflow-x-auto">
                <div className="inline-block min-w-full p-1.5 align-middle">
                    <div className="overflow-hidden rounded-lg border bg-white dark:border-zinc-800/30 dark:bg-neutral-800/20 lg:dark:backdrop-blur-md">
                        <table className="min-w-full">{children}</table>
                    </div>
                </div>
            </div>
        </div>
    );
}
