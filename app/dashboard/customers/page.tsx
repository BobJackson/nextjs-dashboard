import {Metadata} from "next";
import CustomersTable from "@/app/ui/customers/table";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: 'Customers',
}

export default async function Page({searchParams}: { searchParams: { query?: string; } }) {
    const query = searchParams?.query || '';
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CustomersTable query={query}/>
        </Suspense>
    )
}