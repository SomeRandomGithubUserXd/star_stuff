import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
import {AbstractSector} from "@/game/Locations/AbstractSector";
import {Character} from "@/game/Sides/Character/Character";
import {PlayerInventory} from "@/game/Player/PlayerInventory";

export abstract class AbstractCharacter {

    public isDead: boolean = false

    public abstract name: string

    protected abstract characterInstance: Character

    public abstract isEvil: boolean

    protected _sector: AbstractSector | null = null

    protected abstract _health: number

    protected abstract _totalExp: number

    protected abstract _mainWeapon: AbstractMainWeapon

    protected _inventory: PlayerInventory = new PlayerInventory()

    public getInventoryInstance(): PlayerInventory {
        return this._inventory
    }

    public abstract movesLeft: number

    public getCharacter(): Character {
        return this.characterInstance
    }

    public setSector(sector: AbstractSector): void {
        this._sector = sector
    }

    public getSector(): AbstractSector | null {
        return this._sector
    }

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

    public getDodgeChange(): number {
        let chance = 1
        chance *= this.getLevel() / 2
        chance += this._sector?.dodgeChanceIncrement || 0
        return chance
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