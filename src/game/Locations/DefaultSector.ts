import {AbstractSector} from "@/game/Locations/AbstractSector";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {DeadTrooperQuest} from "@/game/Quests/DeadTrooperQuest";
import {IntRange} from "@/misc/Types";

export class DefaultSector extends AbstractSector {
    public type(): number {
        return AbstractSector.DEFAULT_TYPE;
    }

    public questPool(): AbstractQuest[] {
        return [
            new DeadTrooperQuest(this)
        ];
    }

    protected questChance(): IntRange<0, 101> {
        return 15;
    }

    protected formQuestPool(): AbstractQuest[] {
        const random = Math.floor(Math.random() * 100)
        if (random < this.questChance()) {
            return [this.questPool()[Math.floor(Math.random() * this.questPool().length)]]
        } else {
            return [];
        }
    }

    public stepSound(): string {
        return require("@/assets/audio/characters/shared/footstep_rock.wav");
    }
}