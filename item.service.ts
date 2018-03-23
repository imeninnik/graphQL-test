import InvoiceModel from './Models/Invoice.model';
import ItemModel from "./Models/Item.model";
import {IInvoice} from "./interfaces";
import moment = require("moment");

const DATE_FORMAT = 'YYYY-MM-DD';

export default class ItemService {
    public static getBoughtWith(item) {
        const allInvoicesWithItem: IInvoice[] = InvoiceModel.getAllWithItem(item.item_id);
        const closedInvoicesWithItem = allInvoicesWithItem.filter(invoice => invoice.status === 'sold' );

        if (!closedInvoicesWithItem.length) return null;

        let itemsIds: string[];

        closedInvoicesWithItem.forEach((invoiceWithItem) => {
            itemsIds = invoiceWithItem.item_id.filter(id => id !== item.item_id)
        });

        const itemsToOutput = itemsIds.map((itemId) =>  ItemModel.getById(itemId));
        return itemsToOutput;
    }

    public static getTotalSold(itemId: string, statisticFrame?:string) {
        const allClosedInvoices = InvoiceModel.getAllClosedWithItem(itemId);

        if (!statisticFrame) return allClosedInvoices.length;

        return ItemService.getTotalSoldStatistic(allClosedInvoices, statisticFrame)

    }

    private static getTotalSoldStatistic(allClosedInvoices: IInvoice[], statisticFrame: string) {
        if (statisticFrame === 'today') {
            const today = moment().format(DATE_FORMAT);

            const todayInvoices = allClosedInvoices.filter(invoice => {
               const invoiceDate = moment(invoice.date).format(DATE_FORMAT);
               return today === invoiceDate;

            });

            return todayInvoices.length;
        }

        if (statisticFrame === 'perWeek') {
            let perWeek = {};
            allClosedInvoices.forEach(invoice => {
                const week = moment(invoice.date).format('W');
                if (!perWeek[week]) perWeek[week] = 0;
                perWeek[week]++;

            });

            return JSON.stringify(perWeek);
        }

        if (statisticFrame === 'perMonth') {
            let perMoth = {};
            allClosedInvoices.forEach(invoice => {
                const month = moment(invoice.date).format('MMMMYY');
                if (!perMoth[month]) perMoth[month] = 0;
                perMoth[month]++;

            });

            return JSON.stringify(perMoth);
        }
    }
}