/* eslint-disable prettier/prettier */
import { Check, Eye, EyeClosed } from 'lucide-react';
import {
    forwardRef,
    InputHTMLAttributes,
    ReactNode,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import InputError from './InputError';
import InputLabel from './InputLabel';

export default forwardRef(function TextInput(
    {
        type = 'text',
        error,
        label,
        labelStyle = '',
        icon,
        className,
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & {
        error?: string;
        icon?: ReactNode;
        label?: string;
        labelStyle?: string;
        isFocused?: boolean;
        className?: string;
    },
    ref,
) {
    const [showPassword, setShowPassword] = useState(false);
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    if (type === 'checkbox') {
        return (
            <label
                htmlFor={props.id}
                className="flex w-full cursor-pointer items-center gap-x-2 text-gray-700 transition hover:text-primary dark:text-gray-300"
            >
                <input
                    {...props}
                    type="checkbox"
                    className="peer hidden"
                    ref={localRef}
                />
                <div className="relative flex size-5 items-center justify-center rounded border border-gray-300 bg-white transition-all duration-200 peer-checked:border-primary peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/50 dark:border-neutral-800 dark:bg-neutral-900 dark:peer-checked:bg-primary/70">
                    <Check className="absolute inset-0 m-auto size-4 text-white opacity-0 transition-all duration-200 peer-checked:opacity-100" />
                </div>
                <span className={labelStyle}>{label}</span>
                <InputError message={error} />
            </label>
        );
    }

    return (
        <div className="w-full space-y-1">
            <InputLabel className={labelStyle}>{label}</InputLabel>
            <div className="flex w-full items-center text-neutral-500">
                <input
                    {...props}
                    type={showPassword ? 'text' : type}
                    className={`peer inline-block w-full rounded-md border-gray-300 bg-inherit px-3 py-2.5 text-sm outline-none focus:ring-0 dark:border-neutral-800 dark:text-gray-300 dark:focus:border-primary/35 ${className} ${error ? 'border-red-500' : ''}`}
                    ref={localRef}
                />
                {type === 'password' && (
                    <span>
                        <Eye
                            onClick={() => setShowPassword(true)}
                            className={`-ml-9 size-6 cursor-pointer hover:text-primary/45 ${showPassword ? 'hidden' : ''}`}
                        />
                        <EyeClosed
                            onClick={() => setShowPassword(false)}
                            className={`-ml-9 size-6 cursor-pointer hover:text-primary/45 ${showPassword ? '' : 'hidden'}`}
                        />
                    </span>
                )}
                {icon && <span className="-ml-9">{icon}</span>}
            </div>
            <InputError message={error} />
        </div>
    );
});
