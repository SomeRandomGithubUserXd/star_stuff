import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";
import {AbandonedDroidStationSector} from "@/game/Locations/Geonosis/AdandonedDroidStation/AbandonedDroidStationSector";

export class AbandonedDroidStation extends AbstractLocation {

    getName(): string {
        return "Заброшенная станция дройдов";
    }

    getExpForExploring(): number {
        return 500;
    }

    getBackgroundImage(): string {
        return require("@/assets/pictures/locations/abandoned_droid_station.png");
    }

    protected getSectorsAvailable(): (typeof AbstractSector)[] {
        return [AbandonedDroidStationSector, AbandonedDroidStationSector, AbandonedDroidStationSector, AbandonedDroidStationSector];
    }

}