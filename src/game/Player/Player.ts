import {AbstractCharacter} from "@/game/AbstractCharacter";
import {Side} from "@/game/Sides/Side";
import {PlayerInventory} from "@/game/Player/PlayerInventory";
import {AbstractItem} from "@/game/Items/AbstractItem";

export class Player extends AbstractCharacter {

    public static readonly movesLimit = 4

    public id: number

    public side: Side

    protected _inventory: PlayerInventory = new PlayerInventory()

    _totalExp = 500

    public getInventoryInstance(): PlayerInventory {
        return this._inventory
    }

    public movesLeft: number

    constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0) {
        super(name, health, totalExp);
        this.id = id
        this.side = side
        this.movesLeft = Player.movesLimit
    }

}