import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export class Fists extends AbstractMainWeapon {
    public getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.common
    }

    addsPossibleDamage(): number {
        return 0;
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/Fists.png");
    }

    getName(): string {
        return "Кулаки";
    }

    getDescription(): string {
        return "Ты лох"
    }

    addsPossibleRange(): number {
        return 0;
    }

}