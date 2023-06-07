import {AbstractCharacter} from "@/game/AbstractCharacter";
import {Side} from "@/game/Sides/Side";
import {AbstractMainWeapon} from "../Items/Weapons/AbstractMainWeapon";
import {Character} from "@/game/Sides/Character/Character";
import {MaceWinduLightsaber} from "@/game/Items/Weapons/Lightsabers/MaceWinduLightsaber";

export class Player extends AbstractCharacter {

    public static readonly movesLimit = 4

    public id: number

    public name: string;

    public isEvil: boolean;

    protected characterInstance: Character;

    protected _health: number;

    protected _totalExp: number;

    protected _mainWeapon: AbstractMainWeapon;

    public movesLeft: number = 4

    public switchSide(side: Side) {
        this.characterInstance = side.character
    }

    constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0) {
        super();
        this.id = id
        this.name = name;
        this.characterInstance = side.character
        this.isEvil = side.isEvil
        this._health = health;
        this._totalExp = totalExp;
        this._mainWeapon = new MaceWinduLightsaber()
    }
}