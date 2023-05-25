import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export class EmptyLocation extends AbstractLocation
{
    getName(): string {
        return "Пустая локация";
    }

    public sectors: [AbstractSector, AbstractSector, AbstractSector, AbstractSector] = [
        new DefaultSector(this),
        new DefaultSector(this),
        new DefaultSector(this),
        new DefaultSector(this)
    ]
    getExpForExploring(): number {
        return 100;
    }

    getBackgroundImage(): string {
        return "";
    }
}