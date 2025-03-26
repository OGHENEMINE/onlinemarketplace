/* eslint-disable prettier/prettier */
import { Link } from "@inertiajs/react";
import { MailCheckIcon, PhoneCall } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black dark:bg-neutral-900">
            <div className="mx-auto max-w-6xl px-5">
                <div className="grid grid-cols-1 gap-10 border-b py-10 text-sm max-md:text-center lg:grid-cols-4 dark:border-neutral-700">
                    <div className="space-y-1 max-md:space-y-3">
                        <h2 className="text-xl font-bold text-white">LOGO</h2>
                        <p className="flex items-center gap-x-1 max-md:justify-center">
                            Got a question? Access 24/7 support
                        </p>
                        <p className="flex items-center gap-x-1 text-lg font-bold max-md:justify-center dark:text-white">
                            <PhoneCall className="size-4 text-primary" />
                            000-xxx-xxx
                        </p>
                        <p className="flex items-center gap-x-1 text-lg font-bold max-md:justify-center dark:text-white">
                            <MailCheckIcon className="size-4 text-primary" />
                            example@email.com
                        </p>
                        <p>
                            Register now to get updates on our promotions &
                            coupons.
                        </p>
                        <div>socials</div>
                    </div>
                    <div>
                        <h2 className="font-bold text-white">COMPANY</h2>
                        <div className="mt-6 space-y-2">
                            <Link
                                className="block hover:text-white focus:text-white"
                                href="#"
                            >
                                About Us
                            </Link>
                            <Link
                                className="block hover:text-white focus:text-white"
                                href="#"
                            >
                                Contact Us
                            </Link>
                            <Link
                                className="block hover:text-white focus:text-white"
                                href="#"
                            >
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-white">SECTIONS</h2>
                        <div className="mt-6 space-y-2">
                            <Link
                                className="block hover:text-white focus:text-white"
                                href="#"
                            >
                                Local stores
                            </Link>
                            <Link
                                className="block hover:text-white focus:text-white"
                                href="#"
                            >
                                Categories
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-white">
                            CUSTOMER SERVICE
                        </h2>
                        <div className="mt-6 space-y-2">
                            <Link className="block hover:text-white" href="#">
                                Become a vendor
                            </Link>
                            <Link className="block hover:text-white" href="#">
                                Privacy policy
                            </Link>
                            <Link className="block hover:text-white" href="#">
                                Terms and conditions
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="py-5 text-xs">
                    Copyright 2025 OnlinemarketNG. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
