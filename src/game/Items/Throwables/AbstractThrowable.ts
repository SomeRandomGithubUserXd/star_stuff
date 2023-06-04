import {AbstractSector} from "@/game/Locations/AbstractSector";

export abstract class AbstractThrowable {

    public static THROWABLES_LIMIT: number = 3

    public abstract applySectorConsequence(sector: AbstractSector): void

    public abstract getThrowingDistance(): number

    public abstract getRadiusInSectors(): number

}