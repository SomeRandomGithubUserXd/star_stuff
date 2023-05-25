// @ts-ignore
import {locationsCount, shuffleArray} from "@/traits/GameTrait";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AbandonedDroidStation";
import {EmptyLocation} from "@/game/Locations/EmptyLocation";

export abstract class AbstractMap {

    public static readonly locationsCount: number = 25

    public static readonly lastLocationId = AbstractMap.locationsCount - 1

    public locations: AbstractLocation[]

    constructor() {
        this.locations = this.formNewLocationPool()
    }

    public abstract getName(): string

    public abstract getPreviewImage(): string

    public abstract getMapImage(): string

    public abstract getSoundtrackPath(): string

    public abstract getLocations(): AbstractLocation[]

    protected formNewLocationPool(): AbstractLocation[] {
        const locations = this.getLocations()
        let pool = [...locations]
        for (let i = 0; i < AbstractMap.locationsCount - locations.length; i++) {
            pool.push(new EmptyLocation(0))
        }
        pool = shuffleArray(pool)
        let i = 0
        for (const location of pool) {
            location.id = i
            i++
        }
        return pool
    }
}