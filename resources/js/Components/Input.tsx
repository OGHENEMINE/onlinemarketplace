/* eslint-disable prettier/prettier */
import { Eye, EyeClosed } from 'lucide-react';
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

    return (
        <div className="w-full">
            <InputLabel className={labelStyle}>{label}</InputLabel>
            <div className="flex w-full items-center text-neutral-500">
                <input
                    {...props}
                    type={showPassword ? 'text' : type}
                    className={`peer inline-block w-full rounded-md border-gray-300 bg-inherit px-3 py-2.5 text-sm outline-none focus:ring-0 dark:border-neutral-700 dark:text-gray-300 dark:focus:border-primary/35 ${className}`}
                    ref={localRef}
                />
                {type === 'password' && (
                    <span>
                        <Eye
                            strokeWidth={1}
                            onClick={() => setShowPassword(true)}
                            className={`-ml-9 size-5 cursor-pointer hover:text-primary/45 ${showPassword ? 'hidden' : ''}`}
                        />
                        <EyeClosed
                            onClick={() => setShowPassword(false)}
                            strokeWidth={1}
                            className={`-ml-9 size-5 cursor-pointer hover:text-primary/45 ${showPassword ? '' : 'hidden'}`}
                        />
                    </span>
                )}
                {icon && <span className="-ml-9">{icon}</span>}
            </div>
            <InputError message={error} />
        </div>
    );
});
