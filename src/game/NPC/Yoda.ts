import {AbstractNPC} from "@/game/NPC/AbstractNPC";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {YodaLightsaber} from "@/game/Items/Weapons/Lightsabers/YodaLightsaber";
import {Character} from "@/game/Sides/Character/Character";
import {CharacterVoiceLines} from "@/game/Sides/Character/CharacterVoiceLines";

export class Yoda extends AbstractNPC {

    protected _health: number = 100

    protected _mainWeapon: AbstractMainWeapon = new YodaLightsaber()

    protected _totalExp: number = 200000

    isEvil: boolean = false

    name: string = 'Йода'

    protected characterInstance: Character = new Character(
        require("@/assets/pictures/icons/yoda_icon.png"),
        require("@/assets/pictures/icons/yoda_icon.png"),
        new CharacterVoiceLines([], [], [])
    )
}