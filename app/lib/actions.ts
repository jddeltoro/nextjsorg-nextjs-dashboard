'use server';


export async function createInvoice(formData: FormData) {
    const response = await fetch('/api/invoices', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to create invoice');
    }

    return response.json();
}