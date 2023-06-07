import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {MaceWinduSector} from "@/game/Locations/Coruscant/JediTemple/MaceWinduSector";
import {JediTempleSector} from "@/game/Locations/Coruscant/JediTemple/JediTempleSector";
import {YodaSector} from "@/game/Locations/Coruscant/JediTemple/YodaSector";

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
        return [MaceWinduSector, JediTempleSector, YodaSector, JediTempleSector];
    }

}