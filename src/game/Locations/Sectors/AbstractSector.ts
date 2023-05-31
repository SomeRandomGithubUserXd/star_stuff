import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {IntRange} from "@/misc/Types";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";

export abstract class AbstractSector {

    public static readonly sectorsCount: number = 4

    public static readonly DEFAULT_TYPE: number = 0

    public id: number

    public location: AbstractLocation

    public quests: AbstractQuest[]

    constructor(location: AbstractLocation, id: number) {
        this.location = location
        this.quests = this.formQuestPool()
        this.id = id
    }

    public abstract type(): number

    public abstract questPool(): AbstractQuest[]

    protected abstract questChance(): IntRange<0, 101>

    protected abstract formQuestPool(): AbstractQuest[]

}