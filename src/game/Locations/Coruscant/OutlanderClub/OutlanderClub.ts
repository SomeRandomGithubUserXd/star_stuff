import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export class OutlanderClub extends AbstractLocation {

    getName(): string {
        return "Клуб \"Чужеземец\"";
    }

    getExpForExploring(): number {
        return 750;
    }

    getBackgroundImage(): string {
        return require("@/assets/pictures/locations/outlander_club.jpg");
    }

    protected getSectorsAvailable(): (typeof AbstractSector)[] {
        return [DefaultSector, DefaultSector, DefaultSector, DefaultSector];
    }

}