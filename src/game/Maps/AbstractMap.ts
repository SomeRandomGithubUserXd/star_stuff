// @ts-ignore
import {shuffleArray} from "@/traits/GameTrait";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbandonedDroidStation} from "@/game/Locations/Geonosis/AdandonedDroidStation/AbandonedDroidStation";
import {EmptyLocation} from "@/game/Locations/EmptyLocation";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {AbstractCharacter} from "@/game/AbstractCharacter";
import {Game} from "@/game/Game";

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

    public abstract getLocations(): (typeof AbstractLocation)[]

    private formNewLocationPool(): AbstractLocation[] {
        const locations = this.getLocations()
        let pool = [...locations]
        for (let i = 0; i < AbstractMap.locationsCount - locations.length; i++) {
            pool.push(EmptyLocation)
        }
        pool = shuffleArray(pool)
        let formed = []
        let id = 0
        for (const location of pool) {
            // @ts-ignore
            formed.push(new location(this, id))
            id++
        }
        return formed
    }

    public getSectors(): AbstractSector[] {
        const sectors = []
        if(!this.locations) return []
        for (const location of this.locations) {
            sectors.push(...location.sectors)
        }
        return sectors
    }

    public getSectorByLinkedCharacter(character: AbstractCharacter): AbstractSector | null {
        for (const sector of this.getSectors()) {
            if(sector.includesCharacter(character)) return sector
        }
        return null
    }
}