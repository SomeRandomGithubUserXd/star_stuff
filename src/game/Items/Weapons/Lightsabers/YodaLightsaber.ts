import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export class YodaLightsaber extends AbstractMainWeapon {
    public fireSound(): string {
        return require("@/assets/audio/weapons/Lightsabers/Swing.wav");
    }
    addsPossibleDamage(): number {
        return 100;
    }

    addsPossibleRange(): number {
        return 0;
    }

    getDescription(): string {
        return "<span class='text-green-800'>Световой меч Магистра Йоды</span>. " +
            "Позволяет нанести противнику урон в <span class='text-red-600'>100 ед.</span>" +
            " <span class='text-indigo-700'>на этом же секторе</span>"
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/lightsabers/YodaLightsaber.png");
    }

    getName(): string {
        return "Световой Меч Йоды";
    }

    getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.legendary;
    }

}