/* eslint-disable prettier/prettier */

import { HelpCircle } from 'lucide-react';

const faqs = [
    {
        id: 1,
        question: 'How do I register as a vendor?',
        answer: 'Simply sign up, provide your business details, and start listing your products right away.',
    },
    {
        id: 2,
        question: 'Is there a registration fee?',
        answer: 'No, registering as a vendor is free!',
    },
    {
        id: 3,
        question: 'Can I edit or remove a product after listing?',
        answer: 'Yes, you can edit product details or remove them anytime from your vendor dashboard.',
    },
    {
        id: 4,
        question: 'How do I receive payments for my sales?',
        answer: 'Payments are processed securely and sent to your preferred bank account based on our payout schedule.',
    },
    {
        id: 5,
        question: 'What if a customer requests a return or refund?',
        answer: 'Returns and refunds follow our platform’s policies. You’ll be notified if a request is made.',
    },
    {
        id: 6,
        question: 'How can I get help if I have issues with my store?',
        answer: 'Our support team is available 24/7. Reach out through live chat or email for assistance.',
    },
    {
        id: 7,
        question: 'Who handles product delivery?',
        answer: 'You can choose to handle deliveries yourself or opt for our integrated logistics partners.',
    },
];

export default function FAQ({ className }: { className?: string }) {
    return (
        <div
            className={`grid h-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-5 ${className}`}
        >
            {faqs.map(({ id, question, answer }) => (
                <div key={id} className="flex items-start gap-x-3">
                    <div className="inline-block rounded bg-primary p-2 text-white">
                        <HelpCircle className="size-5" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-lg font-bold dark:text-white">{question}</p>
                        <p className="inline-block">{answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
