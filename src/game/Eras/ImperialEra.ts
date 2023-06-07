import {AbstractEra} from "@/game/Eras/AbstractEra";
import {Side} from "@/game/Sides/Side";
import {Endor} from "@/game/Maps/Endor";
import {Tatooine} from "@/game/Maps/Tatooine";
import {Bespin} from "@/game/Maps/Bespin";
import {AbstractMap} from "@/game/Maps/AbstractMap";
import {Character} from "@/game/Sides/Character/Character";
import {CharacterVoiceLines} from "@/game/Sides/Character/CharacterVoiceLines";

export class ImperialEra extends AbstractEra {
    darkSideInstance(): Side {
        const stormtrooper: Character = new Character(
            require("@/assets/pictures/icons/stormtrooper_player_icon.png"),
            require("@/assets/pictures/icons/stormtrooper_player_icon.png"),
            new CharacterVoiceLines(
                [],
                [],
                [],
            )
        );
        return new Side(
            "Галактическая Империя",
            require("@/assets/pictures/icons/galactic_empire_logo.svg"),
            stormtrooper,
            true
        );
    }

    lightSideInstance(): Side {
        const rebel: Character = new Character(
            require("@/assets/pictures/icons/rebel_player_icon.png"),
            require("@/assets/pictures/icons/rebel_player_icon.png"),
            new CharacterVoiceLines(
                [],
                [],
                [],
            )
        );
        return new Side(
            "Альянс Повстанцев",
            require("@/assets/pictures/icons/rebel_alliance_logo.svg"),
            rebel,
        );
    }

    getName(): string {
        return "Эра Империи";
    }

    getColor(): string {
        return "rgb(19,39,45)";
    }

    getMaps(): AbstractMap[] {
        return [new Endor(), new Tatooine(), new Bespin()];
    }

}