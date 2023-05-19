import {AbstractSector} from "@/game/Locations/AbstractSector";

export class DefaultSector extends AbstractSector {
    public type(): number {
        return AbstractSector.DEFAULT_TYPE;
    }
}