import {AbstractEra} from "@/game/Eras/AbstractEra";
import {Player} from "@/game/Player/Player";
import {AbstractMap} from "@/game/Maps/AbstractMap";
// @ts-ignore
import {Toast} from "@/traits/SwalTrait";
// @ts-ignore
import {playSound} from "@/traits/SoundTrait"
// @ts-ignore
import {findById, getColoredPlayerSpan, getFieldCoords} from "@/traits/GameTrait"
import Location from "@/components/Game/Location.vue";
import {AbstractLocation} from "@/game/Locations/AbstractLocation";
import {AbstractQuest} from "@/game/Quests/AbstractQuest";
import {QuestOption} from "@/game/Quests/QuestOption";
import {Fight} from "@/game/Fight/Fight";
import {QuestOptionConsequence} from "@/game/Quests/QuestOptionConsequence";
// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {AbstractSector} from "@/game/Locations/Sectors/AbstractSector";

export class Game {
    public mainAudio: HTMLAudioElement

    public secondaryAudio: HTMLAudioElement | null | undefined

    public era: AbstractEra;

    public map: AbstractMap;

    public darkSidePlayers: Player[]

    public lightSidePlayers: Player[]

    public currentPlayerIndex: number

    private activeQuest: AbstractQuest | null = null

    private activeFight: Fight | null = null

    public setActiveQuest(quest: AbstractQuest): void {
        quest.assignPlayer(this.getCurrentPlayer())
        this.activeQuest = quest
    }

    public getActiveQuest(): AbstractQuest | null {
        return this.activeQuest
    }

    public selectOption(option: QuestOption): Promise<QuestOptionConsequence> {
        return new Promise(async (resolve) => {
            let consequence
            if (option.requiresLvl <= this.getCurrentPlayer().getLevel()) {
                consequence = option.positiveConsequence
            } else {
                let successNumber = Math.abs(option.requiresLvl * 2 - this.getCurrentPlayer().getLevel()) * 10
                if (successNumber >= 100) {
                    successNumber = 95
                }
                const alertModalIsClosed = await Swal.fire({
                    title: `Выпадение случайного числа`,
                    html: `Вам должно попасться число, которое больше или равно ${successNumber}`,
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false
                })
                if (alertModalIsClosed) {
                    const number = Math.floor(Math.random() * (100 + 1));
                    const infoModalIsClosed = await Swal.fire({
                        title: `Ваше число:`,
                        html: number,
                        showConfirmButton: true
                    })
                    if (infoModalIsClosed) {
                        if (number >= successNumber) {
                            consequence = option.positiveConsequence
                        } else {
                            consequence = option.negativeConsequence
                        }
                    }
                }
            }
            this.endActiveQuest(<QuestOptionConsequence>consequence)
            resolve(<QuestOptionConsequence>consequence)
        });
    }

    public endActiveQuest(consequence: QuestOptionConsequence) {
        if (this.activeQuest) {
            const quests = this.activeQuest.sector.quests
            quests.splice(quests.indexOf(<AbstractQuest>this.activeQuest), 1)
            if (this.secondaryAudio) {
                this.secondaryAudio.pause()
                this.secondaryAudio = null
                this.mainAudio.play()
            }
            this.getCurrentPlayer().addHealth(consequence.addsHealth)
            this.getCurrentPlayer().addTotalExp(consequence.addsExp)
            this.activeQuest = null
            this.subtractPlayerMoves(this.getCurrentPlayer(), AbstractQuest.movesRequired)
        }
    }

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

    public movePlayer(sector: AbstractSector): void {
        const player = this.getCurrentPlayer()
        if (!this.playerCanVisitSector(player, sector.id)) {
            playSound(require("@/assets/audio/sfx/error.mp3"))
            return
        }
        player.currentSector = sector.id
        playSound(require("@/assets/audio/characters/shared/footstep.wav"))
        this.subtractPlayerMoves(player, 1)
        this.checkForMoves(player)
    }

    protected playerCanVisitLocation(player: Player, wantedLocation: AbstractLocation): boolean {
        for (const sector of wantedLocation.sectors) {
            if(this.playerCanVisitSector(player, sector.id)) {
                return true
            }
        }
        return false
    }

    protected playerCanVisitSector(player: Player, wantedSector: number): boolean {
        const current = getFieldCoords(player.currentSector)
        const wanted = getFieldCoords(wantedSector)
        let distance = Math.sqrt(((current[0] - wanted[0]) ** 2) + ((current[1] - wanted[1]) ** 2))
        return Math.floor(distance) === 1 || Math.floor(distance) === 0
    }

    protected lackOfMovesAlert(moves: number, player: Player): void {
        Toast.fire({
            icon: 'error',
            title: `Требуемое количество ходов: ${moves}, у вас есть только ${player.movesLeft}`,
            timer: 1500
        })
    }

    public discoverArea(location: AbstractLocation): void {
        const player = this.getCurrentPlayer()
        if (player.movesLeft < AbstractLocation.movesRequired) {
            this.lackOfMovesAlert(AbstractLocation.movesRequired, player)
            return
        }
        if (!this.playerCanVisitLocation(player, location)) {
            playSound(require("@/assets/audio/sfx/error.mp3"))
            return
        }
        const voices = player.side.character.voiceLines.positive
        playSound(voices[Math.floor(Math.random() * voices.length)])
        location.isDiscovered = true
        this.subtractPlayerMoves(player, 2)
        playSound(require("@/assets/audio/sfx/location_discovered.mp3"))
        player.setTotalExp(player.getTotalExp() + AbstractLocation.expForExploring)
        Toast.fire({
            icon: 'success',
            title: `${getColoredPlayerSpan(player)} открывает <span class="text-indigo-300">${location.getName()}</span> и получает <span class="text-indigo-600">${location.getExpForExploring()} опыта</span>`,
            timer: 2500
        })
        this.checkForMoves(player)
    }

    public applyQuest(sector: AbstractSector) {
        const player = this.getCurrentPlayer()
        if (player.movesLeft < AbstractQuest.movesRequired) {
            this.lackOfMovesAlert(AbstractQuest.movesRequired, player)
            return
        }
        if (player.currentSector !== sector.id) {
            playSound(require("@/assets/audio/sfx/error.mp3"))
            return
        }
        this.setActiveQuest(sector.quests[0])
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
            Toast.fire({
                icon: 'warning',
                title: `Ход переходит к ${getColoredPlayerSpan(this.getCurrentPlayer())}`,
                timer: 1500
            })
        }
    }

    constructor(era: AbstractEra, map: AbstractMap, lightSidePlayers: Player[], darkSidePlayers: Player[], currentPlayerIndex = 0) {
        this.era = era
        this.map = map
        this.lightSidePlayers = lightSidePlayers
        this.darkSidePlayers = darkSidePlayers
        this.currentPlayerIndex = currentPlayerIndex
        const audio = new Audio(this.map.getSoundtrackPath())
        audio.loop = true
        this.mainAudio = audio
        // this.mainAudio.play()
    }
}