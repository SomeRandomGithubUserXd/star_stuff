import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export class CyclerRifle extends AbstractMainWeapon {
    public getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.legendary
    }

    addsPossibleDamage(): number {
        return 23;
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/CyclerRifle.png");
    }

    getName(): string {
        return "Циклевочная винтовка";
    }

    getDescription(): string {
        return "Очень дальнобойная и мощная <span class='text-green-800'>Циклевочная винтовка</span>. " +
            "Позволяет нанести противнику урон в <span class='text-red-600'>23 ед.</span>" +
            " на расстоянии <span class='text-indigo-500'>5-и локаций</span>" +
            "<br/>" +
            "<br/>" +
            "Когда экипирована,  <span class='text-red-600'>забирает 1 очко действия при каждом ходе</span>";
    }

    addsPossibleRange(): number {
        return 5;
    }

}