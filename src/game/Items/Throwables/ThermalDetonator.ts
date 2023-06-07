import {AbstractThrowable} from "@/game/Items/Throwables/AbstractThrowable";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {ItemRarityEnum} from "@/game/Enums/ItemRarityEnum";

export class ThermalDetonator extends AbstractThrowable {
    applySectorConsequence(sector: AbstractSector): void {
    }

    equipSound(): string {
        return "";
    }

    getDescription(): string {
        return "гомосекская граната";
    }

    getImage(): string {
        return require("@/assets/pictures/items/throwables/ThermalDetonator.png");
    }

    getName(): string {
        return "Термальный детонатор";
    }

    getRadiusInSectors(): number {
        return 1;
    }

    getRarityLevel(): ItemRarityEnum {
        return ItemRarityEnum.mythical;
    }

    getThrowingDistance(): number {
        return 1;
    }

}