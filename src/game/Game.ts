import {AbstractEra} from "@/game/Eras/AbstractEra";
import {Player} from "@/game/Player";
import {AbstractMap} from "@/game/Maps/AbstractMap";
// @ts-ignore
import {Toast} from "@/components/Traits/SwalTrait";
// @ts-ignore
import {playSound} from "@/components/Traits/SoundTrait"
// @ts-ignore
import {findById, getColoredPlayerSpan} from "@/components/Traits/GameTrait"
import Location from "@/components/Game/Location.vue";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";

export class Game {
    public era: AbstractEra;

    public map: AbstractMap;

    public darkSidePlayers: Player[]

    public lightSidePlayers: Player[]

    public currentPlayerIndex: number

    public getAllPlayers(): Player[] {
        return [...this.lightSidePlayers, ...this.darkSidePlayers]
    }

    public getCurrentPlayer(): Player {
        for (const player of this.getAllPlayers()) {
            if (player.id === this.currentPlayerIndex) {
                return player
            }
        }
        return this.getCurrentPlayer()
    }

    public movePlayer(key: number, locationId: number, player: Player): void {
        if (!this.playerCanVisitLocation(player, locationId, key)) {
            playSound(require("@/assets/audio/sfx/error.mp3"))
            return
        }
        player.currentLocation = locationId
        player.currentSector = key
        playSound(require("@/assets/audio/characters/shared/footstep.wav"))
        this.subtractPlayerMoves(player, 1)
        this.moveWastedAlert(1, player, 'передвижение')
        this.checkForMoves(player)
    }

    protected playerCanVisitLocation(player: Player, wantedLocation: number, wantedSector: number | null = null): boolean {
        if (player.currentLocation === wantedLocation) return true
        if (wantedLocation === player.currentLocation + 1) {
            if (player.currentSector === 1 || player.currentSector === 3) {
                if(!wantedSector) return true
                return wantedSector === 0 || wantedSector == 2;
            } else {
                return false
            }
        }
        if (wantedLocation === player.currentLocation + 5) {
            if (player.currentSector === 2 || player.currentSector === 3) {
                if(!wantedSector) return true
                return wantedSector === 0 || wantedSector == 1;
            } else {
                return false
            }
        }
        if (wantedLocation === player.currentLocation - 1) {
            if (player.currentSector === 0 || player.currentSector === 2) {
                if(!wantedSector) return true
                return wantedSector === 1 || wantedSector == 3;
            } else {
                return false
            }
        }
        if (wantedLocation === player.currentLocation - 5) {
            if (player.currentSector === 0 || player.currentSector === 1) {
                if(!wantedSector) return true
                return wantedSector === 2 || wantedSector == 3;
            } else {
                return false
            }
        }
        return false
    }

    protected moveWastedAlert(moves: number, player: Player, action: string): void {
        Toast.fire({
            icon: 'info',
            title: `${player.name} тратит ${moves} ход(а) на ${action}`,
            timer: 1500
        })
    }

    protected lackOfMovesAlert(moves: number, player: Player): void {
        Toast.fire({
            icon: 'error',
            title: `Требуемое количество ходов: ${moves}, у вас есть только ${player.movesLeft}`,
            timer: 1500
        })
    }

    public discoverArea(key: number, player: Player): void {
        if (player.movesLeft < 2) {
            this.lackOfMovesAlert(2, player)
            return
        }
        if (!this.playerCanVisitLocation(player, key)) {
            playSound(require("@/assets/audio/sfx/error.mp3"))
            return
        }
        const voices = player.side.character.voiceLines.positive
        playSound(voices[Math.floor(Math.random()*voices.length)])
        let location = findById(this.map.locations, key)
        location.isDiscovered = true
        this.subtractPlayerMoves(player, 2)
        playSound(require("@/assets/audio/sfx/location_discovered.mp3"))
        player.totalExp += location.getExpForExploring()
        Toast.fire({
            icon: 'success',
            title: `${getColoredPlayerSpan(player)} открывает <span class="text-indigo-300">${location.getName()}</span> и получает <span class="text-indigo-600">${location.getExpForExploring()} опыта</span>`,
            timer: 2500
        })
        this.checkForMoves(player)
    }

    protected subtractPlayerMoves(player: Player, count: number): void {
        player.movesLeft -= count
        this.checkForMoves(player)
    }

    protected checkForMoves(player: Player): void {
        if (player.movesLeft <= 0) {
            this.getCurrentPlayer().movesLeft = Player.movesLimit
            if (this.currentPlayerIndex + 1 === this.getAllPlayers().length) {
                this.currentPlayerIndex = 0
            } else {
                this.currentPlayerIndex += 1
            }
        }
    }

    constructor(era: AbstractEra, map: AbstractMap, lightSidePlayers: Player[], darkSidePlayers: Player[], currentPlayerIndex = 0) {
        this.era = era
        this.map = map
        this.lightSidePlayers = lightSidePlayers
        this.darkSidePlayers = darkSidePlayers
        this.currentPlayerIndex = 0
    }
}