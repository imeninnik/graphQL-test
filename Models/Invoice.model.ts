import { Invoices } from './../data/invoices';
import { IItem, IInvoice } from "../interfaces";

export default class InvoiceModel {
    public static getAll(): Invoices[] {
        return Invoices;
    }

    public static getById(id): IInvoice[] {
        const invoice = Invoices.filter(a => a.item_id === id);
        return invoice as IInvoice[];
    }

    public static getAllWithItem(itemId):IInvoice[] {
        const all = InvoiceModel.getAll();

        let output = all.filter(invoice =>
            invoice.item_id.indexOf(itemId) > -1
        );

        return output as IInvoice[];
    }

    public static getAllClosedWithItem(itemId):IInvoice[] {
        const all = InvoiceModel.getAllWithItem(itemId);
        const closed = all.filter(invoice => invoice.status === 'sold');

        return closed;

    }
}