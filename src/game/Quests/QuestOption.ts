import {QuestOptionConsequence} from "@/game/Quests/QuestOptionConsequence";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {AbstractItem} from "@/game/Items/AbstractItem";

export class QuestOption {
    public quest: AbstractQuest

    public name: string

    public colorScheme: [string, string]

    public icon: IconDefinition

    public consequence: QuestOptionConsequence

    constructor(quest: AbstractQuest, name: string, colorScheme: [string, string], icon: IconDefinition, consequence: QuestOptionConsequence) {
        this.quest = quest
        this.name = name
        this.colorScheme = colorScheme
        this.icon = icon
        this.consequence = consequence
    }
}