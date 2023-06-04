import {AbstractCharacter} from "@/game/AbstractCharacter";
import {Side} from "@/game/Sides/Side";
import {PlayerInventory} from "@/game/Player/PlayerInventory";
import {AbstractItem} from "@/game/Items/AbstractItem";

export class NPC extends AbstractCharacter {

    public isEvil: boolean

    public icon: string

    constructor(isEvil: boolean, name: string, icon: string, health: number = 100, totalExp = 0) {
        super(name, health, totalExp);
        this.isEvil = true
        this.icon = icon
    }
}