import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export class AbandonedDroidStation extends AbstractLocation {
    getName(): string {
        return "Заброшенная станция дройдов";
    }

    public sectors: [AbstractSector, AbstractSector, AbstractSector, AbstractSector] = [
        new DefaultSector(this),
        new DefaultSector(this),
        new DefaultSector(this),
        new DefaultSector(this)
    ]

    getExpForExploring(): number {
        return 500;
    }

    getBackgroundImage(): string {
        return require("@/assets/pictures/locations/abandoned_droid_station.png");
    }
}