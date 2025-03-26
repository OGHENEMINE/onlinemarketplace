import { Config } from 'ziggy-js';

export type User = {
    id: number;
    firstname: string;
    lastname: string;
    role: string;
    email: string;
    email_verified_at?: string;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    store_id: number;
    description: string;
    stock: number;
    category: string;
    published_at?: string;
};

export type Store = {
    id: number;
    name: string;
    vendor?: User;
    state: string;
    LGA: string;
    description?: string;
    published_at?: string;
};

export type cartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    subtotal?: number;
};

// export type PageProps {
//     flash?: {
//       success?: string;
//       error?: string;
//     };
//   }

export type VariantType = {
    solid: Record<string, string>;
    ghost: Record<string, string>;
    outline: Record<string, string>;
};

export type AlertMessage = {
    id: number;
    type: AlertType;
    message: string;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    flash: Partial<Record<AlertType, string>>;
    ziggy: Config & { location: string };
};
