import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";

export class K16Pistol extends AbstractMainWeapon {

    public fireSound(): string {
        return require("@/assets/audio/weapons/K16Pistol/K16Pistol_shot.wav");
    }

    public getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.common
    }

    addsPossibleDamage(): number {
        return 4;
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/K16Pistol.png");
    }

    getName(): string {
        return "K-16 Bryar";
    }

    addsPossibleRange(): number {
        return 0;
    }

    getDescription(): string {
        return "Мощный <span class='text-green-800'>пистолет K-16 Bryar</span> с низкой дальнобойностью. " +
            "Позволяет нанести противнику урон в <span class='text-red-600'>4 ед.</span>" +
            " в пределах <span class='text-indigo-800'>этого же сектора</span>"
    }

}