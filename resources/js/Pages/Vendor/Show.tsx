/* eslint-disable prettier/prettier */

import VendorLayout from '@/Layouts/VendorLayout';
import { User } from '@/types';

export default function Show({ user }: { user: User }) {
    console.log(user);
    return (
        <VendorLayout>
            <h1>Show Page</h1>
            {/* <p>Welcome {auth.user.firstname}!</p> */}
        </VendorLayout>
    );
}
