import {Player} from "@/game/Player/Player";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";

export class QuestOptionConsequence {
    public quest: AbstractQuest

    public name: string

    public description: string

    public addsHealth: number = 0

    public addsExp: number = 0

    public image: string

    constructor(
        quest: AbstractQuest,
        name: string,
        description: string,
        addsHealth = 0,
        addsExp = 0,
        image: string = ""
    ) {
        this.quest = quest
        this.name = name
        this.description = description
        this.addsHealth = addsHealth
        this.addsExp = addsExp
        this.image = image
    }
}