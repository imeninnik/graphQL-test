export interface IItem {
    item_id: string;
    item_name: string;
    sku: string;

    group_id: string;
    group_name: string;
    unit: string;
    item_type: string;
    is_taxable: boolean;
    tax_id: string;
    description: string;
    tax_name: string;
    tax_percentage: number;
    tax_type: string;
    status: string;

    rate: number;
    pricebook_rate: number;
    purchase_rate: number;
    reorder_level: number;
    initial_stock: number;
    initial_stock_rate: number;
    vendor_id: string;
    vendor_name: string;
    stock_on_hand: string;

    image_id: string;
    image_name: string;
    purchase_description:string;
    image_type: string;


    total_sold: number;
    total_sold: number;
    total_sold_today: number;
    total_sold_per_week: number;

    total_sold_per_month: number;

    frequently_bought_with: any[] | null;


}

export interface IInvoice {
    invoice_number: string;

    item_id: string[];

    invoice_id: string;
    customer_name: string;
    customer_id: string;
    status:string;
    reference_number:string;
    date: string;
    due_date: string;
    due_days: string;
    currency_id: string;
    currency_code:string;
    total: number;
    balance: number;
    created_time:string;
    is_emailed: boolean;
    reminders_sent: number;
    payment_expected_date: string;
    last_payment_date: string;
}