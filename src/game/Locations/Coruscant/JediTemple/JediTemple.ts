import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";
import {JediTempleSector} from "@/game/Locations/Coruscant/JediTemple/JediTempleSector";

export class JediTemple extends AbstractLocation {

    getName(): string {
        return "Храм Джедаев";
    }

    getExpForExploring(): number {
        return 1500;
    }

    getBackgroundImage(): string {
        return require("@/assets/pictures/locations/jedi_temple.jpg");
    }

    protected getSectorsAvailable(): (typeof AbstractSector)[] {
        return [JediTempleSector, JediTempleSector, JediTempleSector, JediTempleSector];
    }

}