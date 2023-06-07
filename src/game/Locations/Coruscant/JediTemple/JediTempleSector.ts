import {AbstractSector} from "@/game/Locations/AbstractSector";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {DeadTrooperQuest} from "@/game/Quests/DeadTrooperQuest";
import {IntRange} from "@/misc/Types";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";

export class JediTempleSector extends AbstractSector {
    public type(): number {
        return AbstractSector.DEFAULT_TYPE;
    }

    protected formQuestPool(): AbstractQuest[] {
        return []
    }

    public stepSound(): string {
        return require("@/assets/audio/characters/shared/footstep_metal_solid.wav");
    }

    dodgeChanceIncrement: number = 70
}