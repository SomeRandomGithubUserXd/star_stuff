import {AbstractSector} from "@/game/Locations/AbstractSector";
import {DefaultSector} from "@/game/Locations/DefaultSector";
// @ts-ignore
import {shuffleArray, getFieldCoords} from "@/traits/GameTrait";
import {AbstractMap} from "@/game/Maps/AbstractMap";

export abstract class AbstractLocation {

    public static readonly movesRequired: number = 2

    public map: AbstractMap

    public id: number

    public isDiscovered: boolean = true

    public sectors: AbstractSector[]

    constructor(map: AbstractMap, id: number) {
        this.map = map
        this.id = id
        this.sectors = this.formNewSectorsPool()
    }

    private formNewSectorsPool(): AbstractSector[] {
        const sectors = this.getSectorsAvailable()
        let pool = [...sectors]
        for (let i = 0; i < AbstractSector.sectorsCount - sectors.length; i++) {
            pool.push(DefaultSector)
        }
        pool = shuffleArray(pool)
        let formed = []
        const xy = getFieldCoords(this.id, 5)
        let x = xy[0]
        let y = xy[1]
        const coords = [
            `${y * 2}${x * 2}`,
            `${y * 2}${x * 2 + 1}`,
            `${y * 2 + 1}${x * 2}`,
            `${y * 2 + 1}${x * 2 + 1}`
        ]
        let i = 0
        for (const sector of pool) {
            // @ts-ignore
            formed.push(new sector(this, parseInt(coords[i])))
            i++
        }
        return formed
    }

    protected abstract getSectorsAvailable(): (typeof AbstractSector)[]

    public abstract getName(): string

    public abstract getExpForExploring(): number

    public abstract getBackgroundImage(): string
}