/* eslint-disable prettier/prettier */
import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

type AlertMessage = {
    id: number;
    type: AlertType;
    message: string;
};

export default function Alert({
    initialAlerts = [],
}: {
    initialAlerts?: AlertMessage[];
}) {
    const { flash } = usePage<PageProps>().props;
    const [alerts, setAlerts] = useState<AlertMessage[]>(initialAlerts);

    const removeAlert = (id: number) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    const addAlert = useCallback((message: string, type: AlertType) => {
        const id = Date.now();
        setAlerts((prev) => [...prev, { id, type, message }]);
        setTimeout(() => removeAlert(id), 5000);
    }, []);

    useEffect(() => {
        (Object.keys(flash) as AlertType[]).forEach((type) => {
            if (flash[type]) {
                addAlert(flash[type]!, type);
            }
        });
    }, [flash, addAlert]);

    return (
    <div className="fixed inset-x-5 top-5 z-20 space-y-4">
            {alerts.map(({ id, type, message }) => (
                <div
                    key={id}
                    className={`mx-auto flex w-full max-w-xs items-center rounded-lg p-3 text-white shadow-lg ${
                        {
                            success: 'bg-green-500',
                            error: 'bg-red-500',
                            warning: 'bg-yellow-500',
                            info: 'bg-blue-500',
                        }[type]
                    }`}
                >
                    <span className="flex-1">{message}</span>
                    <button
                        onClick={() => removeAlert(id)}
                        className="ml-4 font-bold text-white"
                    >
                        <X className="size-4" />
                    </button>
                </div>
            ))}
        </div>
    );
}
