import {AbstractCharacter} from "@/game/AbstractCharacter";
import {AbstractMainWeapon} from "@/game/Items/Weapons/AbstractMainWeapon";
// @ts-ignore
import {playSound} from "@/traits/SoundTrait"
// @ts-ignore
import {Toast} from "@/traits/SwalTrait";
// @ts-ignore
import {findById, getColoredPlayerSpan, getFieldCoords} from "@/traits/GameTrait"
import {Game} from "@/game/Game";

export class Fight {

    private __game: Game

    protected _currentCharacter: AbstractCharacter

    protected _attackingCharacter: AbstractCharacter

    protected _defendingCharacter: AbstractCharacter


    get currentCharacter(): AbstractCharacter {
        return this._currentCharacter;
    }

    get attackingCharacter(): AbstractCharacter {
        return this._attackingCharacter;
    }

    get defendingCharacter(): AbstractCharacter {
        return this._defendingCharacter;
    }

    private currentCharacterIsAttacking(): boolean {
        return this._attackingCharacter === this._currentCharacter
    }

    private getNotCurrentCharacter(): AbstractCharacter {
        if (this._attackingCharacter === this._currentCharacter) {
            return this._defendingCharacter
        } else {
            return this._attackingCharacter
        }
    }

    constructor(game: Game, attackingCharacter: AbstractCharacter, defendingCharacter: AbstractCharacter) {
        this.__game = game
        this._attackingCharacter = this._currentCharacter = attackingCharacter
        this._defendingCharacter = defendingCharacter;
        playSound(require("@/assets/audio/sfx/fight_starts.mp3"))
        Toast.fire({
            icon: 'warning',
            title: `${getColoredPlayerSpan(this._attackingCharacter)} напал на ${getColoredPlayerSpan(this._defendingCharacter)}!`,
            timer: 2500
        })
    }

    private switch(): void {
        this._currentCharacter.movesLeft -= 1
        if(this._currentCharacter.getHealth() <= 0 || this.getNotCurrentCharacter().getHealth() <= 0) {
            this.endFight()
        }
        if (this.getNotCurrentCharacter().movesLeft > 0) {
            this._currentCharacter = this.getNotCurrentCharacter()
        } else if(this._currentCharacter.movesLeft <= 0) {
            this.endFight()
        }
    }

    private endFight() {
        this.__game.endActiveFight()
    }

    public registerShot(): boolean {
        const isDodge = Math.floor(Math.random() * (100 + 1)) <= this.getNotCurrentCharacter().getDodgeChange()
        const weapon = this.currentCharacter.getMainWeapon()
        playSound(weapon.fireSound())
        const playerImg = document.getElementById('fight__player-' + (this.currentCharacterIsAttacking() ? 'defending' : 'attacking'))
        const voices = this.getNotCurrentCharacter().getCharacter().voiceLines
        if (isDodge) {
            playSound(require("@/assets/audio/sfx/dodge.wav"))
            playSound(voices.positive[Math.floor(Math.random() * voices.positive.length)])
            playerImg?.classList.add('dodge')
            setTimeout(() => {
                playerImg?.classList.remove('dodge')
            }, 500)
            this.switch()
            return false
        }
        playSound(voices.negative[Math.floor(Math.random() * voices.negative.length)])
        playSound(require("@/assets/audio/sfx/hit.wav"))
        playerImg?.classList.add('hit')
        setTimeout(() => {
            playerImg?.classList.remove('hit')
        }, 250)
        this.getNotCurrentCharacter().addHealth(-this._currentCharacter.getDamagePossible())
        this.switch()
        return true
    }
}