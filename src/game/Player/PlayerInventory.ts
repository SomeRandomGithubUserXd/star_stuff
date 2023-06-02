import {AbstractItem} from "@/game/Items/AbstractItem";
import {AbstractThrowable} from "@/game/Items/Throwables/AbstractThrowable";

export class PlayerInventory {
    protected _items: AbstractItem[] = []

    protected _throwables: AbstractThrowable[] = []

    public addItem(item: AbstractItem) {
        this._items.push(item)
    }

    public getItems(): AbstractItem[] {
        return this._items
    }
}