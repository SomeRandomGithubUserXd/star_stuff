import {AbstractSector} from "@/game/Locations/AbstractSector";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {DeadTrooperQuest} from "@/game/Quests/DeadTrooperQuest";
import {IntRange} from "@/misc/Types";

export class DefaultSector extends AbstractSector {
    public type(): number {
        return AbstractSector.DEFAULT_TYPE;
    }

    protected formQuestPool(): AbstractQuest[] {
        const pool = [
            new DeadTrooperQuest(this)
        ]
        const random = Math.floor(Math.random() * 100)
        if (random < 15) {
            return [pool[Math.floor(Math.random() * pool.length)]]
        } else {
            return [];
        }
    }

    public stepSound(): string {
        return require("@/assets/audio/characters/shared/footstep_rock.wav");
    }
}