import {Side} from "@/game/Sides/Side";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {BlasterE11} from "@/game/Items/Weapons/BlasterE11";
import {IntRange} from "@/misc/Types";

export abstract class AbstractCharacter {

    public id: number

    public side: Side

    public name: string

    protected _health: number

    protected _totalExp: number

    public currentSector: number

    protected _mainWeapon: AbstractMainWeapon

    public setHealth(wantedHealth: number): void {
        this._health = wantedHealth
    }

    public addHealth(healthToAdd: number): void {
        this._health += healthToAdd
    }

    public subtractHealth(healthToTake: number): void {
        this._health -= healthToTake
    }

    public getHealth(): number {
        return this._health
    }

    public setTotalExp(wantedTotalExp: number): void {
        this._totalExp = wantedTotalExp
    }

    public addTotalExp(expToAdd: number): void {
        this._totalExp += expToAdd
    }

    public getTotalExp(): number {
        return this._totalExp
    }

    public getLevel(): number {
        return Math.floor(this._totalExp / 1000)
    }

    public getLevelProgress(): number {
        return (this._totalExp / 10) - (Math.floor(this._totalExp / 1000) * 100)
    }

    public getMainWeapon(): AbstractMainWeapon {
        return this._mainWeapon
    }

    public setMainWeapon(mainWeapon: AbstractMainWeapon): void {
        this._mainWeapon = mainWeapon
    }

    protected constructor(id: number, side: Side, name: string, health: number = 100, totalExp = 0, currentSector = 0) {
        this.id = id;
        this.side = side;
        this.name = name;
        this._health = health;
        this._totalExp = totalExp;
        this.currentSector = currentSector;
        this._mainWeapon = new BlasterE11()
    }

    public getDodgeChange(): number {
        return 1
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