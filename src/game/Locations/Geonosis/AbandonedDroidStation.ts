import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export class AbandonedDroidStation extends AbstractLocation {
    getName(): string {
        return "Заброшенная станция дройдов";
    }

    public getSectors(): [AbstractSector, AbstractSector, AbstractSector, AbstractSector] {
        return [
            new DefaultSector(),
            new DefaultSector(),
            new DefaultSector(),
            new DefaultSector(),
        ];
    }

    getExpForExploring(): number {
        return 500;
    }
}