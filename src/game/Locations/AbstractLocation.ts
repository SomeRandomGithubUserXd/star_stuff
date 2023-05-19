import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export abstract class AbstractLocation {

    public id: number

    public abstract getName(): string

    public abstract getSectors(): [AbstractSector, AbstractSector, AbstractSector, AbstractSector]

    public isDiscovered: boolean = false

    public abstract getExpForExploring(): number

    constructor(id: number) {
        this.id = id
    }

}