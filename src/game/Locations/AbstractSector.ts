import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {IntRange} from "@/misc/Types";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {EmptyLocation} from "@/game/Locations/EmptyLocation";
import {DeadTrooperQuest} from "@/game/Quests/DeadTrooperQuest";

export abstract class AbstractSector {

    public static readonly DEFAULT_TYPE: number = 0

    public location: AbstractLocation

    public quests: AbstractQuest[]

    constructor(location: AbstractLocation) {
        this.location = location
        this.quests = this.formQuestPool()
    }

    public abstract type(): number

    public abstract questPool(): AbstractQuest[]

    public abstract questChance(): IntRange<0, 100>

    protected abstract formQuestPool(): AbstractQuest[]
}