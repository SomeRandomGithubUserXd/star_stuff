import {QuestOptionConsequence} from "@/game/Quests/QuestOptionConsequence";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {AbstractItem} from "@/game/Items/AbstractItem";

export class QuestOption {
    public quest: AbstractQuest

    public name: string

    public colorScheme: [string, string]

    public icon: IconDefinition

    public requiresLvl: number

    public positiveConsequence: QuestOptionConsequence

    public negativeConsequence: QuestOptionConsequence | null

    constructor(
        quest: AbstractQuest,
        requiresLvl: number,
        name: string,
        colorScheme: [string, string],
        icon: IconDefinition,
        positiveConsequence: QuestOptionConsequence,
        negativeConsequence: QuestOptionConsequence | null = null
    ) {
        this.quest = quest
        this.requiresLvl = requiresLvl
        this.name = name
        this.colorScheme = colorScheme
        this.icon = icon
        this.positiveConsequence = positiveConsequence
        this.negativeConsequence = negativeConsequence
    }
}