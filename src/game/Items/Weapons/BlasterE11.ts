import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export class BlasterE11 extends AbstractMainWeapon {

    public fireSound(): string {
        return require("@/assets/audio/weapons/E11/E11_shot.wav");
    }

    public getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.rare
    }

    addsPossibleDamage(): number {
        return 10;
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/E11.png");
    }

    getName(): string {
        return "Бластер E-11";
    }

    getDescription(): string {
        return "Стандартный бластер штурмовиков <span class='text-green-800'>E-11</span>. " +
            "Позволяет нанести противнику урон в <span class='text-red-600'>10 ед.</span>" +
            " на расстоянии <span class='text-indigo-700'>1-го сектора</span>"
    }

    addsPossibleRange(): number {
        return 1;
    }

}