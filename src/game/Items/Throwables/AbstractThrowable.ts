import {AbstractSector} from "@/game/Locations/AbstractSector";
import {AbstractItem} from "@/game/Items/AbstractItem";

export abstract class AbstractThrowable extends AbstractItem {

    public static THROWABLES_LIMIT: number = 3

    public abstract applySectorConsequence(sector: AbstractSector): void

    public abstract getThrowingDistance(): number

    public abstract getRadiusInSectors(): number

}