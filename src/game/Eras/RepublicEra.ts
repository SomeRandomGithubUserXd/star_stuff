import {AbstractEra} from "@/game/Eras/AbstractEra";
import {Side} from "@/game/Sides/Side";
import {AbstractMap} from "@/game/Maps/AbstractMap";
import {Tatooine} from "@/game/Maps/Tatooine";
import {Naboo} from "@/game/Maps/Naboo";
import {Mustafar} from "@/game/Maps/Mustafar";
import {Coruscant} from "@/game/Maps/Coruscant";
import {Character} from "@/game/Sides/Character/Character";
import {CharacterVoiceLines} from "@/game/Sides/Character/CharacterVoiceLines";

export class RepublicEra extends AbstractEra {
    public darkSideInstance(): Side {
        const droid: Character = new Character(
            require("@/assets/pictures/icons/droid_player_icon.png"),
            require("@/assets/pictures/icons/droid_fh.png"),
            new CharacterVoiceLines(
                [
                    require("@/assets/audio/characters/droid/battle_droids_01.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_05.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_07.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_08.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_11.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_12.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_14.mp3"),
                ],
                [
                    require("@/assets/audio/characters/droid/battle_droids_03.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_10.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_12.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_13.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_17.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_18.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_19.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_20.mp3"),
                ],
                [
                    require("@/assets/audio/characters/droid/battle_droids_01.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_02.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_04.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_06.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_09.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_14.mp3"),
                    require("@/assets/audio/characters/droid/battle_droids_16.mp3"),
                ],
            )
        );
        return new Side(
            "Торговая Федерация",
            require("@/assets/pictures/icons/trade_federation_icon.svg"),
            droid,
            true,
        );
    }

    public lightSideInstance(): Side {
        const clone: Character = new Character(
            require("@/assets/pictures/icons/clone_player_icon.png"),
            require("@/assets/pictures/icons/clone_fh.png"),
            new CharacterVoiceLines(
                [
                    require("@/assets/audio/characters/clone/clone_04.mp3"),
                    require("@/assets/audio/characters/clone/clone_10.mp3"),
                    require("@/assets/audio/characters/clone/clone_13.mp3"),
                ],
                [
                    require("@/assets/audio/characters/clone/clone_02.mp3"),
                    require("@/assets/audio/characters/clone/clone_03.mp3"),
                    require("@/assets/audio/characters/clone/clone_11.mp3"),
                    require("@/assets/audio/characters/clone/clone_13.mp3"),
                ],
                [
                    require("@/assets/audio/characters/clone/clone_05.mp3"),
                    require("@/assets/audio/characters/clone/clone_01.mp3"),
                    require("@/assets/audio/characters/clone/clone_08.mp3"),
                    require("@/assets/audio/characters/clone/clone_06.mp3"),
                    require("@/assets/audio/characters/clone/clone_09.mp3"),
                    require("@/assets/audio/characters/clone/clone_12.mp3"),
                    require("@/assets/audio/characters/clone/clone_14.mp3"),
                    require("@/assets/audio/characters/clone/clone_15.mp3"),
                ],
            )
        );
        return new Side(
            "Галактическая Республика",
            require("@/assets/pictures/icons/republic_icon.svg"),
            clone,
        );
    }

    public getName(): string {
        return "Эра Республики";
    }

    public getColor(): string {
        return "rgb(212,187,147)";
    }

    public getMaps(): AbstractMap[] {
        return [new Coruscant(), new Naboo(), new Mustafar()]
    }
}