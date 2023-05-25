import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {AbstractItem} from "@/game/Items/AbstractItem";
import {QuestOption} from "@/game/Quests/QuestOption";
import {QuestOptionConsequence} from "@/game/Quests/QuestOptionConsequence";
import {faPersonWalkingArrowLoopLeft, faSackDollar, faWalkieTalkie} from "@fortawesome/free-solid-svg-icons";
import {Player} from "@/game/Player";

export class DeadTrooperQuest extends AbstractQuest {
    getText(): string {
        return "Вы находите мертвого наемника в отличной экипировке." +
            " Было бы здорово, если вы бы сообщили на базу об обстоятельствах его смерти и о том, кем он является. Но торопитесь - местные обитатели" +
            " тоже заприметили добычу";
    }

    getTitle(): string {
        return "Обнаружен мертвый наемник";
    }

    getOptions(): QuestOption[] {
        return [
            new QuestOption(
                this,
                "Обыскать наемника и убежать",
                ['#f59e0b', '#fafafa'],
                faSackDollar,
                // TODO: Add rare item
                new QuestOptionConsequence(
                    this, "Обыскано",
                    "Вы успешно обыскали труп, но отхватили немножечко пиздов в попытке убежать. Итого:",
                    (player: Player) => {
                        return player.health - 15
                    },
                    (player: Player) => {
                        return player.totalExp + 50
                    },
                    require("@/assets/pictures/quests/wounded_clone.jpg")
                ),
            ),
            new QuestOption(
                this,
                "Сообщить базе",
                ['darkblue', '#fff'],
                faWalkieTalkie,
                new QuestOptionConsequence(
                    this, "Сообщено",
                    "База прислала подкрепление из за ваших опасений по поводу местных жителей и дала им пизды, но забрала тело наемника. В награду вы получили:",
                    (player: Player) => {
                        return player.health
                    },
                    (player: Player) => {
                        return player.totalExp + 500
                    },
                    require("@/assets/pictures/quests/clone_squad.png")
                ),
            ),
            new QuestOption(
                this,
                "Пройти мимо",
                ['#fafafa', '#000'],
                faPersonWalkingArrowLoopLeft,
                new QuestOptionConsequence(
                    this, "Ок",
                    "Вы прошли мимо и не получили пиздов. Мудро. Вот, что вы получили за этот гениальный ход:",
                    (player: Player) => {
                        return player.health
                    },
                    (player: Player) => {
                        return player.totalExp + 250
                    },
                    require("@/assets/pictures/quests/stormtrooper_moonwalk.jpg")
                ),
            ),
        ];
    }

    getImage(): string {
        return require("@/assets/pictures/quests/dead_trooper.jpg");
    }

    getSoundtrack(): string | null {
        return require("@/assets/audio/quests/dead_trooper.mp3");
    }

}