import {Player} from "@/game/Player";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";

export class QuestOptionConsequence {
    public quest: AbstractQuest

    public name: string

    public description: string

    public image: string

    public healthManipulation: (player: Player) => number

    public expManipulation: (player: Player) => number

    constructor(
        quest: AbstractQuest,
        name: string,
        description: string,
        healthManipulation: (player: Player) => number = (player) => {
            return player.health
        },
        expManipulation: (player: Player) => number = (player) => {
            return player.totalExp
        },
        image: string = ""
    ) {
        this.quest = quest
        this.name = name
        this.description = description
        this.healthManipulation = healthManipulation
        this.expManipulation = expManipulation
        this.image = image
    }
}