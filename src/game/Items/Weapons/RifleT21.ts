import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";

export class RifleT21 extends AbstractMainWeapon {
    public getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.mythical
    }

    addsPossibleDamage(): number {
        return 10;
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/T21.png");
    }

    getName(): string {
        return "Бластер-винтовка T-21";
    }

    addsPossibleRange(): number {
        return 2;
    }

    getDescription(): string {
        return "Мощная и дальнобойная <span class='text-green-600'>винтовка T-21</span>. " +
            "Позволяет нанести противнику урон в <span class='text-red-600'>10 ед.</span>" +
            " на расстоянии <span class='text-indigo-500'>2 секторов</span>" +
            "<br/>" +
            "<br/>" +
            "Когда экипирована,  <span class='text-red-600'>забирает 1 очко действия при каждом ходе</span>";
    }

    fireSound(): string {
        return require("@/assets/audio/weapons/T21/T21_shot.wav");
    }

}