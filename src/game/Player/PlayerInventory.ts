import {AbstractItem} from "@/game/Items/AbstractItem";

export class PlayerInventory {
    protected _items: AbstractItem[] = []

    public addItem(item: AbstractItem) {
        this._items.push(item)
    }

    public getItems(): AbstractItem[] {
        return this._items
    }
}