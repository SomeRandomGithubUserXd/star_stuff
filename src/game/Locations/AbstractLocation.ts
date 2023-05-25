import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";

export abstract class AbstractLocation {
    public static readonly movesRequired: number = 2

    public id: number

    public abstract getName(): string

    public abstract sectors: [AbstractSector, AbstractSector, AbstractSector, AbstractSector]

    public isDiscovered: boolean = false

    public abstract getExpForExploring(): number

    public abstract getBackgroundImage(): string

    constructor(id: number) {
        this.id = id
    }

}