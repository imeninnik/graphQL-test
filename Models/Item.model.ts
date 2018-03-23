import { IItem } from "../interfaces";
import { Items } from './../data/items';

export default class ItemModel {
    public static getAll(): IItem[] {
        return Items as IItem[];
    }

    public static getById(id): IItem {
        id +='';
        const item = Items.filter(a => a.item_id.toString() === id);
        return item[0] as IItem;
    }

}