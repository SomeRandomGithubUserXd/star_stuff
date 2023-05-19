import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export class EmptyLocation extends AbstractLocation
{
    getName(): string {
        return "Пустая локация";
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
        return 100;
    }
}