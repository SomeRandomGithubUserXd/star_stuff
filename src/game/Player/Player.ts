import {AbstractCharacter} from "@/game/AbstractCharacter";
import {Side} from "@/game/Sides/Side";
import {PlayerInventory} from "@/game/Player/PlayerInventory";

export class Player extends AbstractCharacter {

    public static readonly movesLimit = 3

    public inventory: PlayerInventory = []

    public movesLeft: number

    constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0, currentLocation = 0, currentSector = 0) {
        super(id, side, name, health, totalExp, currentLocation, currentSector);
        this.movesLeft = Player.movesLimit
    }

}