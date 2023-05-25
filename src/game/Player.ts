import {Side} from "@/game/Sides/Side";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {BlasterE11} from "@/game/Items/Weapons/BlasterE11";
import {RifleT21} from "@/game/Items/Weapons/RifleT21";
import {Fists} from "@/game/Items/Weapons/Fists";
import {K16Pistol} from "@/game/Items/Weapons/K16Pistol";
import {CyclerRifle} from "@/game/Items/Weapons/CyclerRifle";

export class Player {

    public static readonly movesLimit = 3

    public id: number

    public side: Side

    public name: string

    public health: number

    public totalExp: number

    public currentLocation: number

    public currentSector: number

    public movesLeft: number

    protected _mainWeapon: AbstractMainWeapon

    public getMainWeapon(): AbstractMainWeapon {
        return this._mainWeapon
    }

    public setMainWeapon(mainWeapon: AbstractMainWeapon): void {
        this._mainWeapon = mainWeapon
    }

    constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0, currentLocation = 0, currentSector = 0) {
        this.id = id;
        this.side = side;
        this.name = name;
        this.health = health;
        this.totalExp = totalExp;
        this.currentLocation = currentLocation;
        this.currentSector = currentSector;
        this.movesLeft = Player.movesLimit
        this._mainWeapon = new CyclerRifle()
    }

    public getDamagePossible(): number {
        let damage = 1
        if (this.getMainWeapon()) {
            damage += this.getMainWeapon().addsPossibleDamage()
        }
        return damage
    }

    public getRange(): number {
        let range = 0
        if (this.getMainWeapon()) {
            range += this.getMainWeapon().addsPossibleRange()
        }
        return range
    }
}