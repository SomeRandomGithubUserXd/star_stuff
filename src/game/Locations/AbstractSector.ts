import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {IntRange} from "@/misc/Types";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractCharacter} from "@/game/AbstractCharacter";

export abstract class AbstractSector {

    public static readonly sectorsCount: number = 4

    public static readonly DEFAULT_TYPE: number = 0

    public location: AbstractLocation

    public id: number

    public quests: AbstractQuest[]

    protected _characters: AbstractCharacter[] = []

    constructor(location: AbstractLocation, id: number) {
        this.location = location
        this.quests = this.formQuestPool()
        this.id = id
    }

    public includesCharacter(character: AbstractCharacter): boolean {
        return this._characters.includes(character)
    }

    public getCharacters(): AbstractCharacter[] {
        return this._characters
    }

    public linkCharacter(character: AbstractCharacter): void {
        const previousSector = this.location.map.getSectorByLinkedCharacter(character)
        if (previousSector) {
            previousSector.unlinkCharacter(character)
        }
        this._characters.push(character)
    }

    public unlinkCharacter(character: AbstractCharacter): void {
        const index = this._characters.indexOf(character)
        this._characters.splice(index, 1)
    }

    public abstract type(): number

    public abstract questPool(): AbstractQuest[]

    protected abstract questChance(): IntRange<0, 101>

    protected abstract formQuestPool(): AbstractQuest[]

    public abstract stepSound(): string
}