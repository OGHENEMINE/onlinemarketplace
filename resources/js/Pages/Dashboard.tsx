import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout head="dashboard">
            {() => <p>j</p>}
        </AuthenticatedLayout>
    );
}
