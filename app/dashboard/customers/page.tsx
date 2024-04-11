import { Card } from '@/app/ui/dashboard/cards';


export default function Page() {
    return (
        <main>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                Customers
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Total Customers" value={0} type="customers" />
            </div>
        </main>
    );
}