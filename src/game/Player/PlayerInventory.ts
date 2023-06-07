import {AbstractItem} from "@/game/Items/AbstractItem";
import {AbstractThrowable} from "@/game/Items/Throwables/AbstractThrowable";
import {ThermalDetonator} from "@/game/Items/Throwables/ThermalDetonator";

export class PlayerInventory {
    protected _items: AbstractItem[] = []

    protected _throwables: AbstractThrowable[] = [new ThermalDetonator()]

    public addItem(item: AbstractItem) {
        this._items.push(item)
    }

    public getItems(): AbstractItem[] {
        return this._items
    }

    public getThrowables(): AbstractThrowable[] {
        return this._throwables
    }
}