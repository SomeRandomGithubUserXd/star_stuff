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

    private __characters: AbstractCharacter[] = []

    constructor(location: AbstractLocation, id: number) {
        this.location = location
        this.quests = this.formQuestPool()
        this.id = id
    }

    public includesCharacter(character: AbstractCharacter): boolean {
        return this.__characters.includes(character)
    }

    public getCharacters(): AbstractCharacter[] {
        return this.__characters
    }

    public linkCharacter(character: AbstractCharacter): void {
        const previousSector = this.location.map.getSectorByLinkedCharacter(character)
        if (previousSector) {
            previousSector.unlinkCharacter(character)
        }
        character.setSector(this)
        this.__characters.push(character)
    }

    public unlinkCharacter(character: AbstractCharacter): void {
        const index = this.__characters.indexOf(character)
        this.__characters.splice(index, 1)
    }

    public abstract type(): number

    protected abstract formQuestPool(): AbstractQuest[]

    public abstract stepSound(): string

    public abstract dodgeChanceIncrement: number
}