import {AbstractCharacter} from "@/game/AbstractCharacter";
import {Side} from "@/game/Sides/Side";
import {PlayerInventory} from "@/game/Player/PlayerInventory";
import {AbstractItem} from "@/game/Items/AbstractItem";

export class Player extends AbstractCharacter {

    public static readonly movesLimit = 3

    protected _inventory: PlayerInventory = new PlayerInventory()

    public getInventoryInstance(): PlayerInventory {
        return this._inventory
    }

    public movesLeft: number

    constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0, currentSector = 0) {
        super(id, side, name, health, totalExp, currentSector);
        this.movesLeft = Player.movesLimit
    }

}