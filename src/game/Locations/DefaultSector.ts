import {AbstractSector} from "@/game/Locations/AbstractSector";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {DeadTrooperQuest} from "@/game/Quests/DeadTrooperQuest";
import {IntRange} from "@/misc/Types";

export class DefaultSector extends AbstractSector {
    public type(): number {
        return AbstractSector.DEFAULT_TYPE;
    }

    questPool(): AbstractQuest[] {
        return [
            new DeadTrooperQuest()
        ];
    }

    questChance(): IntRange<0, 100> {
        return 99;
    }

    protected formQuestPool(): AbstractQuest[] {
        const random = Math.floor(Math.random() * 100)
        if (random < this.questChance()) {
            return [this.questPool()[Math.floor(Math.random() * this.questPool().length)]]
        } else {
            return [];
        }
    }
}