import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {QuestOption} from "@/game/Quests/QuestOption";
import {faSackDollar, faWandMagic} from "@fortawesome/free-solid-svg-icons";
import {QuestOptionConsequence} from "@/game/Quests/QuestOptionConsequence";
import {Player} from "@/game/Player";

export class TestQuest extends AbstractQuest {
    getImage(): string {
        return require("@/assets/pictures/quests/droids.png");
    }

    getOptions(): QuestOption[] {
        return [
            new QuestOption(
                this,
                "Сосать",
                ['#f59e0b', '#fafafa'],
                faWandMagic,
                new QuestOptionConsequence(
                    this, "Посасали",
                    "Вы успешно отполировали жезл",
                    (player: Player) => {
                        return player.health + 25
                    },
                    (player: Player) => {
                        return player.totalExp + 1000
                    },
                    require("@/assets/pictures/quests/suck.png")
                ),
            ),
        ];
    }

    getSoundtrack(): string | null {
        return null;
    }

    getText(): string {
        return "Вы пидарасы, у вас есть выбор: сосать или сосать";
    }

    getTitle(): string {
        return "Дилдо прямо по курсу";
    }
}
