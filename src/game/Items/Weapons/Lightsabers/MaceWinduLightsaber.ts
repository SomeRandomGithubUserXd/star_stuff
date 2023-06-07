import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export class MaceWinduLightsaber extends AbstractMainWeapon {

    public fireSound(): string {
        return require("@/assets/audio/weapons/Lightsabers/Swing.wav");
    }

    addsPossibleDamage(): number {
        return 85;
    }

    addsPossibleRange(): number {
        return 0;
    }

    getDescription(): string {
        return "Знаменитый фиолетовый <span class='text-green-800'>меч Мейса Винду</span>. " +
            "Позволяет нанести противнику урон в <span class='text-red-600'>85 ед.</span>" +
            " <span class='text-indigo-700'>на этом же секторе</span>"
    }

    getImage(): string {
        return require("@/assets/pictures/items/weapons/lightsabers/MaceWinduLightsaber.png");
    }

    getName(): string {
        return "Световой Меч Мейса Винду";
    }

    getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.legendary;
    }

}