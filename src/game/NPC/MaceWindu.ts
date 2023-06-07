import {AbstractNPC} from "@/game/NPC/AbstractNPC";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {MaceWinduLightsaber} from "@/game/Items/Weapons/Lightsabers/MaceWinduLightsaber";
import {Character} from "@/game/Sides/Character/Character";
import {CharacterVoiceLines} from "@/game/Sides/Character/CharacterVoiceLines";

export class MaceWindu extends AbstractNPC {

    protected _health: number = 100

    protected _mainWeapon: AbstractMainWeapon = new MaceWinduLightsaber()

    protected _totalExp: number = 180000

    isEvil: boolean = false

    name: string = 'Мейс Винду'

    protected characterInstance: Character = new Character(
        require("@/assets/pictures/icons/mace_windu_icon.png"),
        require("@/assets/pictures/icons/mace_windu_icon.png"),
        new CharacterVoiceLines([], [], [])
    )
}